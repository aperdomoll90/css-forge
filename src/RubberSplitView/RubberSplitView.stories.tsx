import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RubberSplitView } from './RubberSplitView'
import './RubberSplitView.stories.scss'

const meta: Meta<typeof RubberSplitView> = {
  title: 'Components/RubberSplitView',
  component: RubberSplitView,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique ID',
      table: { category: 'Required' },
    },
    open: {
      control: 'boolean',
      description: 'Controlled open state',
      table: { category: 'State' },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Default open for uncontrolled',
      table: { category: 'State' },
    },
    duration: {
      control: { type: 'range', min: 0.3, max: 1.5, step: 0.1 },
      description: 'Animation duration',
      table: { category: 'Animation' },
    },
    showToggle: {
      control: 'boolean',
      description: 'Show built-in toggle',
      table: { category: 'Toggle' },
    },
    toggleSize: {
      control: { type: 'range', min: 40, max: 100, step: 5 },
      description: 'Toggle size in pixels',
      table: { category: 'Toggle' },
    },
    bannerColor: {
      control: 'color',
      description: 'Banner background color',
      table: { category: 'Colors' },
    },
    contentColor: {
      control: 'color',
      description: 'Content panel background color',
      table: { category: 'Colors' },
    },
    toggleColor: {
      control: 'color',
      description: 'Toggle color (auto-contrasts if not set)',
      table: { category: 'Colors' },
    },
  },
}

export default meta
type Story = StoryObj<typeof RubberSplitView>

/**
 * Basic split view with rubber animation (admin portal style).
 * Toggle auto-contrasts with panel backgrounds.
 */
export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div className="story-container">
        <RubberSplitView
          id="basic-split"
          open={open}
          onToggle={setOpen}
          className="demo-split-container"
          contentClassName="demo-split-content"
          toggleLabels={{ left: 'New', right: 'All' }}
          bannerColor="var(--blue-400)"
          contentColor="var(--charcoal-500)"
          bannerContent={
            <div className="demo-banner-content">
              <h1>Admin Portal</h1>
              <p>Manage your items here</p>
              <button className="demo-banner-btn">Download</button>
            </div>
          }
          contentPanel={
            <div className="demo-content-list">
              <h3>Items ({open ? 'New Only' : 'All'})</h3>
              <div className="demo-card">Card 1</div>
              <div className="demo-card">Card 2</div>
              <div className="demo-card">Card 3</div>
            </div>
          }
          aria-label="Toggle between new and all items"
        />
      </div>
    )
  },
}

/**
 * Different color scheme - notice toggle auto-contrasts.
 */
export const CustomColors: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div className="story-container">
        <RubberSplitView
          id="custom-colors"
          open={open}
          onToggle={setOpen}
          className="demo-split-container"
          contentClassName="demo-split-content"
          toggleLabels={{ left: 'Active', right: 'Archive' }}
          bannerColor="var(--red-300)"
          contentColor="var(--charcoal-700)"
          bannerContent={
            <div className="demo-banner-content">
              <h1>Dashboard</h1>
              <p>View your data</p>
            </div>
          }
          contentPanel={
            <div className="demo-content-list">
              <h3>Data List</h3>
              <div className="demo-card">Item A</div>
              <div className="demo-card">Item B</div>
            </div>
          }
          aria-label="Toggle view"
        />
      </div>
    )
  },
}

/**
 * Without toggle - control externally.
 */
export const ExternalControl: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <div className="story-container">
        <div className="external-controls">
          <button onClick={() => setOpen(true)} className="demo-ext-btn">
            Show Banner
          </button>
          <button onClick={() => setOpen(false)} className="demo-ext-btn">
            Show Content
          </button>
        </div>

        <RubberSplitView
          id="external-split"
          open={open}
          onToggle={setOpen}
          showToggle={false}
          className="demo-split-container"
          contentClassName="demo-split-content"
          bannerColor="var(--blue-700)"
          contentColor="var(--charcoal-500)"
          bannerContent={
            <div className="demo-banner-content">
              <h1>Banner</h1>
            </div>
          }
          contentPanel={
            <div className="demo-content-list">
              <h3>Content</h3>
            </div>
          }
        />
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
    const [bannerColor, setBannerColor] = useState('#667eea')
    const [contentColor, setContentColor] = useState('#1a1a2e')
    const [leftLabel, setLeftLabel] = useState('New')
    const [rightLabel, setRightLabel] = useState('All')

    return (
      <div className="story-container">
        <div className="playground-controls">
          <label>
            <span>Duration: {duration}s</span>
            <input
              type="range"
              min="0.3"
              max="1.5"
              step="0.1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </label>
          <label>
            <span>Left Label</span>
            <input
              type="text"
              value={leftLabel}
              onChange={(e) => setLeftLabel(e.target.value)}
              placeholder="Left"
            />
          </label>
          <label>
            <span>Right Label</span>
            <input
              type="text"
              value={rightLabel}
              onChange={(e) => setRightLabel(e.target.value)}
              placeholder="Right"
            />
          </label>
          <label>
            <span>Banner Color</span>
            <input
              type="color"
              value={bannerColor}
              onChange={(e) => setBannerColor(e.target.value)}
            />
          </label>
          <label>
            <span>Content Color</span>
            <input
              type="color"
              value={contentColor}
              onChange={(e) => setContentColor(e.target.value)}
            />
          </label>
        </div>

        <RubberSplitView
          id="playground-split"
          open={open}
          onToggle={setOpen}
          duration={duration}
          className="demo-split-container"
          contentClassName="demo-split-content"
          toggleLabels={{ left: leftLabel, right: rightLabel }}
          bannerColor={bannerColor}
          contentColor={contentColor}
          bannerContent={
            <div className="demo-banner-content">
              <h1>Playground</h1>
              <p>Customize the animation</p>
            </div>
          }
          contentPanel={
            <div className="demo-content-list">
              <h3>Content Panel</h3>
              <p>Adjust settings above</p>
            </div>
          }
          aria-label="Toggle panels"
        />
      </div>
    )
  },
}