import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { WaveAccordion } from './WaveAccordion'
import { WaveAccordionProps } from './WaveAccordion.types'
import './WaveAccordion.stories.scss'

/**
 * Color palette for stories (reuse across components):
 * - Solid: #e74c3c (red), #3498db (blue), #f1c40f (yellow), #e91e63 (pink), #2ecc71 (green)
 *          #9b59b6 (purple), #e67e22 (orange), #1abc9c (teal)
 * - Gradients:
 *   - Sunset: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
 *   - Flamingo: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
 *   - Ocean: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
 *   - Forest: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)
 *   - Fire: linear-gradient(135deg, #fa709a 0%, #fee140 100%)
 *   - Night: linear-gradient(135deg, #0c1445 0%, #1a1a2e 100%)
 *   - Innovation: linear-gradient(180deg, #1a1a2e 0%, #0f0f23 100%)
 *   - Design: linear-gradient(180deg, #2d1b69 0%, #1a1a2e 100%)
 *   - Code: linear-gradient(180deg, #134e5e 0%, #1a1a2e 100%)
 *   - Deploy: linear-gradient(180deg, #4a1942 0%, #1a1a2e 100%)
 */

const imageUrls = [
  'https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longjungle.png',
  'https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longdarkplacidlake.png',
  'https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longgoldenswamp.png',
  'https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longsnowylake.png',
  'https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longnightjungle.png',
  'https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longfalllake.png',
  'https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longstormybeach.png',
  'https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longforestlight.png',
  'https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/lomgsnowingmountain.png',
  'https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/sunsetlake.png',
]

// Solid color panels
const colorPanels = [
  <div key="red" className="wave-panel" style={{ background: '#e74c3c' }}><span>Red</span></div>,
  <div key="blue" className="wave-panel" style={{ background: '#3498db' }}><span>Blue</span></div>,
  <div key="yellow" className="wave-panel" style={{ background: '#f1c40f' }}><span>Yellow</span></div>,
  <div key="pink" className="wave-panel" style={{ background: '#e91e63' }}><span>Pink</span></div>,
  <div key="green" className="wave-panel" style={{ background: '#2ecc71' }}><span>Green</span></div>,
]

// Gradient panels
const gradientPanels = [
  <div key="sunset" className="wave-panel" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}><span>Sunset</span></div>,
  <div key="flamingo" className="wave-panel" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}><span>Flamingo</span></div>,
  <div key="ocean" className="wave-panel" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}><span>Ocean</span></div>,
  <div key="forest" className="wave-panel" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}><span>Forest</span></div>,
  <div key="fire" className="wave-panel" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}><span>Fire</span></div>,
]

export default {
  title: 'Accordions/WaveAccordion',
  component: WaveAccordion,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1b1b1c' },
      ],
    },
  },
} as Meta<WaveAccordionProps>

export const Default: StoryFn = () => (
  <div className="story-container">
    <WaveAccordion items={colorPanels} grayscale={false} />
  </div>
)
Default.parameters = {
  docs: {
    description: {
      story: 'Default wave accordion with solid color panels.',
    },
  },
}

export const Gradients: StoryFn = () => (
  <div className="story-container">
    <WaveAccordion items={gradientPanels} grayscale={false} />
  </div>
)
Gradients.parameters = {
  docs: {
    description: {
      story: 'Wave accordion with gradient backgrounds.',
    },
  },
}

export const WithImages: StoryFn = () => (
  <div className="story-container">
    <WaveAccordion items={imageUrls} />
  </div>
)
WithImages.parameters = {
  docs: {
    description: {
      story: 'Wave accordion with image panels and grayscale effect.',
    },
  },
}

export const SubtleAnimation: StoryFn = () => (
  <div className="story-container">
    <WaveAccordion
      items={gradientPanels}
      grayscale={false}
      animation={{
        hoverScale: 1.03,
        adjacentScale: 1.01,
        hoverDepth: 1.5,
        adjacentDepth: 0.8,
        rotateAngle: 20,
        duration: 0.3,
      }}
    />
  </div>
)
SubtleAnimation.parameters = {
  docs: {
    description: {
      story: 'Subtle animation with reduced scale, depth, and rotation values.',
    },
  },
}

