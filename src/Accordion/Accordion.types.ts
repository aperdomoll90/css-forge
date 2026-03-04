export type AccordionProps = {
  /** Title/summary content (can include icons, components, etc) */
  title: React.ReactNode
  /** Content shown when expanded */
  content: React.ReactNode
  /** Name attribute for mutual exclusivity (same name = only one open) */
  name?: string
  /**
   * Controlled open state. If provided, component is controlled.
   * Use with onToggle to manage state externally.
   */
  open?: boolean
  /**
   * Default open state (uncontrolled).
   * Ignored if `open` prop is provided.
   */
  defaultOpen?: boolean
  /** Callback fired when toggled */
  onToggle?: (isOpen: boolean) => void
  /** Class name for the details element */
  className?: string
  /** Class name for the summary element */
  summaryClassName?: string
  /** Class name for the content wrapper */
  contentClassName?: string
  /** Disable the accordion (prevents opening/closing) */
  disabled?: boolean
}