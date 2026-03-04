import { DrawButtonProps } from './DrawButton.types'
import { ValuePerBreakpoint } from '../utils'
import { Swoosh, UnderSwoosh } from './Swoosh'
import styles from './DrawButton.module.scss'

interface CSSVarStyles extends React.CSSProperties {
  '--fs-default'?: string
  '--fs-sm'?: string
  '--fs-md'?: string
  '--fs-mdx'?: string
  '--fs-lg'?: string
  '--label-color'?: string
  '--stroke-color'?: string
}

export const DrawButton: React.FC<DrawButtonProps> = ({
  href,
  onClick,
  children,
  className = '',
  fontSize = '1rem',
  target,
  variant = 'circled',
  style,
  download,
  labelColor,
  strokeColor,
}) => {
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
    ...(strokeColor && { '--stroke-color': strokeColor }),
    ...buildBreakpointVars(fontSize, 'fs'),
    ...style,
  }

  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) {
      onClick(e)
    }
  }

  const SvgComponent = variant === 'underline' ? UnderSwoosh : Swoosh

  const content = (
    <>
      <span className={styles['c-draw-button__label']}>{children}</span>
      <SvgComponent className={styles['c-draw-button__svg']} />
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${styles['c-draw-button']} ${className}`}
        style={sizeVars}
        data-variant={variant}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        download={download}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles['c-draw-button']} ${className}`}
      style={sizeVars}
      data-variant={variant}
    >
      {content}
    </button>
  )
}