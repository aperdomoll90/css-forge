import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ToggleSwitch } from './ToggleSwitch'
import { ToggleSwitchProps } from './ToggleSwitch.types'

export default {
  title: 'Toggles/ToggleSwitch',
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
  color: 'var(--orange-600)',
}

export const WithLabels = Template.bind({})
WithLabels.args = {
  size: 60,
  color: 'var(--orange-600)',
  labelBefore: 'Off',
  labelAfter: 'On',
}


export const ThemeToggle: StoryFn<ToggleSwitchProps> = (args) => {
  const [isDark, setIsDark] = useState(false)
  return (
    <div
      style={{
        padding: '4rem',
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
  color: 'var(--orange-600)',
}


export const CustomColors = Template.bind({})
CustomColors.args = {
  size: 60,
  color: '#9c27b0',
  sliderColor: '#ffeb3b',
}