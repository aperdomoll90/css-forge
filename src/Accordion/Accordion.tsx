import { useRef, useEffect } from 'react'
import { AccordionProps } from './Accordion.types'
import styles from './Accordion.module.scss'

/**
 * Accordion
 *
 * Single native <details>/<summary> element.
 * Supports both controlled and uncontrolled modes.
 * Accessible out of the box (keyboard nav, screen reader support).
 *
 * @example Uncontrolled
 * ```tsx
 * <Accordion
 *   title={<><span className="icon">+</span> Question</>}
 *   content={<p>Answer</p>}
 *   defaultOpen={false}
 *   onToggle={(isOpen) => console.log(isOpen)}
 * />
 * ```
 *
 * @example Controlled
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false)
 *
 * <Accordion
 *   title="Question"
 *   content="Answer"
 *   open={isOpen}
 *   onToggle={setIsOpen}
 * />
 * ```
 */
export const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  name,
  open,
  defaultOpen,
  onToggle,
  className = '',
  summaryClassName = '',
  contentClassName = '',
  disabled = false,
}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const isControlled = open !== undefined

  // Sync controlled state with DOM
  useEffect(() => {
    if (isControlled && detailsRef.current) {
      detailsRef.current.open = open
    }
  }, [isControlled, open])

  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    if (disabled) {
      e.preventDefault()
      if (detailsRef.current) {
        detailsRef.current.open = isControlled ? !!open : detailsRef.current.open
      }
      return
    }

    const newOpen = e.currentTarget.open

    // In controlled mode, prevent native behavior and let parent handle it
    if (isControlled && detailsRef.current) {
      detailsRef.current.open = open
    }

    onToggle?.(newOpen)
  }

  return (
    <details
      ref={detailsRef}
      name={disabled ? undefined : name}
      open={isControlled ? open : defaultOpen}
      className={`${styles['c-accordion-item']} ${className}`}
      onToggle={handleToggle}
      aria-disabled={disabled || undefined}
    >
      <summary
        className={`${styles['c-accordion-item__summary']} ${summaryClassName}`}
        tabIndex={disabled ? -1 : undefined}
      >
        {title}
      </summary>
      <div className={contentClassName}>{content}</div>
    </details>
  )
}