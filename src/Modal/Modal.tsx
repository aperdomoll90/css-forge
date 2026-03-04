import { useRef, useEffect } from 'react'
import { ModalProps } from './Modal.types'

/**
 * Modal
 *
 * Native HTML popover-based modal dialog.
 * Trigger from any button using `popovertarget={id}`.
 * Accessible and keyboard navigable out of the box.
 *
 * NOTE: Animation support varies by browser.
 * Chrome, Edge, Safari 17.4+ support popover natively.
 * Firefox degrades gracefully (modal works, no animation).
 *
 * @example Basic usage
 * ```tsx
 * <button popovertarget="my-modal">Open</button>
 *
 * <Modal id="my-modal" aria-label="Example modal">
 *   <h2>Hello</h2>
 *   <p>Modal content here</p>
 * </Modal>
 * ```
 *
 * @example With callbacks
 * ```tsx
 * <Modal
 *   id="my-modal"
 *   aria-labelledby="modal-title"
 *   onShow={() => console.log('opened')}
 *   onHide={() => console.log('closed')}
 * >
 *   <h2 id="modal-title">Title</h2>
 *   <p>Content</p>
 * </Modal>
 * ```
 *
 * @example Custom close button
 * ```tsx
 * <Modal
 *   id="my-modal"
 *   closeButtonContent={<span>Close</span>}
 *   closeButtonClassName="my-close-btn"
 * >
 *   <p>Content</p>
 * </Modal>
 * ```
 *
 * @example No close button (user controls closing)
 * ```tsx
 * <Modal id="my-modal" showCloseButton={false}>
 *   <p>Content</p>
 *   <button popovertarget="my-modal" popovertargetaction="hide">
 *     Custom Close
 *   </button>
 * </Modal>
 * ```
 */
export const Modal: React.FC<ModalProps> = ({
  id,
  children,
  showCloseButton = true,
  closeButtonContent = '×',
  onShow,
  onHide,
  onToggle,
  className = '',
  closeButtonClassName = '',
  style,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = popoverRef.current
    if (!el) return

    const handleToggle = (e: Event) => {
      const isOpen = (e as ToggleEvent).newState === 'open'
      onToggle?.(isOpen)
      if (isOpen) {
        onShow?.()
      } else {
        onHide?.()
      }
    }

    el.addEventListener('toggle', handleToggle)
    return () => el.removeEventListener('toggle', handleToggle)
  }, [onShow, onHide, onToggle])

  return (
    <div
      ref={popoverRef}
      popover="auto"
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      className={className}
      style={style}
    >
      {showCloseButton && (
        <button
          popoverTarget={id}
          popoverTargetAction="hide"
          type="button"
          aria-label="Close modal"
          className={closeButtonClassName}
        >
          {closeButtonContent}
        </button>
      )}
      {children}
    </div>
  )
}