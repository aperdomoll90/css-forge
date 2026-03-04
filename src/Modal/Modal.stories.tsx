import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Modal } from './Modal'
import './Modal.stories.scss'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: 'var(--white-100)' },
        { name: 'dark', value: 'var(--charcoal-950)' },
      ],
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique ID for the popover. Use this in trigger button popovertarget.',
      table: { category: 'Required' },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show the built-in close button',
      table: { category: 'Options' },
    },
    closeButtonContent: {
      control: 'text',
      description: 'Custom content for close button',
      table: { category: 'Options' },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the modal (use when no visible title)',
      table: { category: 'Accessibility' },
    },
    'aria-labelledby': {
      control: 'text',
      description: 'ID of element that labels the modal (use with visible title)',
      table: { category: 'Accessibility' },
    },
    'aria-describedby': {
      control: 'text',
      description: 'ID of element that describes the modal content',
      table: { category: 'Accessibility' },
    },
    className: {
      control: 'text',
      description: 'Class name for the modal container',
      table: { category: 'Styling' },
    },
    closeButtonClassName: {
      control: 'text',
      description: 'Class name for the close button',
      table: { category: 'Styling' },
    },
    onShow: {
      action: 'onShow',
      description: 'Callback when modal opens',
      table: { category: 'Events' },
    },
    onHide: {
      action: 'onHide',
      description: 'Callback when modal closes',
      table: { category: 'Events' },
    },
    onToggle: {
      action: 'onToggle',
      description: 'Callback on toggle (receives open state)',
      table: { category: 'Events' },
    },
  },
} as Meta<typeof Modal>

// Playground with all controls
export const Playground: StoryFn<typeof Modal> = (args) => {
  const [bgColor, setBgColor] = useState('#111111')
  const [textColor, setTextColor] = useState('#eeeeee')
  const [borderColor, setBorderColor] = useState('#444444')
  const [overlayColor, setOverlayColor] = useState('#000000')
  const [overlayOpacity, setOverlayOpacity] = useState(50)
  const [fontSize, setFontSize] = useState(16)
  const [borderRadius, setBorderRadius] = useState(12)
  const [borderWidth, setBorderWidth] = useState(1)
  const [padding, setPadding] = useState(32)
  const [shadowBlur, setShadowBlur] = useState(24)

  return (
    <div className="story-container" style={{ flexDirection: 'column', gap: '2rem' }}>
      <div className="playground-controls">
        <label>
          <span>Background</span>
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
        </label>
        <label>
          <span>Text Color</span>
          <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
        </label>
        <label>
          <span>Border Color</span>
          <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} />
        </label>
        <label>
          <span>Overlay Color</span>
          <input type="color" value={overlayColor} onChange={(e) => setOverlayColor(e.target.value)} />
        </label>
        <label>
          <span>Overlay Opacity: {overlayOpacity}%</span>
          <input
            type="range"
            min="0"
            max="90"
            value={overlayOpacity}
            onChange={(e) => setOverlayOpacity(Number(e.target.value))}
          />
        </label>
        <label>
          <span>Font Size: {fontSize}px</span>
          <input
            type="range"
            min="12"
            max="24"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          />
        </label>
        <label>
          <span>Border Radius: {borderRadius}px</span>
          <input
            type="range"
            min="0"
            max="32"
            value={borderRadius}
            onChange={(e) => setBorderRadius(Number(e.target.value))}
          />
        </label>
        <label>
          <span>Border Width: {borderWidth}px</span>
          <input
            type="range"
            min="0"
            max="4"
            value={borderWidth}
            onChange={(e) => setBorderWidth(Number(e.target.value))}
          />
        </label>
        <label>
          <span>Padding: {padding}px</span>
          <input
            type="range"
            min="8"
            max="64"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
          />
        </label>
        <label>
          <span>Shadow Blur: {shadowBlur}px</span>
          <input
            type="range"
            min="0"
            max="48"
            value={shadowBlur}
            onChange={(e) => setShadowBlur(Number(e.target.value))}
          />
        </label>
      </div>

      <button
        popoverTarget={args.id}
        className="demo-trigger"
      >
        Open Modal
      </button>

      <Modal
        {...args}
        className="demo-modal-playground"
        closeButtonClassName="demo-close"
        style={{
          '--modal-bg': bgColor,
          '--modal-text': textColor,
          '--modal-border-color': borderColor,
          '--modal-border-width': `${borderWidth}px`,
          '--modal-overlay': `${overlayColor}${Math.round(overlayOpacity * 2.55).toString(16).padStart(2, '0')}`,
          '--modal-font-size': `${fontSize}px`,
          '--modal-radius': `${borderRadius}px`,
          '--modal-padding': `${padding}px`,
          '--modal-shadow': `0 8px ${shadowBlur}px rgba(0, 0, 0, 0.4)`,
        } as React.CSSProperties}
      >
        <h2 id="playground-title">Customizable Modal</h2>
        <p id="playground-desc">
          Adjust the controls above to customize appearance. All styles are user-controlled.
        </p>
      </Modal>
    </div>
  )
}
Playground.args = {
  id: 'playground-modal',
  showCloseButton: true,
  closeButtonContent: '×',
  'aria-labelledby': 'playground-title',
  'aria-describedby': 'playground-desc',
}
Playground.parameters = {
  docs: {
    description: {
      story: `**Interactive playground** - Customize all modal properties.

Use the controls to adjust:
- Background color, text color, border color
- Overlay (backdrop) color and opacity
- Font size, border radius, border width
- Padding, shadow blur

All styling is applied via CSS custom properties, demonstrating how users control the appearance.`,
    },
  },
}

