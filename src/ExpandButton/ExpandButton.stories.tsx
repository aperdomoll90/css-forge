import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ExpandButton } from './ExpandButton'
import { ExpandButtonProps } from './ExpandButton.types'

export default {
  title: 'Buttons/ExpandButton',
  component: ExpandButton,
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['rotate', 'collapse'] },
    active: { control: 'boolean' },
    defaultActive: { control: 'boolean' },
    size: { control: { type: 'range', min: 1, max: 4, step: 0.25 } },
    lineThickness: { control: { type: 'range', min: 0.0625, max: 0.25, step: 0.0625 } },
    color: { control: 'color' },
    ariaLabel: { control: 'text' },
  },
} as Meta

const Template: StoryFn<ExpandButtonProps> = (args) => <ExpandButton {...args} />

export const RotateVariant = Template.bind({})
RotateVariant.args = {
  variant: 'rotate',
}

export const CollapseVariant = Template.bind({})
CollapseVariant.args = {
  variant: 'collapse',
}

export const Comparison: StoryFn<ExpandButtonProps> = () => {
  const [active, setActive] = useState(false)
  return (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <ExpandButton variant="rotate" active={active} onToggle={setActive} size={2} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#888' }}>rotate</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <ExpandButton variant="collapse" active={active} onToggle={setActive} size={2} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#888' }}>collapse</p>
      </div>
    </div>
  )
}

const ControlledTemplate: StoryFn<ExpandButtonProps> = (args) => {
  const [active, setActive] = useState(false)
  return (
    <div>
      <ExpandButton {...args} active={active} onToggle={setActive} />
      <p style={{ marginTop: '1rem' }}>
        {active ? 'Expanded' : 'Collapsed'}
      </p>
    </div>
  )
}

export const ExternalState = ControlledTemplate.bind({})

export const WithCustomStyle: StoryFn<ExpandButtonProps> = (args) => (
  <div>
    <ExpandButton
      {...args}
      style={{
        backgroundColor: '#4caf50',
        borderRadius: '50%',
        padding: '0.75rem',
        width: '3rem',
        height: '3rem',
      }}
    />
    <p style={{ color: '#888', marginTop: '1rem', fontSize: '0.875rem' }}>
      Use className to add your own background, shape, hover states etc.
    </p>
  </div>
)

export const Small = Template.bind({})
Small.args = {
  size: 1,
}

export const Large = Template.bind({})
Large.args = {
  size: 3,
}