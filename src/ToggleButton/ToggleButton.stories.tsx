import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ToggleButton } from './ToggleButton'
import { ToggleButtonProps } from './ToggleButton.types'

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    active: { control: 'boolean' },
    defaultActive: { control: 'boolean' },
    size: { control: { type: 'range', min: 1, max: 5, step: 0.5 } },
    color: { control: 'color' },
    buttonBackgroundColor: { control: 'color' },
    shadow: { control: 'boolean' },
    ariaLabel: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1b1b1c' }],
    },
  },
} as Meta

const Template: StoryFn<ToggleButtonProps> = (args) => (
  <div style={{ padding: '2rem' }}>
    <ToggleButton {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  size: 3,
  color: '#fff',
  buttonBackgroundColor: '#303030',
  shadow: true,
}

export const DefaultActive = Template.bind({})
DefaultActive.args = {
  size: 3,
  defaultActive: true,
  color: '#fff',
  buttonBackgroundColor: '#303030',
  shadow: true,
}

const ControlledTemplate: StoryFn<ToggleButtonProps> = (args) => {
  const [active, setActive] = useState(false)
  return (
    <div style={{ padding: '2rem' }}>
      <ToggleButton {...args} active={active} onToggle={setActive} />
      <p style={{ color: '#fff', marginTop: '1rem' }}>
        Menu is {active ? 'open' : 'closed'}
      </p>
    </div>
  )
}

export const Controlled = ControlledTemplate.bind({})
Controlled.args = {
  size: 3,
  color: '#fff',
  buttonBackgroundColor: '#303030',
  shadow: true,
}

export const Green = Template.bind({})
Green.args = {
  size: 3,
  color: '#fff',
  buttonBackgroundColor: '#4caf50',
  shadow: true,
}

export const Small = Template.bind({})
Small.args = {
  size: 1.5,
  color: '#fff',
  buttonBackgroundColor: '#303030',
  shadow: false,
}

export const Large = Template.bind({})
Large.args = {
  size: 4,
  color: '#fff',
  buttonBackgroundColor: '#2196f3',
  shadow: true,
}
