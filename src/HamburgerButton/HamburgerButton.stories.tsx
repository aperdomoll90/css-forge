import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { HamburgerButton } from './HamburgerButton'
import { HamburgerButtonProps } from './HamburgerButton.types'

export default {
  title: 'Buttons/HamburgerButton',
  component: HamburgerButton,
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['spin', 'cross'] },
    active: { control: 'boolean' },
    defaultActive: { control: 'boolean' },
    size: { control: { type: 'range', min: 1, max: 4, step: 0.25 } },
    color: { control: 'color' },
    ariaLabel: { control: 'text' },
  },
} as Meta

const Template: StoryFn<HamburgerButtonProps> = (args) => <HamburgerButton {...args} />

export const HamburgerButtonComponent = Template.bind({})
HamburgerButtonComponent.args = {
  variant: 'spin',
}

export const Comparison: StoryFn<HamburgerButtonProps> = () => {
  const [active, setActive] = useState(false)
  return (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <HamburgerButton variant="spin" active={active} onToggle={setActive} size={2} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#888' }}>spin</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <HamburgerButton variant="cross" active={active} onToggle={setActive} size={2} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#888' }}>cross</p>
      </div>
    </div>
  )
}

const ControlledTemplate: StoryFn<HamburgerButtonProps> = (args) => {
  const [active, setActive] = useState(false)
  return (
    <div>
      <HamburgerButton {...args} active={active} onToggle={setActive} />
      <p style={{ marginTop: '1rem' }}>
        Menu is {active ? 'open' : 'closed'}
      </p>
    </div>
  )
}

export const ExternalState = ControlledTemplate.bind({})

export const WithCustomStyle: StoryFn<HamburgerButtonProps> = (args) => (
  <div>
    <HamburgerButton
      {...args}
      style={{
        backgroundColor: '#303030',
        borderRadius: '5px',
        padding: '0.5rem',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.8)',
      }}
    />
    <p style={{ color: '#888', marginTop: '1rem', fontSize: '0.875rem' }}>
      Use className or style to add your own background, shape, hover states etc.
    </p>
  </div>
)