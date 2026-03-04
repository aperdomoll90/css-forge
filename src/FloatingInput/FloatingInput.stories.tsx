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
        { name: 'light', value: 'var(--white-100)' },
        { name: 'dark', value: 'var(--charcoal-400)' },
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