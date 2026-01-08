import { useEffect, useRef, RefObject } from 'react'

/**
 * useScrollDraw
 *
 * Draw SVG path stroke based on scroll percentage.
 * Uses strokeDasharray and strokeDashoffset to reveal the path as user scrolls.
 *
 * @param pathRef - Reference to an SVG path/geometry element
 * @param containerRef - Optional scrollable container (defaults to window)
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null)
 * const pathRef = useRef<SVGPathElement>(null)
 *
 * useScrollDraw(pathRef, containerRef)
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
  containerRef?: RefObject<HTMLElement | null>
) {
  const updateStrokeRef = useRef<() => void>()

  useEffect(() => {
    const path = pathRef.current
    const containerEl = containerRef?.current
    const container = containerEl ?? window

    if (!path || !container) return

    const totalLength = path.getTotalLength()
    path.style.strokeDasharray = `${totalLength} ${totalLength}`
    path.style.strokeDashoffset = totalLength.toString()

    updateStrokeRef.current = () => {
      const scrollTop =
        container instanceof Window
          ? window.pageYOffset || document.documentElement.scrollTop || 0
          : container.scrollTop

      const scrollHeight =
        container instanceof Window
          ? document.documentElement.scrollHeight - document.documentElement.clientHeight
          : container.scrollHeight - container.clientHeight

      const scrollPercentage = scrollHeight === 0 ? 0 : scrollTop / scrollHeight
      const offset = totalLength * (1 - scrollPercentage)
      path.style.strokeDashoffset = offset.toString()
    }

    updateStrokeRef.current()
  }, [pathRef, containerRef])

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