export const Basic: StoryFn = () => (
  <div className="story-container">
    <button
      popoverTarget="basic-modal"
      className="demo-trigger"
    >
      Open Modal
    </button>

    <Modal
      id="basic-modal"
      aria-labelledby="basic-title"
      className="demo-modal"
      closeButtonClassName="demo-close"
    >
      <h2 id="basic-title">Modal Title</h2>
      <p>This is a native modal using the HTML popover attribute!</p>
    </Modal>
  </div>
)
Basic.parameters = {
  docs: {
    description: {
      story: `**Basic usage** - Trigger from any button using \`popovertarget\`.

User controls all styling. The Modal only provides:
- Native popover behavior (\`popover="auto"\`)
- Accessibility attributes (\`role="dialog"\`, \`aria-modal\`)
- Optional close button with \`popovertargetaction="hide"\`

Animation support: Chrome, Edge, Safari 17.4+. Firefox works without animation.`,
    },
  },
}

export const Accessibility: StoryFn = () => (
  <div className="story-container" style={{ flexDirection: 'column', gap: '1rem' }}>
    <h3 style={{ color: '#eee', margin: 0 }}>ADA Compliance Checklist</h3>

    <button
      popoverTarget="a11y-modal"
      className="demo-trigger"
    >
      Open Accessible Modal
    </button>

    <Modal
      id="a11y-modal"
      aria-labelledby="a11y-title"
      aria-describedby="a11y-desc"
      className="demo-modal"
      closeButtonClassName="demo-close"
    >
      <h2 id="a11y-title">Accessibility Features</h2>
      <div id="a11y-desc">
        <ul style={{ margin: '1rem 0', paddingLeft: '1.5rem', opacity: 0.9 }}>
          <li>
            <strong>role=&quot;dialog&quot;</strong> - Screen readers announce as dialog
          </li>
          <li>
            <strong>aria-modal=&quot;true&quot;</strong> - Prevents focus from leaving modal
          </li>
          <li>
            <strong>aria-labelledby</strong> - Links visible title to modal
          </li>
          <li>
            <strong>aria-describedby</strong> - Links description to modal
          </li>
          <li>
            <strong>Escape key</strong> - Native popover closes on Escape
          </li>
          <li>
            <strong>Focus trap</strong> - Native popover behavior
          </li>
          <li>
            <strong>Close button</strong> - Has aria-label=&quot;Close modal&quot;
          </li>
        </ul>
      </div>
    </Modal>

    <div className="a11y-info">
      <h4>WCAG 2.1 Compliance</h4>
      <ul>
        <li>
          <span data-status="pass">1.3.1</span> Info and Relationships - role, aria-* attributes
        </li>
        <li>
          <span data-status="pass">2.1.1</span> Keyboard - Escape closes, Tab navigates
        </li>
        <li>
          <span data-status="pass">2.1.2</span> No Keyboard Trap - Can escape with Escape key
        </li>
        <li>
          <span data-status="pass">2.4.3</span> Focus Order - Native popover handles focus
        </li>
        <li>
          <span data-status="pass">4.1.2</span> Name, Role, Value - Proper ARIA attributes
        </li>
        <li>
          <span data-status="user">1.4.3</span> Contrast - User controls colors (provide 4.5:1+)
        </li>
        <li>
          <span data-status="user">1.4.4</span> Resize Text - User controls font size
        </li>
      </ul>
    </div>
  </div>
)
Accessibility.parameters = {
  docs: {
    description: {
      story: `**ADA/WCAG 2.1 Compliance** - Built-in accessibility features.

The Modal component provides:
- \`role="dialog"\` and \`aria-modal="true"\` for screen readers
- \`aria-labelledby\` and \`aria-describedby\` props for proper labeling
- \`aria-label="Close modal"\` on the close button
- Native popover keyboard handling (Escape to close, Tab navigation)
- Light dismiss (click outside to close)

**User responsibilities:**
- Provide sufficient color contrast (4.5:1 minimum for text)
- Use readable font sizes (16px minimum recommended)
- Include a visible title or aria-label
- Test with screen readers`,
    },
  },
}

