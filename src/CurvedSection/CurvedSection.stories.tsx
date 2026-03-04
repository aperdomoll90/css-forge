import type { Meta, StoryObj } from '@storybook/react'
import { CurvedSection } from './CurvedSection'
import './CurvedSection.stories.scss'

const meta: Meta<typeof CurvedSection> = {
  title: 'Components/CurvedSection',
  component: CurvedSection,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    background: {
      control: 'color',
      description: 'Section background color',
      table: { category: 'Colors' },
    },
    curveBackground: {
      control: 'color',
      description: 'Curve background color (defaults to background)',
      table: { category: 'Colors' },
    },
    animationRange: {
      control: 'text',
      description: 'Scroll animation range (CSS animation-range)',
      table: { category: 'Animation' },
    },
    scaleFrom: {
      control: { type: 'range', min: 0, max: 60, step: 1 },
      description: 'Curve scale start value',
      table: { category: 'Animation' },
    },
    scaleTo: {
      control: { type: 'range', min: 0, max: 60, step: 1 },
      description: 'Curve scale end value',
      table: { category: 'Animation' },
    },
    className: {
      control: 'text',
      description: 'Optional className for custom layout',
      table: { category: 'Layout' },
    },
    children: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof CurvedSection>

export const Basic: Story = {
  render: () => (
    <div className='story-curved'>
      <CurvedSection
        className='story-curved__content'
        animationRange='10% 40%'
        scaleFrom={15}
        scaleTo={0}
        background='var(--white-100)'
        curveBackground='var(--white-100)'
      >
        <section className='story-curved__header'>
          <h1 className='story-curved__header-title'>Building digital products that set new standards</h1>
        </section>
        <div className='story-curved__body'>
          <p>Content inside the curved section. Scroll to see the curve animation.</p>
        </div>
      </CurvedSection>

      <section className='story-curved__footer'>
        <p>Section below the curve</p>
      </section>
    </div>
  ),
}

export const LargeCurve: Story = {
  render: () => (
    <div className='story-curved'>
      <CurvedSection
        className='story-curved__content'
        animationRange='50% 100%'
        scaleFrom={30}
        scaleTo={0}
        background='var(--white-100)'
        curveBackground='var(--white-100)'
      >
        <section className='story-curved__header'>
          <h1 className='story-curved__header-title'>Large curve effect</h1>
        </section>
        <div className='story-curved__body'>
          <p>This example uses scaleFrom: 30 and scaleTo: 0 for a more dramatic curve.</p>
        </div>
      </CurvedSection>

      <section className='story-curved__footer'>
        <p>Section below the curve</p>
      </section>
    </div>
  ),
}