import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ToggleSwitch } from './ToggleSwitch'
import { ToggleSwitchProps } from './ToggleSwitch.types'

export default {
  title: 'Buttons/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    size: { control: { type: 'range', min: 40, max: 100, step: 4 } },
    color: { control: 'color' },
    sliderColor: { control: 'color' },
    labelBefore: { control: 'text' },
    labelAfter: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
} as Meta

const Template: StoryFn<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 60,
  color: '#f28b30',
}

export const WithLabels = Template.bind({})
WithLabels.args = {
  size: 60,
  color: '#f28b30',
  labelBefore: 'Off',
  labelAfter: 'On',
}

const ControlledTemplate: StoryFn<ToggleSwitchProps> = (args) => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <ToggleSwitch {...args} checked={checked} onToggle={setChecked} />
      <p style={{ marginTop: '1rem' }}>
        Toggle is {checked ? 'ON' : 'OFF'}
      </p>
    </div>
  )
}

export const ExternalState = ControlledTemplate.bind({})
ExternalState.args = {
  size: 60,
  color: '#f28b30',
}

export const ThemeToggle: StoryFn<ToggleSwitchProps> = (args) => {
  const [isDark, setIsDark] = useState(false)
  return (
    <div
      style={{
        padding: '2rem',
        background: isDark ? '#111' : '#f9fbe6',
        color: isDark ? '#eee' : '#405d27',
        transition: 'background 0.4s, color 0.4s',
        borderRadius: '8px',
      }}
    >
      <ToggleSwitch
        {...args}
        checked={isDark}
        onToggle={setIsDark}
        labelBefore="Light"
        labelAfter="Dark"
      />
      <p style={{ marginTop: '1rem' }}>
        Current theme: {isDark ? 'Dark Mode' : 'Light Mode'}
      </p>
    </div>
  )
}
ThemeToggle.args = {
  size: 60,
  color: '#f28b30',
}

export const Small = Template.bind({})
Small.args = {
  size: 40,
  color: '#4caf50',
}

export const Large = Template.bind({})
Large.args = {
  size: 80,
  color: '#2196f3',
}

export const CustomColors = Template.bind({})
CustomColors.args = {
  size: 60,
  color: '#9c27b0',
  sliderColor: '#ffeb3b',
}