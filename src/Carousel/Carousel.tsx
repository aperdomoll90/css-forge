import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { CarouselProps } from './Carousel.types'
import styles from './Carousel.module.scss'

export const Carousel: React.FC<CarouselProps> = ({
  children,
  slidesToShow = 1,
  loop = false,
  showDots = true,
  showButtons = true,
  outerButtons = false,
  prevButtonClassName = '',
  nextButtonClassName = '',
  prevIcon,
  nextIcon,
  buttonColor,
  activeDotColor,
  dotColor,
  transitionDuration = 250,
  lazyLoad = false,
  autoplay = 0,
  pauseOnHover = true,
  className = '',
  style,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(new Set([0]))
  const trackRef = useRef<HTMLUListElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const slideCount = children.length
  const maxSlideIndex = slideCount - slidesToShow

  const combinedStyle = {
    ...(buttonColor && { '--button-color': buttonColor }),
    ...(activeDotColor && { '--active-dot-color': activeDotColor }),
    ...(dotColor && { '--dot-color': dotColor }),
    '--transition-duration': `${transitionDuration}ms`,
    ...style,
  } as React.CSSProperties

  // Determine which slides should be rendered (for lazy loading)
  const visibleSlides = useMemo(() => {
    if (!lazyLoad) return null
    const visible = new Set<number>()
    for (let i = currentSlide; i < currentSlide + slidesToShow; i++) {
      visible.add(i)
      // Also load adjacent slides for smoother transitions
      if (i > 0) visible.add(i - 1)
      if (i < slideCount - 1) visible.add(i + 1)
    }
    return visible
  }, [currentSlide, slidesToShow, slideCount, lazyLoad])

  // Update loaded slides for lazy loading
  useEffect(() => {
    if (lazyLoad && visibleSlides) {
      setLoadedSlides((prev) => {
        const updated = new Set(prev)
        visibleSlides.forEach((index) => updated.add(index))
        return updated
      })
    }
  }, [visibleSlides, lazyLoad])

  const updateSlidePosition = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const slideWidth = track.clientWidth / slidesToShow
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`
  }, [currentSlide, slidesToShow])

  useEffect(() => {
    updateSlidePosition()
  }, [currentSlide, updateSlidePosition])

  // Debounced resize handler
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateSlidePosition, 100)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [updateSlidePosition])

  const handlePrevClick = useCallback(() => {
    setCurrentSlide((prev) => {
      if (loop) {
        return prev > 0 ? prev - 1 : maxSlideIndex
      }
      return Math.max(0, prev - 1)
    })
  }, [maxSlideIndex, loop])

  const handleNextClick = useCallback(() => {
    setCurrentSlide((prev) => {
      if (loop) {
        return (prev + 1) % (maxSlideIndex + 1)
      }
      return Math.min(maxSlideIndex, prev + 1)
    })
  }, [maxSlideIndex, loop])

  const moveToSlide = useCallback(
    (targetIndex: number) => {
      setCurrentSlide(Math.min(targetIndex, maxSlideIndex))
    },
    [maxSlideIndex]
  )

  // Keyboard navigation
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrevClick()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNextClick()
      }
    }

    carousel.addEventListener('keydown', handleKeyDown)
    return () => carousel.removeEventListener('keydown', handleKeyDown)
  }, [handlePrevClick, handleNextClick])

  // Touch/swipe support
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNextClick()
      } else {
        handlePrevClick()
      }
    }
  }, [handleNextClick, handlePrevClick])

  // Autoplay
  useEffect(() => {
    if (autoplay <= 0 || isPaused) return

    const intervalId = setInterval(() => {
      handleNextClick()
    }, autoplay)

    return () => clearInterval(intervalId)
  }, [autoplay, isPaused, handleNextClick])

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && autoplay > 0) {
      setIsPaused(true)
    }
  }, [pauseOnHover, autoplay])

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && autoplay > 0) {
      setIsPaused(false)
    }
  }, [pauseOnHover, autoplay])

  const handleFocus = useCallback(() => {
    if (autoplay > 0) {
      setIsPaused(true)
    }
  }, [autoplay])

  const handleBlur = useCallback(() => {
    if (autoplay > 0) {
      setIsPaused(false)
    }
  }, [autoplay])

  const isPrevDisabled = !loop && currentSlide === 0
  const isNextDisabled = !loop && currentSlide === maxSlideIndex

  const shouldRenderSlide = (index: number) => {
    if (!lazyLoad) return true
    return loadedSlides.has(index)
  }

  return (
    <div
      ref={carouselRef}
      className={`${styles['c-carousel']} ${className}`}
      style={combinedStyle}
      role="region"
      aria-roledescription="carousel"
      aria-live={autoplay > 0 ? 'off' : 'polite'}
      data-outer-buttons={outerButtons || undefined}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {showButtons && (
        <button
          onClick={handlePrevClick}
          aria-label="Previous slide"
          disabled={isPrevDisabled}
          className={`${styles['c-carousel__button']} ${prevButtonClassName}`}
          data-direction="left"
          data-hidden={isPrevDisabled || undefined}
          tabIndex={-1}
        >
          {prevIcon || '❮'}
        </button>
      )}

      <div className={styles['c-carousel__track-container']}>
        <ul className={styles['c-carousel__track']} ref={trackRef}>
          {children.map((child, index) => (
            <li
              key={index}
              aria-hidden={index < currentSlide || index >= currentSlide + slidesToShow}
              className={styles['c-carousel__slide']}
              data-current={(index >= currentSlide && index < currentSlide + slidesToShow) || undefined}
              style={{
                left: `${(100 / slidesToShow) * index}%`,
                width: `${100 / slidesToShow}%`,
              }}
            >
              {shouldRenderSlide(index) ? child : null}
            </li>
          ))}
        </ul>
      </div>

      {showButtons && (
        <button
          onClick={handleNextClick}
          aria-label="Next slide"
          disabled={isNextDisabled}
          className={`${styles['c-carousel__button']} ${nextButtonClassName}`}
          data-direction="right"
          data-hidden={isNextDisabled || undefined}
          tabIndex={-1}
        >
          {nextIcon || '❯'}
        </button>
      )}

      {showDots && (
        <div className={styles['c-carousel__nav']} role="tablist">
          {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => moveToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
              className={styles['c-carousel__indicator']}
              data-current={index === currentSlide || undefined}
              tabIndex={index === currentSlide ? 0 : -1}
            />
          ))}
        </div>
      )}
    </div>
  )
}