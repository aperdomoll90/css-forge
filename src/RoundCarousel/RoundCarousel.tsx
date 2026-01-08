import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { RoundCarouselProps } from './RoundCarousel.types'
import styles from './RoundCarousel.module.scss'

export const RoundCarousel: React.FC<RoundCarouselProps> = ({
  slides,
  size = 70,
  onSlideChange,
  className = '',
  style,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const slidesCount = slides.length

  const activeSlide = slides[currentSlide]

  // Notify parent of slide changes
  useEffect(() => {
    onSlideChange?.(currentSlide, activeSlide)
  }, [currentSlide, activeSlide, onSlideChange])

  const moveToSlide = useCallback(
    (targetIndex: number) => {
      if (isAnimating) return
      setIsAnimating(true)

      const diff = (targetIndex - currentSlide + slidesCount) % slidesCount
      if (diff === 0) {
        setIsAnimating(false)
        return
      }

      const step = diff > slidesCount / 2 ? -1 : 1
      let current = currentSlide

      const animate = () => {
        current = (current + step + slidesCount) % slidesCount
        setCurrentSlide(current)

        if (current !== targetIndex) {
          setTimeout(animate, 300)
        } else {
          setIsAnimating(false)
        }
      }

      setTimeout(animate, 300)
    },
    [currentSlide, isAnimating, slidesCount]
  )

  const visibleSlides = useMemo(() => {
    return [-2, -1, 0, 1, 2].map(offset => ({
      index: (currentSlide + offset + slidesCount) % slidesCount,
      position: offset,
    }))
  }, [currentSlide, slidesCount])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        const prev = (currentSlide - 1 + slidesCount) % slidesCount
        moveToSlide(prev)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        const next = (currentSlide + 1) % slidesCount
        moveToSlide(next)
      }
    },
    [currentSlide, slidesCount, moveToSlide]
  )

  const getSlideTransform = (position: number) => {
    const radius = size / 2
    const angle = position * 47 + 141
    const scale = position === 0 ? 5 : Math.abs(position) === 1 ? 3 : 1
    return `rotate(${angle}deg) translateY(${radius}rem) rotate(-${angle}deg) scale(${scale})`
  }

  const isColor = (value: string) => {
    return !value.startsWith('http') && !value.startsWith('/')
  }

  const carouselStyle = {
    height: `${size}rem`,
    width: `${size}rem`,
  }

  const slideSize = {
    height: `${size * 0.085714}rem`,
    width: `${size * 0.085714}rem`,
  }

  return (
    <div
      className={`${styles['c-round-carousel']} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
      style={{
        background: isColor(activeSlide.background)
          ? activeSlide.background
          : `url(${activeSlide.background}) center/cover no-repeat`,
        ...style,
      }}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={carouselRef}
        className={styles['c-round-carousel__track']}
        style={carouselStyle}
      >
        {visibleSlides.map(({ index, position }) => {
          const slide = slides[index]
          const bgIsColor = isColor(slide.background)

          return (
            <div
              key={index}
              className={styles['c-round-carousel__slide']}
              style={{
                ...slideSize,
                transform: getSlideTransform(position),
                background: bgIsColor
                  ? slide.background
                  : `url(${slide.background}) center/cover no-repeat`,
              }}
              data-active={position === 0 || undefined}
              role="group"
              aria-roledescription="slide"
              aria-label={slide.label || `Slide ${index + 1} of ${slidesCount}`}
              aria-hidden={position !== 0}
            />
          )
        })}
      </div>

      <div className={styles['c-round-carousel__controls']} role="tablist" aria-label="Carousel Controls">
        {slides.map((slide, index) => {
          const bgIsColor = isColor(slide.background)

          return (
            <button
              key={`control-${index}`}
              onClick={() => moveToSlide(index)}
              aria-selected={index === currentSlide}
              aria-label={slide.label || `Go to slide ${index + 1}`}
              role="tab"
              tabIndex={index === currentSlide ? 0 : -1}
              className={styles['c-round-carousel__control']}
              data-active={index === currentSlide || undefined}
              style={{
                background: bgIsColor
                  ? slide.background
                  : `url(${slide.background}) center/cover no-repeat`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}