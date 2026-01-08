import { Meta, StoryFn } from '@storybook/react'
import { BubbleButton } from './BubbleButton'
import { BubbleButtonProps } from './BubbleButton.types'

export default {
  title: 'Buttons/BubbleButton',
  component: BubbleButton,
  argTypes: {
    label: { control: 'text' },
    fontSize: { control: 'text' },
    magnetArea: { control: 'text' },
    padding: { control: 'text' },
    href: { control: 'text' },
    target: { control: 'text' },
    labelColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    backgroundHoverColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1c1d20' },
        { name: 'gray', value: '#e0e0e0' },
      ],
    },
  },
} as Meta

const Template: StoryFn<BubbleButtonProps> = args => <BubbleButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
  labelColor: '#fff',
  backgroundColor: '#e37b7b',
  backgroundHoverColor: '#d75555',
}
