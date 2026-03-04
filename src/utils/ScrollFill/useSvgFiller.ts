import { useEffect, useRef, RefObject } from 'react'

export interface UseSvgFillerOptions {
  /** Scroll percentage to start animation (0.0–1.0), default: 0 */
  startAt?: number
  /** Fill from bottom instead of top */
  reverse?: boolean
}

export function useSvgFiller(
  fillRef: RefObject<SVGRectElement | null>,
  containerRef?: RefObject<HTMLElement | null>,
  options: UseSvgFillerOptions = {}
) {
  const { startAt = 0, reverse = false } = options
  const updateFillRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const rect = fillRef.current
    const containerEl = containerRef?.current
    const container = containerEl ?? window

    if (!rect || !container) return

    const fullHeight = rect.getBBox().height || 1543

    updateFillRef.current = () => {
      const scrollTop =
        container instanceof Window
          ? window.pageYOffset || document.documentElement.scrollTop || 0
          : container.scrollTop

      const scrollHeight =
        container instanceof Window
          ? document.documentElement.scrollHeight - document.documentElement.clientHeight
          : container.scrollHeight - container.clientHeight

      const rawScroll = scrollHeight === 0 ? 0 : scrollTop / scrollHeight

      // Apply stagger: delay start + adjust fill speed
      const adjusted = Math.max(0, rawScroll - startAt)
      const clamped = Math.min(1, adjusted / (1 - startAt))

      const height = Math.min(clamped * fullHeight, fullHeight)
      rect.setAttribute('height', `${height}`)
      if (reverse) {
        rect.setAttribute('y', `${fullHeight - height}`)
      }
    }

    updateFillRef.current()
  }, [fillRef, containerRef, startAt, reverse])

  useEffect(() => {
    const container = containerRef?.current ?? window
    if (!container || !updateFillRef.current) return

    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateFillRef.current?.()
          ticking = false
        })
        ticking = true
      }
    }

    container.addEventListener('scroll', onScroll)
    return () => container.removeEventListener('scroll', onScroll)
  }, [containerRef])
}