import React, { CSSProperties } from 'react'
import { WaveAccordionProps } from './WaveAccordion.types'
import styles from './WaveAccordion.module.scss'

const TIMING_PRESETS: Record<string, string> = {
  pop: 'cubic-bezier(0.25, 0.01, 0, 1.5)',
  snap: 'cubic-bezier(0.6, 0.1, 0.2, 1)',
}

export const WaveAccordion: React.FC<WaveAccordionProps> = ({
  items,
  height = '50dvh',
  gap = '1%',
  aspectRatio = '2 / 11.5',
  animation = {},
  grayscale = true,
  className = '',
  panelClassName = '',
  onPanelClick,
  onPanelFocus,
}) => {
  const {
    duration = 0.5,
    timing = 'pop',
    hoverScale = 1.07,
    adjacentScale = 1.02,
    hoverDepth = 2.2,
    adjacentDepth = 1.2,
    rotateAngle = 35,
    perspective = 25,
  } = animation

  const timingValue = TIMING_PRESETS[timing] || timing

  const containerStyle: CSSProperties = {
    '--wa-height': height,
    '--wa-gap': gap,
    '--wa-aspect-ratio': aspectRatio,
    '--wa-duration': `${duration}s`,
    '--wa-timing': timingValue,
    '--wa-perspective': perspective,
    '--wa-hover-scale': hoverScale,
    '--wa-adjacent-scale': adjacentScale,
    '--wa-hover-depth': hoverDepth,
    '--wa-adjacent-depth': adjacentDepth,
    '--wa-rotate-angle': `${rotateAngle}deg`,
  } as CSSProperties

  return (
    <div
      className={`${styles['c-wave-accordion']} ${className}`}
      style={containerStyle}
      data-grayscale={grayscale}
    >
      {items.map((item, index) => {
        const isImage = typeof item === 'string'
        const panelStyle: CSSProperties = isImage
          ? { backgroundImage: `url(${item})` }
          : {}

        return (
          <div
            key={index}
            className={`${styles['c-wave-accordion__panel']} ${panelClassName}`}
            style={panelStyle}
            tabIndex={0}
            role="button"
            aria-label={isImage ? `Panel ${index + 1}` : undefined}
            onClick={() => onPanelClick?.(index)}
            onFocus={() => onPanelFocus?.(index)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onPanelClick?.(index)
              }
            }}
          >
            {!isImage && item}
          </div>
        )
      })}
    </div>
  )
}