export const DramaticAnimation: StoryFn = () => (
  <div className="story-container">
    <WaveAccordion
      items={colorPanels}
      grayscale={false}
      animation={{
        hoverScale: 1.15,
        adjacentScale: 1.05,
        hoverDepth: 4,
        adjacentDepth: 2,
        rotateAngle: 45,
        perspective: 35,
        duration: 0.6,
      }}
    />
  </div>
)
DramaticAnimation.parameters = {
  docs: {
    description: {
      story: 'Dramatic animation with exaggerated scale, depth, and rotation.',
    },
  },
}

export const ManyPanels: StoryFn = () => (
  <div className="story-container">
    <WaveAccordion
      items={[
        ...colorPanels,
        <div key="purple" className="wave-panel" style={{ background: '#9b59b6' }}><span>Purple</span></div>,
        <div key="orange" className="wave-panel" style={{ background: '#e67e22' }}><span>Orange</span></div>,
        <div key="teal" className="wave-panel" style={{ background: '#1abc9c' }}><span>Teal</span></div>,
      ]}
      grayscale={false}
    />
  </div>
)
ManyPanels.parameters = {
  docs: {
    description: {
      story: 'Works with many panels - adjust animation settings as needed.',
    },
  },
}

const WithCallbackComponent = () => {
  const [activePanel, setActivePanel] = useState<number | null>(null)
  const labels = ['Sunset', 'Flamingo', 'Ocean', 'Forest', 'Fire']

  return (
    <div className="story-container">
      <div className="callback-log">
        {activePanel !== null ? `Clicked: ${labels[activePanel]}` : 'Click a panel'}
      </div>
      <WaveAccordion
        items={gradientPanels}
        grayscale={false}
        onPanelClick={index => setActivePanel(index)}
      />
    </div>
  )
}

export const WithCallback: StoryFn = () => <WithCallbackComponent />
WithCallback.parameters = {
  docs: {
    description: {
      story: 'Using onPanelClick callback to track interactions.',
    },
  },
}

export const CustomContent: StoryFn = () => (
  <div className="story-container">
    <WaveAccordion
      items={[
        <div key="01" className="wave-panel-custom" style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f23 100%)' }}>
          <span className="wave-panel-custom__number">01</span>
          <div className="wave-panel-custom__text">
            <h3>Innovation</h3>
            <p>Pushing boundaries</p>
          </div>
        </div>,
        <div key="02" className="wave-panel-custom" style={{ background: 'linear-gradient(180deg, #2d1b69 0%, #1a1a2e 100%)' }}>
          <span className="wave-panel-custom__number">02</span>
          <div className="wave-panel-custom__text">
            <h3>Design</h3>
            <p>Beautiful interfaces</p>
          </div>
        </div>,
        <div key="03" className="wave-panel-custom" style={{ background: 'linear-gradient(180deg, #134e5e 0%, #1a1a2e 100%)' }}>
          <span className="wave-panel-custom__number">03</span>
          <div className="wave-panel-custom__text">
            <h3>Code</h3>
            <p>Clean architecture</p>
          </div>
        </div>,
        <div key="04" className="wave-panel-custom" style={{ background: 'linear-gradient(180deg, #4a1942 0%, #1a1a2e 100%)' }}>
          <span className="wave-panel-custom__number">04</span>
          <div className="wave-panel-custom__text">
            <h3>Deploy</h3>
            <p>Ship with confidence</p>
          </div>
        </div>,
      ]}
      grayscale={false}
      aspectRatio="1 / 5"
    />
  </div>
)
CustomContent.parameters = {
  docs: {
    description: {
      story: 'Fully custom content with complex layouts.',
    },
  },
}
