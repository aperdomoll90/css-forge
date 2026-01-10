import { useId, useState } from 'react'
import { RubberEffect } from '../RubberEffect'
import { ToggleSwitch } from '../ToggleSwitch'
import { RubberSplitViewProps } from './RubberSplitView.types'
import styles from './RubberSplitView.module.scss'

const DEFAULT_BANNER_COLOR = '#667eea'
const DEFAULT_CONTENT_COLOR = '#1a1a2e'

/**
 * RubberSplitView
 *
 * A two-panel layout with a rubber band animation effect (admin portal style).
 * Uses RubberEffect for the stretchy banner background.
 * Toggle auto-contrasts based on which panel it's over (with CSS transition delay).
 *
 * @example Basic usage
 * ```tsx
 * <RubberSplitView
 *   id="my-split"
 *   bannerContent={<h1>Banner</h1>}
 *   contentPanel={<ul>...</ul>}
 *   toggleLabels={{ left: 'New', right: 'All' }}
 * />
 * ```
 *
 * @example With custom colors
 * ```tsx
 * <RubberSplitView
 *   id="styled"
 *   bannerColor="#667eea"
 *   contentColor="#1a1a2e"
 *   bannerContent={<h1>Portal</h1>}
 *   contentPanel={<div>Content</div>}
 * />
 * ```
 *
 * @example Controlled
 * ```tsx
 * const [open, setOpen] = useState(false)
 *
 * <RubberSplitView
 *   id="controlled"
 *   open={open}
 *   onToggle={setOpen}
 *   bannerContent={<h2>Banner</h2>}
 *   contentPanel={<ul>...</ul>}
 * />
 * ```
 */
export const RubberSplitView: React.FC<RubberSplitViewProps> = ({
  id,
  open: controlledOpen,
  defaultOpen = false,
  onToggle,
  bannerContent,
  contentPanel,
  duration = 0.9,
  stretchAmount = 5,
  bounceAmount = 0.9,
  easing = 'ease-in-out',
  className = '',
  bannerClassName = '',
  contentClassName = '',
  toggleClassName = '',
  style,
  showToggle = true,
  toggleLabels,
  bannerColor = DEFAULT_BANNER_COLOR,
  contentColor = DEFAULT_CONTENT_COLOR,
  toggleColor,
  toggleSize = 60,
  bannerBorderRadius = 12,
  'aria-label': ariaLabel,
}) => {
  const generatedId = useId()
  const inputId = id || `rubber-split-${generatedId}`

  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  const handleToggle = (checked: boolean) => {
    if (!isControlled) {
      setInternalOpen(checked)
    }
    onToggle?.(checked)
  }

  return (
    <div
      className={`${styles['c-rubber-split-view']} ${className}`}
      data-open={isOpen}
      style={
        {
          '--split-duration': `${duration}s`,
          '--split-easing': easing,
          '--split-color-delay': `${duration / 2}s`,
          '--banner-color': bannerColor,
          '--content-color': contentColor,
          '--toggle-open-color': toggleColor || bannerColor,
          '--toggle-closed-color': toggleColor || contentColor,
          ...style,
        } as React.CSSProperties
      }>
      {showToggle && (
        <div className={`${styles['c-rubber-split-view-toggle']} ${toggleClassName}`} data-toggle-wrapper data-open={isOpen}>
          <ToggleSwitch
            id={inputId}
            checked={isOpen}
            onToggle={handleToggle}
            size={toggleSize}
            color={isOpen ? bannerColor : contentColor}
            labelColor={isOpen ? bannerColor : contentColor}
            colorDelay={duration / 2}
            labelBefore={toggleLabels?.left}
            labelAfter={toggleLabels?.right}
            ariaLabel={ariaLabel}
          />
        </div>
      )}

      <RubberEffect
        open={isOpen}
        duration={duration}
        color={bannerColor}
        stretchAmount={stretchAmount}
        bounceAmount={bounceAmount}
        easing={easing}
        className={`${styles['c-rubber-split-view-banner']} ${bannerClassName}`}>
        {bannerContent}
      </RubberEffect>

      <div className={`${styles['c-rubber-split-view-content']} ${contentClassName}`} data-panel='content'>
        {contentPanel}
      </div>
    </div>
  )
}