export const Minimal: StoryFn = () => (
  <div className="story-container">
    <button
      popoverTarget="minimal-modal"
      className="demo-trigger"
    >
      Open Minimal
    </button>

    <Modal
      id="minimal-modal"
      aria-label="Minimal example"
      className="demo-modal-minimal"
      closeButtonClassName="demo-close-minimal"
    >
      <h2>Simple Modal</h2>
      <p>Minimal styling example with light theme.</p>
    </Modal>
  </div>
)
Minimal.parameters = {
  docs: {
    description: {
      story: `**Minimal styling** - Shows the modal works with any design.

The component is completely unopinionated - you provide all CSS.`,
    },
  },
}

export const CustomContent: StoryFn = () => (
  <div className="story-container">
    <button
      popoverTarget="custom-modal"
      className="demo-trigger"
    >
      Open Custom
    </button>

    <Modal
      id="custom-modal"
      aria-labelledby="custom-title"
      className="demo-modal-custom"
      closeButtonClassName="demo-close-custom"
    >
      <div className="demo-modal-custom-header">
        <h2 id="custom-title">Confirm Action</h2>
      </div>
      <div className="demo-modal-custom-body">
        <p>Are you sure you want to proceed? This action cannot be undone.</p>
      </div>
      <div className="demo-modal-custom-footer">
        <button
          popoverTarget="custom-modal"
          popoverTargetAction="hide"
          className="demo-btn-secondary"
        >
          Cancel
        </button>
        <button className="demo-btn-primary">Confirm</button>
      </div>
    </Modal>
  </div>
)
CustomContent.parameters = {
  docs: {
    description: {
      story: `**Custom content layout** - Header, body, footer structure.

You can add any content inside the modal. Use additional buttons with
\`popovertarget\` and \`popovertargetaction="hide"\` for custom close actions.`,
    },
  },
}

export const NoCloseButton: StoryFn = () => (
  <div className="story-container">
    <button
      popoverTarget="no-close-modal"
      className="demo-trigger"
    >
      Open Modal
    </button>

    <Modal
      id="no-close-modal"
      aria-label="Modal without close button"
      showCloseButton={false}
      className="demo-modal"
    >
      <h2>No Built-in Close</h2>
      <p>Click outside or press Escape to close.</p>
      <p style={{ marginTop: '1rem' }}>
        <button
          popoverTarget="no-close-modal"
          popoverTargetAction="hide"
          className="demo-trigger"
        >
          Close Me
        </button>
      </p>
    </Modal>
  </div>
)
NoCloseButton.parameters = {
  docs: {
    description: {
      story: `**No close button** - Use \`showCloseButton={false}\`.

User can provide their own close button inside the modal content.
Modal still closes on Escape key or clicking outside (light dismiss).`,
    },
  },
}

export const WithCallbacks: StoryFn = () => {
  const [log, setLog] = useState<string[]>([])

  const addLog = (msg: string) => {
    setLog((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${msg}`])
  }

  return (
    <div className="story-container" style={{ flexDirection: 'column' }}>
      <button
        popoverTarget="callback-modal"
        className="demo-trigger"
      >
        Open Modal
      </button>

      <Modal
        id="callback-modal"
        aria-label="Modal with callbacks"
        className="demo-modal"
        closeButtonClassName="demo-close"
        onShow={() => addLog('Modal opened')}
        onHide={() => addLog('Modal closed')}
        onToggle={(open) => addLog(`Toggle: ${open ? 'open' : 'closed'}`)}
      >
        <h2>Callbacks Demo</h2>
        <p>Open and close to see event logs below.</p>
      </Modal>

      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          minHeight: '120px',
        }}
      >
        <div style={{ opacity: 0.5, marginBottom: '0.5rem' }}>Event Log:</div>
        {log.map((entry, i) => (
          <div key={i}>{entry}</div>
        ))}
      </div>
    </div>
  )
}
WithCallbacks.parameters = {
  docs: {
    description: {
      story: `**Event callbacks** - \`onShow\`, \`onHide\`, \`onToggle\`.

Listen for modal state changes to sync with your app state.
- \`onShow()\` - Fires when modal opens
- \`onHide()\` - Fires when modal closes
- \`onToggle(open)\` - Fires on both, receives boolean state`,
    },
  },
}

export const MultipleTriggers: StoryFn = () => (
  <div className="story-container">
    <button
      popoverTarget="multi-modal"
      className="demo-trigger"
    >
      Trigger 1
    </button>
    <button
      popoverTarget="multi-modal"
      className="demo-trigger"
      style={{ background: '#667eea' }}
    >
      Trigger 2
    </button>
    <button
      popoverTarget="multi-modal"
      className="demo-trigger"
      style={{ background: '#e74c3c' }}
    >
      Trigger 3
    </button>

    <Modal
      id="multi-modal"
      aria-label="Modal with multiple triggers"
      className="demo-modal"
      closeButtonClassName="demo-close"
    >
      <h2>Multiple Triggers</h2>
      <p>Any button can open this modal using the same ID.</p>
    </Modal>
  </div>
)
MultipleTriggers.parameters = {
  docs: {
    description: {
      story: `**Multiple triggers** - Any number of buttons can trigger the same modal.

Just use the same \`popovertarget\` ID on each button.`,
    },
  },
}