import { useCallback } from 'react'
import { CheckboxImageProps } from './CheckboxImage.types'

/**
 * CheckboxImage
 *
 * An image-based checkbox component. Users control all styling.
 * The wrapper uses data-checked and data-disabled attributes for state-based CSS.
 *
 * @example Basic with image src
 * ```tsx
 * <CheckboxImage
 *   id="option-1"
 *   src="/path/to/image.jpg"
 *   alt="Option 1"
 *   className="my-checkbox-image"
 *   onChange={(checked) => console.log(checked)}
 * />
 * ```
 *
 * @example With custom children
 * ```tsx
 * <CheckboxImage
 *   id="option-2"
 *   className="my-checkbox-image"
 *   aria-label="Select color red"
 * >
 *   <div className="color-swatch" style={{ background: 'red' }} />
 * </CheckboxImage>
 * ```
 *
 * @example Controlled
 * ```tsx
 * const [selected, setSelected] = useState(false)
 *
 * <CheckboxImage
 *   id="controlled"
 *   checked={selected}
 *   onChange={setSelected}
 *   src="/image.jpg"
 *   alt="Controlled option"
 *   className="my-checkbox-image"
 * />
 * ```
 *
 * @example Styling with data attributes
 * ```css
 * .my-checkbox-image {
 *   cursor: pointer;
 *   border: 2px solid transparent;
 *   transition: border-color 0.2s;
 * }
 *
 * .my-checkbox-image[data-checked="true"] {
 *   border-color: blue;
 * }
 *
 * .my-checkbox-image[data-disabled="true"] {
 *   opacity: 0.5;
 *   cursor: not-allowed;
 * }
 * ```
 */
export const CheckboxImage: React.FC<CheckboxImageProps> = ({
  id,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  src,
  alt,
  children,
  className = '',
  inputClassName = '',
  imageClassName = '',
  style,
  'aria-label': ariaLabel,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked, e)
    },
    [onChange]
  )

  // Determine checked state for data attribute
  // For controlled: use checked prop
  // For uncontrolled: we can't know, so we don't set data-checked initially
  const isControlled = checked !== undefined
  const dataChecked = isControlled ? checked : undefined

  return (
    <label
      htmlFor={id}
      className={className}
      style={style}
      data-checked={dataChecked}
      data-disabled={disabled || undefined}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        disabled={disabled}
        className={inputClassName}
        aria-label={ariaLabel}
      />
      {src ? (
        <img src={src} alt={alt || ''} className={imageClassName} />
      ) : (
        children
      )}
    </label>
  )
}