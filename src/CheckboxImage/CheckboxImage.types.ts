export type CheckboxImageProps = {
  /**
   * Unique ID for the checkbox input.
   * Used to associate label with input.
   */
  id: string
  /**
   * Name attribute for form submission.
   */
  name?: string
  /**
   * Value attribute for form submission.
   */
  value?: string
  /**
   * Controlled checked state.
   */
  checked?: boolean
  /**
   * Default checked state for uncontrolled usage.
   */
  defaultChecked?: boolean
  /**
   * Callback fired when checkbox state changes.
   */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Whether the checkbox is disabled.
   */
  disabled?: boolean
  /**
   * Image source URL to display.
   * Use this OR children, not both.
   */
  src?: string
  /**
   * Alt text for the image (required for accessibility when using src).
   */
  alt?: string
  /**
   * Custom content to display instead of an image.
   * Use this OR src, not both.
   */
  children?: React.ReactNode
  /**
   * Class name for the wrapper label element.
   * Use data-checked attribute for checked state styling.
   */
  className?: string
  /**
   * Class name for the hidden checkbox input.
   */
  inputClassName?: string
  /**
   * Class name for the image element (when using src).
   */
  imageClassName?: string
  /**
   * Inline styles for the wrapper label element.
   */
  style?: React.CSSProperties
  /**
   * Accessible label for screen readers.
   * Required if no visible label text is provided.
   */
  'aria-label'?: string
}