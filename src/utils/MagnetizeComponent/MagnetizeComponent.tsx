import React from 'react'

/**
 * MagnetizeComponent
 *
 * A reusable "magnetic follow" engine:
 * - Attach to a container via areaRef.
 * - Provide one or more target selectors with motion options.
 * - Exposes handleMouseMove / handleMouseLeave handlers.
 *
 * On mouse move:
 *   - computes target offsets for each element (in %).
 *   - starts a requestAnimationFrame loop to ease elements toward the cursor.
 *
 * On mouse leave:
 *   - switches elements to spring mode so they bounce back to center.
 *
 * @example
 * ```tsx
 * const areaRef = useRef<HTMLDivElement | null>(null);
 * const { handleMouseMove, handleMouseLeave } = useMagnetize({
 *   areaRef,
 *   targets: [
 *     { selector: '.c-bubble-button', options: { intensity: 0.4 } },
 *     { selector: '.c-bubble-button__label', options: { intensity: 0.15 } },
 *   ],
 * });
 *
 * <div ref={areaRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>...</div>
 * ```
 */

/**
 * PerTargetOptions (per-element tuning)
 *
 * @property followLerpFactor - How quickly the element follows the cursor.
 *   Range: 0.02 → 0.3. Lower = floaty/delayed. Higher = snappy/locked-on. Default: 0.18
 *
 * @property cursorOffsetPercent - Extra offset in percent (%) so the element doesn't sit exactly under the cursor.
 *   Example: { x: 10, y: -5 } floats it slightly right/up. Default: { x: 0, y: 0 }
 *
 * @property clampWithinArea - Prevents the element from moving outside the container.
 *   true = stays inside bounds. false = can drift outside. Default: true
 *
 * @property intensity - How far the element travels relative to cursor distance.
 *   Range: 0.1 → 2. 1 = natural, <1 = subtle, >1 = exaggerated. Default: 1
 *
 * @property maxTravelPercent - Maximum translate() movement allowed, in percent of its size.
 *   Range: 20 → 300. 100 = can move by its own width/height. Default: 200
 *
 * @property returnSpring - Spring physics for returning to center
 *   - stiffness: Strength of the pull back to center. Range: 5 → 40. Default: 18
 *   - damping: How much bounce is absorbed. Range: 4 → 20. Default: 10
 *   - precision: How close to center before we consider it "done". Range: 0.001 → 0.1. Default: 0.02
 */
export type PerTargetOptions = {
  followLerpFactor?: number
  cursorOffsetPercent?: { x: number; y: number }
  clampWithinArea?: boolean
  intensity?: number
  maxTravelPercent?: number
  returnSpring?: {
    stiffness?: number
    damping?: number
    precision?: number
  }
}

export interface MagnetizeComponentProps {
  /** The outer container element that tracks mouse movement. Its the area around that defines where the target follows */
  areaRef: React.RefObject<HTMLElement | null>
  /** Array of targets to magnetize */
  targets: Array<{
    /** CSS selector for child element inside the area to move */
    selector: string
    /** Motion options for this target */
    options?: PerTargetOptions
  }>
}

type ResolvedOptions = {
  followLerpFactor: number
  cursorOffsetPercent: { x: number; y: number }
  clampWithinArea: boolean
  intensity: number
  maxTravelPercent: number
  returnSpringStiffness: number
  returnSpringDamping: number
  returnSpringPrecision: number
}

type TargetState = {
  selector: string
  el: HTMLElement | null
  mode: 'follow' | 'settle'
  currentX: number
  currentY: number
  targetX: number
  targetY: number
  velX: number
  velY: number
  opts: ResolvedOptions
}

const resolveOptions = (options?: PerTargetOptions): ResolvedOptions => ({
  followLerpFactor: options?.followLerpFactor ?? 0.18,
  cursorOffsetPercent: options?.cursorOffsetPercent ?? { x: 0, y: 0 },
  clampWithinArea: options?.clampWithinArea ?? true,
  intensity: options?.intensity ?? 1,
  maxTravelPercent: options?.maxTravelPercent ?? 200,
  returnSpringStiffness: options?.returnSpring?.stiffness ?? 18,
  returnSpringDamping: options?.returnSpring?.damping ?? 10,
  returnSpringPrecision: options?.returnSpring?.precision ?? 0.02,
})

