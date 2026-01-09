import { useEffect, useRef, RefObject } from 'react'

export interface UseScrollDrawOptions {
  /** Scroll percentage (0-1) at which drawing starts, default: 0 */
  startAt?: number
  /** Scroll percentage (0-1) at which drawing completes, default: 1 */
  endAt?: number
  /** Reverse the draw direction (undraw instead of draw), default: false */
  reverse?: boolean
}

/**
 * useScrollDraw
 *
 * Draw SVG path stroke based on scroll percentage.
 * Uses strokeDasharray and strokeDashoffset to reveal the path as user scrolls.
 *
 * @param pathRef - Reference to an SVG path/geometry element
 * @param containerRef - Optional scrollable container (defaults to window)
 * @param options - Configuration for start/end scroll percentages
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null)
 * const pathRef = useRef<SVGPathElement>(null)
 *
 * useScrollDraw(pathRef, containerRef, { startAt: 0.1, endAt: 0.9 })
 *
 * return (
 *   <div ref={containerRef} style={{ overflowY: 'scroll' }}>
 *     <svg>
 *       <path ref={pathRef} d="M0 0 L100 100" stroke="#fff" strokeWidth="2" fill="none" />
 *     </svg>
 *     <div style={{ height: '300vh' }} />
 *   </div>
 * )
 * ```
 */
export function useScrollDraw(
  pathRef: RefObject<SVGGeometryElement | null>,
  containerRef?: RefObject<HTMLElement | null>,
  options: UseScrollDrawOptions = {}
) {
  const { startAt = 0, endAt = 1, reverse = false } = options
  const updateStrokeRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const path = pathRef.current
    const containerEl = containerRef?.current
    const container = containerEl ?? window

    if (!path || !container) return

    const totalLength = path.getTotalLength()
    path.style.strokeDasharray = `${totalLength} ${totalLength}`
    path.style.strokeDashoffset = reverse ? '0' : totalLength.toString()

    updateStrokeRef.current = () => {
      const scrollTop =
        container instanceof Window
          ? window.pageYOffset || document.documentElement.scrollTop || 0
          : container.scrollTop

      const scrollHeight =
        container instanceof Window
          ? document.documentElement.scrollHeight - document.documentElement.clientHeight
          : container.scrollHeight - container.clientHeight

      const rawScroll = scrollHeight === 0 ? 0 : scrollTop / scrollHeight

      // Map scroll position to startAt-endAt range
      const range = endAt - startAt
      const adjusted = Math.max(0, rawScroll - startAt)
      const scrollPercentage = Math.min(1, range > 0 ? adjusted / range : 0)

      // reverse: start fully drawn, undraw as you scroll
      // normal: start hidden, draw as you scroll
      const offset = reverse
        ? totalLength * scrollPercentage
        : totalLength * (1 - scrollPercentage)
      path.style.strokeDashoffset = offset.toString()
    }

    updateStrokeRef.current()
  }, [pathRef, containerRef, startAt, endAt, reverse])

  useEffect(() => {
    const container = containerRef?.current ?? window
    if (!container || !updateStrokeRef.current) return

    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateStrokeRef.current?.()
          ticking = false
        })
        ticking = true
      }
    }

    container.addEventListener('scroll', onScroll)
    return () => container.removeEventListener('scroll', onScroll)
  }, [containerRef])
}