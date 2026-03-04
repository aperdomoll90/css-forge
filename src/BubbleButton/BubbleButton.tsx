import { useRef } from 'react'
import { BubbleButtonProps } from './BubbleButton.types'
import { ValuePerBreakpoint } from '../utils'
import { useMagnetize } from '../utils'
import styles from './BubbleButton.module.scss'

interface CSSVarStyles extends React.CSSProperties {
  '--fs-default'?: string
  '--fs-sm'?: string
  '--fs-md'?: string
  '--fs-mdx'?: string
  '--fs-lg'?: string

  '--area-default'?: string
  '--area-sm'?: string
  '--area-md'?: string
  '--area-mdx'?: string
  '--area-lg'?: string

  '--pad-default'?: string
  '--pad-sm'?: string
  '--pad-md'?: string
  '--pad-mdx'?: string
  '--pad-lg'?: string

  '--label-color'?: string
  '--background-color'?: string
  '--background-hover'?: string
}

export const BubbleButton: React.FC<BubbleButtonProps> = ({
  label,
  fontSize = '1.5rem',
  magnetArea = '4rem',
  padding = '1rem',
  className = '',
  onClick,
  href,
  target,
  labelColor,
  backgroundColor,
  backgroundHoverColor,
  style,
}) => {
  const areaRef = useRef<HTMLDivElement>(null)
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:')

  const { handleMouseMove, handleMouseLeave } = useMagnetize({
    areaRef,
    targets: [
      {
        selector: `.${styles['c-bubble-button']}`,
        options: {
          intensity: 0.4,
          followLerpFactor: 0.1,
          clampWithinArea: true,
          returnSpring: { stiffness: 11, damping: 14, precision: 0.01 },
        },
      },
      {
        selector: `.${styles['c-bubble-button__label']}`,
        options: {
          intensity: 0.15,
          followLerpFactor: 0.1,
          clampWithinArea: true,
          returnSpring: { stiffness: 11, damping: 14, precision: 0.01 },
        },
      },
    ],
  })

  const buildBreakpointVars = (
    value: string | ValuePerBreakpoint,
    prefix: string
  ): Record<string, string | undefined> => {
    if (typeof value === 'string') {
      return { [`--${prefix}-default`]: value }
    }
    return {
      [`--${prefix}-default`]: value?.default,
      [`--${prefix}-sm`]: value?.sm,
      [`--${prefix}-md`]: value?.md,
      [`--${prefix}-mdx`]: value?.mdx,
      [`--${prefix}-lg`]: value?.lg,
    }
  }

  const sizeVars: CSSVarStyles = {
    ...(labelColor && { '--label-color': labelColor }),
    ...(backgroundColor && { '--background-color': backgroundColor }),
    ...(backgroundHoverColor && { '--background-hover': backgroundHoverColor }),
    ...buildBreakpointVars(fontSize, 'fs'),
    ...buildBreakpointVars(magnetArea, 'area'),
    ...buildBreakpointVars(padding, 'pad'),
    ...style,
  }

  const content = <span className={styles['c-bubble-button__label']}>{label}</span>

  return (
    <div
      ref={areaRef}
      className={`${styles['c-bubble']} ${className}`}
      style={sizeVars}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {href ? (
        <a
          href={href}
          target={target || (isExternal ? '_blank' : undefined)}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={styles['c-bubble-button']}
          onClick={onClick}
        >
          {content}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={styles['c-bubble-button']}>
          {content}
        </button>
      )}
    </div>
  )
}