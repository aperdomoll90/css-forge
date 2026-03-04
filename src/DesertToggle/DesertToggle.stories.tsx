import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { DesertToggle } from './DesertToggle'
import { DesertToggleProps } from './DesertToggle.types'

export default {
  title: 'Toggles/DesertToggle',
  component: DesertToggle,
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    size: { control: { type: 'range', min: 0.5, max: 2, step: 0.1 } },
    ariaLabel: { control: 'text' },
  },
} as Meta

const Template: StoryFn<DesertToggleProps> = (args) => <DesertToggle {...args} />

export const Default = Template.bind({})
Default.args = {}

const ControlledTemplate: StoryFn<DesertToggleProps> = (args) => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <DesertToggle {...args} checked={checked} onToggle={setChecked} />
      <p style={{ marginTop: '1rem', color: '#888' }}>
        {checked ? 'Night time - Stars are visible' : 'Day time - Sun is shining'}
      </p>
    </div>
  )
}

