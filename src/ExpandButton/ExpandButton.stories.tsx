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
    size: { control: { type: 'range', min: 16, max: 64, step: 4 } },
    color: { control: 'color' },
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
  size: 24,
  color: '#fff',
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

export const ExternalState = ControlledTemplate.bind({})
ExternalState.args = {
  size: 24,
  color: '#fff',
}

export const WithCustomStyle: StoryFn<ExpandButtonProps> = (args) => (
  <div style={{ padding: '2rem' }}>
    <ExpandButton
      {...args}
      className="custom-expand"
      style={{
        backgroundColor: '#4caf50',
        borderRadius: '50%',
        padding: '12px',
        width: '48px',
        height: '48px',
      } as React.CSSProperties}
    />
    <p style={{ color: '#888', marginTop: '1rem', fontSize: '0.875rem' }}>
      Use className to add your own background, shape, hover states etc.
    </p>
  </div>
)
WithCustomStyle.args = {
  size: 24,
  color: '#fff',
}

export const Small = Template.bind({})
Small.args = {
  size: 16,
  color: '#fff',
}

export const Large = Template.bind({})
Large.args = {
  size: 48,
  color: '#fff',
}

export const Green = Template.bind({})
Green.args = {
  size: 24,
  color: '#4caf50',
}