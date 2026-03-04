import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { HillToggle } from './HillToggle'
import { HillToggleProps } from './HillToggle.types'

export default {
  title: 'Toggles/HillToggle',
  component: HillToggle,
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    size: { control: { type: 'range', min: 0.5, max: 2, step: 0.1 } },
    ariaLabel: { control: 'text' },
  },
} as Meta

const Template: StoryFn<HillToggleProps> = (args) => <HillToggle {...args} />

export const Default = Template.bind({})
Default.args = {}

const ControlledTemplate: StoryFn<HillToggleProps> = (args) => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <HillToggle {...args} checked={checked} onToggle={setChecked} />
      <p style={{ marginTop: '1rem', color: '#888' }}>
        {checked ? 'Day time - Sun is shining' : 'Night time - Moon and stars visible'}
      </p>
    </div>
  )
}
