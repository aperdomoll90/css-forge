import React, { CSSProperties, useState } from 'react'
import { ExpandingCardsProps } from './ExpandingCards.types'
import styles from './ExpandingCards.module.scss'

export const ExpandingCards: React.FC<ExpandingCardsProps> = ({
  items,
  height = '90%',
  gap = '10px',
  marginInline = '50px',
  borderRadius = '30px',
  minWidth = '70px',
  animation = {},
  className = '',
  cardClassName = '',
  onCardClick,
  onCardHover,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const {
    duration = 0.5,
    timing = 'ease-in-out',
    expandedGrow = 7,
    collapsedGrow = 1,
  } = animation

  const containerStyle: CSSProperties = {
    '--ec-height': height,
    '--ec-gap': gap,
    '--ec-margin-inline': marginInline,
    '--ec-border-radius': borderRadius,
    '--ec-min-width': minWidth,
    '--ec-duration': `${duration}s`,
    '--ec-timing': timing,
    '--ec-expanded-grow': expandedGrow,
    '--ec-collapsed-grow': collapsedGrow,
  } as CSSProperties

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    onCardHover?.(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    onCardHover?.(null)
  }

  return (
    <div
      className={`${styles['c-expanding-cards']} ${className}`}
      style={containerStyle}
    >
      {items.map((item, index) => {
        const cardStyle: CSSProperties = {
          background: item.background,
          ...item.style,
        }

        return (
          <div
            key={index}
            className={`${styles['c-expanding-cards__card']} ${cardClassName} ${item.className || ''}`}
            style={cardStyle}
            tabIndex={0}
            role="button"
            data-expanded={hoveredIndex === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => onCardClick?.(index)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onCardClick?.(index)
              }
            }}
          >
            {item.content}
          </div>
        )
      })}
    </div>
  )
}
