import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { HamburgerButton } from './HamburgerButton'
import { HamburgerButtonProps } from './HamburgerButton.types'

export default {
  title: 'Buttons/HamburgerButton',
  component: HamburgerButton,
  argTypes: {
    active: { control: 'boolean' },
    defaultActive: { control: 'boolean' },
    size: { control: { type: 'range', min: 16, max: 64, step: 4 } },
    color: { control: 'color' },
    ariaLabel: { control: 'text' },
  },
} as Meta

const Template: StoryFn<HamburgerButtonProps> = (args) => <HamburgerButton {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 32,
  color: '#fff',
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
ExternalState.args = {
  size: 32,
  color: '#fff',
}

export const WithCustomStyle: StoryFn<HamburgerButtonProps> = (args) => (
  <div>
    <HamburgerButton
      {...args}
      style={{
        backgroundColor: '#303030',
        borderRadius: '5px',
        padding: '8px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.8)',
      }}
    />
    <p style={{ color: '#888', marginTop: '1rem', fontSize: '0.875rem' }}>
      Use className or style to add your own background, shape, hover states etc.
    </p>
  </div>
)
WithCustomStyle.args = {
  size: 32,
  color: '#fff',
}

export const Small = Template.bind({})
Small.args = {
  size: 24,
  color: '#fff',
}

export const Large = Template.bind({})
Large.args = {
  size: 48,
  color: '#fff',
}

export const Green = Template.bind({})
Green.args = {
  size: 32,
  color: '#4caf50',
}