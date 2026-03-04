export type ModalProps = {
  /**
   * Unique ID for the popover element.
   * Use this ID in your trigger button's `popovertarget` attribute.
   */
  id: string
  /** Modal content */
  children: React.ReactNode
  /**
   * Show close button inside modal.
   * @default true
   */
  showCloseButton?: boolean
  /** Custom close button content */
  closeButtonContent?: React.ReactNode
  /** Callback fired when modal is shown */
  onShow?: () => void
  /** Callback fired when modal is hidden */
  onHide?: () => void
  /** Callback fired on toggle (receives open state) */
  onToggle?: (open: boolean) => void
  /** Class name for the modal container */
  className?: string
  /** Class name for the close button */
  closeButtonClassName?: string
  /** Inline styles for the modal container */
  style?: React.CSSProperties
  /** Accessible label for the modal (required for a11y) */
  'aria-label'?: string
  /** ID of the element that labels the modal */
  'aria-labelledby'?: string
  /** ID of the element that describes the modal */
  'aria-describedby'?: string
}