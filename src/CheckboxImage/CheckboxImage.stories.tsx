import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxImage } from './CheckboxImage'
import './CheckboxImage.stories.scss'

const meta: Meta<typeof CheckboxImage> = {
  title: 'Components/CheckboxImage',
  component: CheckboxImage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique ID for the checkbox input',
      table: { category: 'Required' },
    },
    src: {
      control: 'text',
      description: 'Image source URL',
      table: { category: 'Content' },
    },
    alt: {
      control: 'text',
      description: 'Alt text for image',
      table: { category: 'Content' },
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
      table: { category: 'State' },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked for uncontrolled',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
      table: { category: 'State' },
    },
    name: {
      control: 'text',
      description: 'Name for form submission',
      table: { category: 'Form' },
    },
    value: {
      control: 'text',
      description: 'Value for form submission',
      table: { category: 'Form' },
    },
    className: {
      control: 'text',
      description: 'Class for wrapper label',
      table: { category: 'Styling' },
    },
    inputClassName: {
      control: 'text',
      description: 'Class for hidden input',
      table: { category: 'Styling' },
    },
    imageClassName: {
      control: 'text',
      description: 'Class for image element',
      table: { category: 'Styling' },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label',
      table: { category: 'Accessibility' },
    },
  },
}

export default meta
type Story = StoryObj<typeof CheckboxImage>

// Sample images (placeholder URLs)
const sampleImages = [
  'https://picsum.photos/seed/a/150/150',
  'https://picsum.photos/seed/b/150/150',
  'https://picsum.photos/seed/c/150/150',
  'https://picsum.photos/seed/d/150/150',
]

/**
 * Basic example with image selection.
 * The component is unstyled by default - all styles come from the demo CSS.
 */
export const Basic: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])

    const toggle = (id: string, checked: boolean) => {
      setSelected((prev) =>
        checked ? [...prev, id] : prev.filter((i) => i !== id)
      )
    }

    return (
      <div className="story-container">
        <div className="demo-grid">
          {sampleImages.map((src, i) => (
            <CheckboxImage
              key={i}
              id={`image-${i}`}
              src={src}
              alt={`Option ${i + 1}`}
              checked={selected.includes(`image-${i}`)}
              onChange={(checked) => toggle(`image-${i}`, checked)}
              className="demo-checkbox-image"
              inputClassName="demo-checkbox-input"
              imageClassName="demo-checkbox-img"
            />
          ))}
        </div>
        <p className="demo-selected">Selected: {selected.length} items</p>
      </div>
    )
  },
}

/**
 * Single selection (radio-like behavior).
 * Handle mutual exclusivity in your onChange handler.
 */
export const SingleSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null)

    return (
      <div className="story-container">
        <div className="demo-grid">
          {sampleImages.map((src, i) => (
            <CheckboxImage
              key={i}
              id={`single-${i}`}
              src={src}
              alt={`Option ${i + 1}`}
              checked={selected === `single-${i}`}
              onChange={(checked) => setSelected(checked ? `single-${i}` : null)}
              className="demo-checkbox-image"
              inputClassName="demo-checkbox-input"
              imageClassName="demo-checkbox-img"
            />
          ))}
        </div>
        <p className="demo-selected">Selected: {selected || 'none'}</p>
      </div>
    )
  },
}

/**
 * Custom children instead of image src.
 * Great for color swatches, icons, or any custom content.
 */
export const CustomChildren: Story = {
  render: () => {
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6']
    const [selected, setSelected] = useState<string[]>([])

    const toggle = (color: string, checked: boolean) => {
      setSelected((prev) =>
        checked ? [...prev, color] : prev.filter((c) => c !== color)
      )
    }

    return (
      <div className="story-container">
        <div className="demo-grid-colors">
          {colors.map((color) => (
            <CheckboxImage
              key={color}
              id={`color-${color}`}
              checked={selected.includes(color)}
              onChange={(checked) => toggle(color, checked)}
              className="demo-checkbox-color"
              inputClassName="demo-checkbox-input"
              aria-label={`Select color ${color}`}
            >
              <span
                className="demo-color-swatch"
                style={{ background: color }}
              />
            </CheckboxImage>
          ))}
        </div>
        <p className="demo-selected">Selected colors: {selected.join(', ') || 'none'}</p>
      </div>
    )
  },
}

/**
 * Disabled state example.
 * Use data-disabled attribute for styling.
 */
export const Disabled: Story = {
  render: () => (
    <div className="story-container">
      <div className="demo-grid">
        <CheckboxImage
          id="disabled-unchecked"
          src={sampleImages[0]}
          alt="Disabled unchecked"
          disabled
          className="demo-checkbox-image"
          inputClassName="demo-checkbox-input"
          imageClassName="demo-checkbox-img"
        />
        <CheckboxImage
          id="disabled-checked"
          src={sampleImages[1]}
          alt="Disabled checked"
          disabled
          defaultChecked
          className="demo-checkbox-image"
          inputClassName="demo-checkbox-input"
          imageClassName="demo-checkbox-img"
        />
        <CheckboxImage
          id="enabled"
          src={sampleImages[2]}
          alt="Enabled"
          className="demo-checkbox-image"
          inputClassName="demo-checkbox-input"
          imageClassName="demo-checkbox-img"
        />
      </div>
    </div>
  ),
}

