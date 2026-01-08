import { useEffect, useRef, RefObject } from 'react'

export type ScrollTriggerItem = {
  /** Scroll percentage (0-1) at which to trigger */
  threshold: number
  /** Callback when crossing down into threshold */
  onEnter?: () => void
  /** Callback when crossing back up past threshold */
  onExit?: () => void
  /** If true, onEnter fires only once */
  once?: boolean
}

export type UseScrollTriggerOptions = {
  /** Optional scrollable container (defaults to window) */
  containerRef?: RefObject<HTMLElement | null>
  /** Array of trigger configurations */
  triggers: ScrollTriggerItem[]
}

/**
 * useScrollTrigger
 *
 * Fire callbacks when scroll reaches certain percentage thresholds.
 * Supports both entering and exiting thresholds, with optional one-time triggers.
 *
 * @param options - Configuration object with containerRef and triggers array
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null)
 * const [section, setSection] = useState('intro')
 *
 * useScrollTrigger({
 *   containerRef,
 *   triggers: [
 *     { threshold: 0.25, onEnter: () => setSection('about') },
 *     { threshold: 0.5, onEnter: () => setSection('work') },
 *     { threshold: 0.75, onEnter: () => setSection('contact') },
 *   ],
 * })
 *
 * return (
 *   <div ref={containerRef} style={{ overflowY: 'scroll', height: '100vh' }}>
 *     <div style={{ height: '400vh' }}>Current: {section}</div>
 *   </div>
 * )
 * ```
 */
export function useScrollTrigger({ containerRef, triggers }: UseScrollTriggerOptions) {
  const stateRef = useRef<Record<number, boolean>>({})
  const firedOnceRef = useRef<Record<number, boolean>>({})
  const tickingRef = useRef(false)

  useEffect(() => {
    const container = containerRef?.current ?? window

    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true

      requestAnimationFrame(() => {
        const target = containerRef?.current

        const scrollTop = target
          ? target.scrollTop
          : window.scrollY || document.documentElement.scrollTop

        const scrollHeight = target
          ? target.scrollHeight - target.clientHeight
          : document.documentElement.scrollHeight - window.innerHeight

        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0

        triggers.forEach(({ threshold, onEnter, onExit, once }) => {
          const isPast = progress >= threshold
          const wasPast = stateRef.current[threshold] ?? false

          if (isPast && !wasPast) {
            if (once && firedOnceRef.current[threshold]) {
              stateRef.current[threshold] = true
              return
            }
            onEnter?.()
            stateRef.current[threshold] = true
            if (once) {
              firedOnceRef.current[threshold] = true
            }
          }

          if (!isPast && wasPast) {
            if (!once) {
              onExit?.()
            }
            stateRef.current[threshold] = false
          }
        })

        tickingRef.current = false
      })
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => container.removeEventListener('scroll', handleScroll)
  }, [containerRef, triggers])
}