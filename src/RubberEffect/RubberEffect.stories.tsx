import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RubberEffect } from './RubberEffect'
import './RubberEffect.stories.scss'

const meta: Meta<typeof RubberEffect> = {
  title: 'Components/RubberEffect',
  component: RubberEffect,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Open state triggers the animation',
      table: { category: 'State' },
    },
    duration: {
      control: { type: 'range', min: 0.2, max: 2, step: 0.1 },
      description: 'Animation duration in seconds',
      table: { category: 'Animation' },
    },
    stretchAmount: {
      control: { type: 'range', min: 1, max: 10, step: 0.5 },
      description: 'Peak stretch amount (higher = more dramatic)',
      table: { category: 'Animation' },
    },
    bounceAmount: {
      control: { type: 'range', min: 0.5, max: 1.5, step: 0.05 },
      description: 'Bounce back amount before settling',
      table: { category: 'Animation' },
    },
    easing: {
      control: 'text',
      description: 'CSS easing function',
      table: { category: 'Animation' },
    },
    color: {
      control: 'color',
      description: 'Background color',
      table: { category: 'Styling' },
    },
    className: {
      control: 'text',
      description: 'Class for styling',
      table: { category: 'Styling' },
    },
  },
}

export default meta
type Story = StoryObj<typeof RubberEffect>

/**
 * Basic rubber effect - just the animated background.
 * Click toggle to see the stretchy animation.
 */
export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div className='story-container'>
        <button onClick={() => setOpen(!open)} className='demo-toggle-btn'>
          {open ? 'Close' : 'Open'}
        </button>

        <div className='demo-effect-container'>
          <RubberEffect open={open} className='demo-rubber-effect' />
        </div>
      </div>
    )
  },
}

/**
 * Use the effect as a background layer with content on top.
 * Notice how the content doesn't stretch - only the background.
 */
export const WithContentOverlay: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div className='story-container'>
        <button onClick={() => setOpen(!open)} className='demo-toggle-btn'>
          {open ? 'Close' : 'Open'}
        </button>

        <div className='demo-effect-container'>
          <RubberEffect open={open} className='demo-rubber-effect'>
            <div className='demo-overlay-content' data-open={open}>
              <h2>Content Layer</h2>
              <p>This content slides but doesn't stretch!</p>
            </div>
          </RubberEffect>
        </div>
      </div>
    )
  },
}

/**
 * Playground with controls.
 */
export const Playground: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    const [duration, setDuration] = useState(0.9)
    const [color, setColor] = useState('#3498db')
    const [stretchAmount, setStretchAmount] = useState(5)
    const [bounceAmount, setBounceAmount] = useState(0.9)
    const [easing, setEasing] = useState('ease-in-out')

    return (
      <div className='story-container'>
        <div className='playground-controls'>
          <label>
            <span>Duration: {duration}s</span>
            <input type='range' min='0.2' max='2' step='0.1' value={duration} onChange={e => setDuration(Number(e.target.value))} />
          </label>
          <label>
            <span>Stretch: {stretchAmount}</span>
            <input type='range' min='1' max='10' step='0.5' value={stretchAmount} onChange={e => setStretchAmount(Number(e.target.value))} />
          </label>
          <label>
            <span>Bounce: {bounceAmount}</span>
            <input type='range' min='0.5' max='1.5' step='0.05' value={bounceAmount} onChange={e => setBounceAmount(Number(e.target.value))} />
          </label>
          <label>
            <span>Easing</span>
            <select value={easing} onChange={e => setEasing(e.target.value)}>
              <option value='ease-in-out'>ease-in-out</option>
              <option value='ease-in'>ease-in</option>
              <option value='ease-out'>ease-out</option>
              <option value='linear'>linear</option>
              <option value='cubic-bezier(0.68, -0.55, 0.27, 1.55)'>bouncy</option>
            </select>
          </label>
          <label>
            <span>Color</span>
            <input type='color' value={color} onChange={e => setColor(e.target.value)} />
          </label>
        </div>

        <button onClick={() => setOpen(!open)} className='demo-toggle-btn'>
          {open ? 'Close' : 'Open'}
        </button>

        <div className='demo-effect-container'>
          <RubberEffect
            open={open}
            duration={duration}
            color={color}
            stretchAmount={stretchAmount}
            bounceAmount={bounceAmount}
            easing={easing}
          />
        </div>
      </div>
    )
  },
}
