import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ExpandButton } from './ExpandButton'
import { ExpandButtonProps } from './ExpandButton.types'

export default {
  title: 'Components/ExpandButton',
  component: ExpandButton,
  argTypes: {
    active: { control: 'boolean' },
    defaultActive: { control: 'boolean' },
    size: { control: { type: 'range', min: 30, max: 100, step: 5 } },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    ariaLabel: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1b1b1c' }],
    },
  },
} as Meta

const Template: StoryFn<ExpandButtonProps> = (args) => (
  <div style={{ padding: '2rem' }}>
    <ExpandButton {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  size: 50,
  color: '#fff',
  backgroundColor: '#4caf50',
}

export const DefaultActive = Template.bind({})
DefaultActive.args = {
  size: 50,
  defaultActive: true,
  color: '#fff',
  backgroundColor: '#4caf50',
}

const ControlledTemplate: StoryFn<ExpandButtonProps> = (args) => {
  const [active, setActive] = useState(false)
  return (
    <div style={{ padding: '2rem' }}>
      <ExpandButton {...args} active={active} onToggle={setActive} />
      <p style={{ color: '#fff', marginTop: '1rem' }}>
        {active ? 'Expanded' : 'Collapsed'}
      </p>
    </div>
  )
}

export const Controlled = ControlledTemplate.bind({})
Controlled.args = {
  size: 50,
  color: '#fff',
  backgroundColor: '#4caf50',
}

export const Blue = Template.bind({})
Blue.args = {
  size: 50,
  color: '#fff',
  backgroundColor: '#2196f3',
}

export const Small = Template.bind({})
Small.args = {
  size: 35,
  color: '#fff',
  backgroundColor: '#4caf50',
}

export const Large = Template.bind({})
Large.args = {
  size: 80,
  color: '#fff',
  backgroundColor: '#9c27b0',
}