export const useMagnetize = ({ areaRef, targets }: MagnetizeComponentProps) => {
  const animationFrameIdRef = React.useRef<number | null>(null)
  const lastTimestampRef = React.useRef<number | null>(null)
  const targetsRef = React.useRef<TargetState[]>([])

  // sync TargetState list with `targets` config
  React.useEffect(() => {
    const prev = targetsRef.current
    targetsRef.current = targets.map((cfg) => {
      const existing = prev.find((t) => t.selector === cfg.selector)
      const opts = resolveOptions(cfg.options)
      if (existing) {
        return { ...existing, opts }
      }
      return {
        selector: cfg.selector,
        el: null,
        mode: 'follow' as const,
        currentX: 0,
        currentY: 0,
        targetX: 0,
        targetY: 0,
        velX: 0,
        velY: 0,
        opts,
      }
    })
  }, [targets])

  const applyTransform = (targetElement: HTMLElement, xPercent: number, yPercent: number) => {
    targetElement.style.transform = `translate(${xPercent}%, ${yPercent}%)`
  }

  const stopAnimationLoop = () => {
    if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current)
    animationFrameIdRef.current = null
    lastTimestampRef.current = null
  }

  const ensureAnimationLoop = () => {
    if (animationFrameIdRef.current) return

    animationFrameIdRef.current = requestAnimationFrame(function tick(timestamp) {
      animationFrameIdRef.current = requestAnimationFrame(tick)

      if (lastTimestampRef.current == null) lastTimestampRef.current = timestamp
      const dt = Math.min((timestamp - lastTimestampRef.current) / 1000, 0.032)
      lastTimestampRef.current = timestamp

      const allControllers = targetsRef.current
      let allSettled = true

      for (const controller of allControllers) {
        const { el, mode, opts } = controller
        if (!el) continue

        if (mode === 'follow') {
          allSettled = false
          const alpha = 1 - Math.pow(1 - opts.followLerpFactor, dt * 60)
          controller.currentX += (controller.targetX - controller.currentX) * alpha
          controller.currentY += (controller.targetY - controller.currentY) * alpha
          applyTransform(el, controller.currentX, controller.currentY)
        } else {
          const ax = -opts.returnSpringStiffness * controller.currentX - opts.returnSpringDamping * controller.velX
          const ay = -opts.returnSpringStiffness * controller.currentY - opts.returnSpringDamping * controller.velY

          controller.velX += ax * dt
          controller.velY += ay * dt
          controller.currentX += controller.velX * dt * 60
          controller.currentY += controller.velY * dt * 60

          applyTransform(el, controller.currentX, controller.currentY)

          const done =
            Math.abs(controller.currentX) < opts.returnSpringPrecision &&
            Math.abs(controller.currentY) < opts.returnSpringPrecision &&
            Math.abs(controller.velX) < opts.returnSpringPrecision &&
            Math.abs(controller.velY) < opts.returnSpringPrecision

          if (!done) {
            allSettled = false
          } else {
            controller.currentX = 0
            controller.currentY = 0
            controller.velX = 0
            controller.velY = 0
            applyTransform(el, 0, 0)
          }
        }
      }

      if (allSettled) {
        stopAnimationLoop()
      }
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const area = areaRef.current
    if (!area) return

    const areaRect = area.getBoundingClientRect()
    const localX = e.clientX - areaRect.left
    const localY = e.clientY - areaRect.top

    for (const targetMotionController of targetsRef.current) {
      const targetElement = area.querySelector<HTMLElement>(targetMotionController.selector)
      targetMotionController.el = targetElement ?? null
      if (!targetElement) continue

      const { clampWithinArea, intensity, cursorOffsetPercent, maxTravelPercent } = targetMotionController.opts

      targetMotionController.mode = 'follow'

      const centerX0 = targetElement.offsetLeft + targetElement.offsetWidth / 2
      const centerY0 = targetElement.offsetTop + targetElement.offsetHeight / 2

      let cursorToElementDiffX = localX - centerX0
      let cursorToElementDiffY = localY - centerY0

      if (clampWithinArea) {
        const minDx = -targetElement.offsetLeft
        const maxDx = area.clientWidth - (targetElement.offsetLeft + targetElement.offsetWidth)
        const minDy = -targetElement.offsetTop
        const maxDy = area.clientHeight - (targetElement.offsetTop + targetElement.offsetHeight)
        cursorToElementDiffX = Math.max(minDx, Math.min(maxDx, cursorToElementDiffX))
        cursorToElementDiffY = Math.max(minDy, Math.min(maxDy, cursorToElementDiffY))
      }

      let xPercent = (cursorToElementDiffX / targetElement.offsetWidth) * 100 * intensity + cursorOffsetPercent.x
      let yPercent = (cursorToElementDiffY / targetElement.offsetHeight) * 100 * intensity + cursorOffsetPercent.y

      xPercent = Math.max(-maxTravelPercent, Math.min(maxTravelPercent, xPercent))
      yPercent = Math.max(-maxTravelPercent, Math.min(maxTravelPercent, yPercent))

      targetMotionController.targetX = xPercent
      targetMotionController.targetY = yPercent
    }

    ensureAnimationLoop()
  }

  const handleMouseLeave = () => {
    const area = areaRef.current
    if (!area) return

    for (const targetMotionController of targetsRef.current) {
      const targetElement = area.querySelector<HTMLElement>(targetMotionController.selector)
      targetMotionController.el = targetElement ?? null
      if (!targetElement) continue

      targetMotionController.mode = 'settle'
    }

    ensureAnimationLoop()
  }

  return { handleMouseMove, handleMouseLeave }
}