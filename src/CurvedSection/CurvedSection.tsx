import React from 'react'
import styles from './CurvedSection.module.scss'

interface CurvedSectionProps {
  children: React.ReactNode
  className?: string
  background?: string
  curveBackground?: string
  animationRange?: string
  scaleFrom?: number
  scaleTo?: number
}

export const CurvedSection: React.FC<CurvedSectionProps> = ({
  children,
  className = '',
  background = 'var(--white)',
  curveBackground = 'var(--white)',
  animationRange = '90% 100%',
  scaleFrom = 30,
  scaleTo = 0,
}) => {

  const sectionStyle = {
    '--section-bg': background,
    '--curve-bg': curveBackground || background,
    '--animation-range': animationRange,
    '--curve-scale-from': scaleFrom,
    '--curve-scale-to': scaleTo,
  } as React.CSSProperties

  return (
    <section
      className={`${styles['c-curved-section']} ${className}`}
      style={sectionStyle}
    >
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="content-curve" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.5 C0.75,1 0.25,1 0,0.5 L0,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {children}
    </section>
  )
}
