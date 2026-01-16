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
        { name: 'light', value: 'var(--white-100)' },
        { name: 'dark', value: 'var(--charcoal-300)' },
        { name: 'gray', value: 'var(--gray-100)' },
      ],
    },
  },
} as Meta

const Template: StoryFn<BubbleButtonProps> = args => <BubbleButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
  labelColor: 'var(--white-100)',
  backgroundColor: 'var(--red-200)',
  backgroundHoverColor: 'var(--red-400)',
}
