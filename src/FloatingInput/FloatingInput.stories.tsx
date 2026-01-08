import { Meta, StoryFn } from '@storybook/react'
import { FloatingInput } from './FloatingInput'
import { FloatingInputProps } from './FloatingInput.types'

export default {
  title: 'Inputs/FloatingInput',
  component: FloatingInput,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'text' },
    error: { control: 'text' },
    borderColor: { control: 'color' },
    borderColorFocus: { control: 'color' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    errorColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1b1b1c' },
      ],
    },
  },
} as Meta

const Template: StoryFn<FloatingInputProps> = (args) => <FloatingInput {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'name',
  label: 'Name',
  required: true,
}

export const WithError = Template.bind({})
WithError.args = {
  name: 'email',
  label: 'Email',
  required: true,
  error: 'Email is required',
}