/**
 * Uncontrolled usage with defaultChecked.
 * State is managed internally by the input.
 */
export const Uncontrolled: Story = {
  render: () => (
    <div className="story-container">
      <div className="demo-grid">
        <CheckboxImage
          id="uncontrolled-1"
          src={sampleImages[0]}
          alt="Option 1"
          defaultChecked
          className="demo-checkbox-image"
          inputClassName="demo-checkbox-input"
          imageClassName="demo-checkbox-img"
        />
        <CheckboxImage
          id="uncontrolled-2"
          src={sampleImages[1]}
          alt="Option 2"
          className="demo-checkbox-image"
          inputClassName="demo-checkbox-input"
          imageClassName="demo-checkbox-img"
        />
      </div>
      <p className="demo-note">
        Note: Uncontrolled mode - check the native input state.
        data-checked attribute only works in controlled mode.
      </p>
    </div>
  ),
}

/**
 * Playground with interactive controls.
 * Adjust border, colors, and sizes via Storybook controls.
 */
export const Playground: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    const [borderColor, setBorderColor] = useState('#3498db')
    const [borderWidth, setBorderWidth] = useState(3)
    const [borderRadius, setBorderRadius] = useState(8)
    const [imageSize, setImageSize] = useState(150)

    return (
      <div className="story-container">
        <div className="playground-controls">
          <label>
            <span>Border Color</span>
            <input
              type="color"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
            />
          </label>
          <label>
            <span>Border Width: {borderWidth}px</span>
            <input
              type="range"
              min="1"
              max="10"
              value={borderWidth}
              onChange={(e) => setBorderWidth(Number(e.target.value))}
            />
          </label>
          <label>
            <span>Border Radius: {borderRadius}px</span>
            <input
              type="range"
              min="0"
              max="50"
              value={borderRadius}
              onChange={(e) => setBorderRadius(Number(e.target.value))}
            />
          </label>
          <label>
            <span>Image Size: {imageSize}px</span>
            <input
              type="range"
              min="50"
              max="300"
              value={imageSize}
              onChange={(e) => setImageSize(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="demo-playground-preview">
          <CheckboxImage
            id="playground"
            src={sampleImages[0]}
            alt="Playground option"
            checked={checked}
            onChange={setChecked}
            className="demo-checkbox-image-playground"
            inputClassName="demo-checkbox-input"
            imageClassName="demo-checkbox-img"
            style={{
              '--checkbox-border-color': borderColor,
              '--checkbox-border-width': `${borderWidth}px`,
              '--checkbox-border-radius': `${borderRadius}px`,
              '--checkbox-image-size': `${imageSize}px`,
            } as React.CSSProperties}
          />
        </div>

        <p className="demo-selected">Checked: {checked ? 'Yes' : 'No'}</p>
      </div>
    )
  },
}

/**
 * Accessibility example with proper labeling.
 */
export const Accessibility: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])

    const toggle = (id: string, checked: boolean) => {
      setSelected((prev) =>
        checked ? [...prev, id] : prev.filter((i) => i !== id)
      )
    }

    return (
      <div className="story-container">
        <div className="demo-grid">
          <CheckboxImage
            id="a11y-1"
            src={sampleImages[0]}
            alt="Mountain landscape"
            checked={selected.includes('a11y-1')}
            onChange={(checked) => toggle('a11y-1', checked)}
            className="demo-checkbox-image"
            inputClassName="demo-checkbox-input"
            imageClassName="demo-checkbox-img"
            aria-label="Select mountain landscape photo"
          />
          <CheckboxImage
            id="a11y-2"
            src={sampleImages[1]}
            alt="Ocean view"
            checked={selected.includes('a11y-2')}
            onChange={(checked) => toggle('a11y-2', checked)}
            className="demo-checkbox-image"
            inputClassName="demo-checkbox-input"
            imageClassName="demo-checkbox-img"
            aria-label="Select ocean view photo"
          />
        </div>

        <div className="a11y-info">
          <h4>Accessibility Features</h4>
          <ul>
            <li>
              <span data-status="pass">PASS</span>
              Native checkbox - keyboard accessible (Space to toggle)
            </li>
            <li>
              <span data-status="pass">PASS</span>
              Label association via htmlFor/id
            </li>
            <li>
              <span data-status="pass">PASS</span>
              Alt text for images
            </li>
            <li>
              <span data-status="user">USER</span>
              aria-label for additional context (optional)
            </li>
            <li>
              <span data-status="user">USER</span>
              Focus styles (user provides via CSS)
            </li>
          </ul>
        </div>
      </div>
    )
  },
}