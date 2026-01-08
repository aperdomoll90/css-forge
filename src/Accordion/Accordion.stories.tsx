import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Accordion } from './Accordion'
import { AccordionProps } from './Accordion.types'
import './Accordion.stories.scss'

export default {
  title: 'Accordions/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0d0d0d' },
      ],
    },
  },
} as Meta<AccordionProps>


export const MultipleExclusive: StoryFn = () => (
  <div style={{ width: '80vw', maxWidth: '700px' }} className="accordion">
    {['Code base optimization', 'SEO optimization', 'Accessibility optimization'].map((title, i) => (
      <Accordion
        key={i}
        name="faq"
        title={
          <>
            <span className="accordion-icon">+</span>
            <span>{title}</span>
          </>
        }
        content={<p>Content for {title.toLowerCase()}.</p>}
        className="accordion-item"
        summaryClassName="accordion-summary"
        contentClassName="accordion-content"
      />
    ))}
  </div>
)
MultipleExclusive.parameters = {
  docs: {
    description: {
      story: 'Multiple accordions with same `name` - only one can be open at a time.',
    },
  },
}

export const MultipleAllowed: StoryFn = () => (
  <div style={{ width: '80vw', maxWidth: '700px' }} className="accordion">
    {['Code base optimization', 'SEO optimization', 'Accessibility optimization'].map((title, i) => (
      <Accordion
        key={i}
        defaultOpen={i === 0}
        title={
          <>
            <span className="accordion-icon">+</span>
            <span>{title}</span>
          </>
        }
        content={<p>Content for {title.toLowerCase()}.</p>}
        className="accordion-item"
        summaryClassName="accordion-summary"
        contentClassName="accordion-content"
      />
    ))}
  </div>
)
MultipleAllowed.parameters = {
  docs: {
    description: {
      story: 'Without `name`, multiple accordions can be open simultaneously.',
    },
  },
}

const WithCallbackComponent = () => {
  const [log, setLog] = useState<string[]>([])

  const handleToggle = (id: string) => (isOpen: boolean) => {
    const message = `${id}: ${isOpen ? 'opened' : 'closed'}`
    setLog(prev => [message, ...prev].slice(0, 5))
  }

  return (
    <div style={{ width: '80vw', maxWidth: '700px' }}>
      <div className="accordion">
        {['codebase', 'seo', 'accessibility'].map((id, i) => (
          <Accordion
            key={id}
            name="callback-demo"
            onToggle={handleToggle(id)}
            title={
              <>
                <span className="accordion-icon">+</span>
                <span>{id.charAt(0).toUpperCase() + id.slice(1)} optimization</span>
              </>
            }
            content={<p>Content for {id}.</p>}
            className="accordion-item"
            summaryClassName="accordion-summary"
            contentClassName="accordion-content"
          />
        ))}
      </div>
      <div className="accordion-log">
        <strong>Toggle log:</strong>
        {log.length === 0 ? (
          <span> Click an item to see events</span>
        ) : (
          log.map((entry, i) => <div key={i}>{entry}</div>)
        )}
      </div>
    </div>
  )
}

export const WithCallback: StoryFn = () => <WithCallbackComponent />
WithCallback.parameters = {
  docs: {
    description: {
      story: 'Uses onToggle callback to track open/close events.',
    },
  },
}

const ControlledComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div style={{ width: '80vw', maxWidth: '700px' }}>
      <div className="accordion-log" style={{ marginBottom: '1rem', marginTop: 0 }}>
        <strong>External controls:</strong>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <button onClick={() => setOpenIndex(0)}>Open 1</button>
          <button onClick={() => setOpenIndex(1)}>Open 2</button>
          <button onClick={() => setOpenIndex(2)}>Open 3</button>
          <button onClick={() => setOpenIndex(null)}>Close all</button>
        </div>
      </div>
      <div className="accordion">
        {['Code base', 'SEO', 'Accessibility'].map((title, i) => (
          <Accordion
            key={i}
            open={openIndex === i}
            onToggle={isOpen => setOpenIndex(isOpen ? i : null)}
            title={
              <>
                <span className="accordion-icon">+</span>
                <span>{title} optimization</span>
              </>
            }
            content={<p>Content for {title.toLowerCase()}.</p>}
            className="accordion-item"
            summaryClassName="accordion-summary"
            contentClassName="accordion-content"
          />
        ))}
      </div>
    </div>
  )
}

export const Controlled: StoryFn = () => <ControlledComponent />
Controlled.parameters = {
  docs: {
    description: {
      story: 'Fully controlled with external state. Use `open` and `onToggle` to manage state.',
    },
  },
}

export const Disabled: StoryFn = () => (
  <div style={{ width: '80vw', maxWidth: '700px' }} className="accordion">
    <Accordion
      title={
        <>
          <span className="accordion-icon">+</span>
          <span>Enabled accordion</span>
        </>
      }
      content={<p>This one works normally.</p>}
      className="accordion-item"
      summaryClassName="accordion-summary"
      contentClassName="accordion-content"
    />
    <Accordion
      disabled
      title={
        <>
          <span className="accordion-icon">+</span>
          <span>Disabled accordion</span>
        </>
      }
      content={<p>This content cannot be revealed.</p>}
      className="accordion-item accordion-item--disabled"
      summaryClassName="accordion-summary"
      contentClassName="accordion-content"
    />
  </div>
)
Disabled.parameters = {
  docs: {
    description: {
      story: 'Disabled accordion cannot be opened or closed.',
    },
  },
}

export const CustomStyle: StoryFn = () => (
  <div style={{ width: '80vw', maxWidth: '700px' }} className="accordion--card">
    {[
      { title: 'Getting Started', icon: '🚀' },
      { title: 'Customization', icon: '🎨' },
      { title: 'Accessibility', icon: '♿' },
    ].map((item, i) => (
      <Accordion
        key={i}
        name="custom"
        title={
          <>
            <span className="accordion-icon--card">{item.icon}</span>
            <span>{item.title}</span>
          </>
        }
        content={`Content for ${item.title.toLowerCase()}.`}
        className="accordion-item--card"
        summaryClassName="accordion-summary--card"
        contentClassName="accordion-content--card"
      />
    ))}
  </div>
)
CustomStyle.parameters = {
  docs: {
    description: {
      story: 'Custom card-style variant showing different visual styling.',
    },
  },
}