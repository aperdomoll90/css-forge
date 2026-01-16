import { Meta, StoryFn } from '@storybook/react'
import { DrawButton } from './DrawButton'
import { DrawButtonProps } from './DrawButton.types'

export default {
  title: 'Buttons/DrawButton',
  component: DrawButton,
  argTypes: {
    children: { control: 'text' },
    fontSize: { control: 'text' },
    href: { control: 'text' },
    target: { control: 'text' },
    variant: {
      control: 'select',
      options: ['circled', 'underline'],
    },
    labelColor: { control: 'color' },
    strokeColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: 'var(--white-100)' },
        { name: 'dark', value: 'var(--charcoal-300)' },
      ],
    },
  },
} as Meta

const Template: StoryFn<DrawButtonProps> = (args) => <DrawButton {...args} />

export const DrawButtonComponent = Template.bind({})
DrawButtonComponent.args = {
  children: 'Click Me',
  variant: 'circled',
}

export const BothVariants: StoryFn = () => (
  <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
    <DrawButton variant="circled">Circled</DrawButton>
    <DrawButton variant="underline">Underline</DrawButton>
  </div>
)