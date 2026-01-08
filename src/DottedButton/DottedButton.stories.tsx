import { Meta, StoryFn } from '@storybook/react'
import { DottedButton } from './DottedButton'
import { DottedButtonProps } from './DottedButton.types'

export default {
  title: 'Buttons/DottedButton',
  component: DottedButton,
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    textColor: { control: 'color' },
    dotColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1c1d20' },
      ],
    },
  },
} as Meta

const Template: StoryFn<DottedButtonProps> = (args) => <DottedButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Navigation',
  href: '#',
  textColor: '#fff',
  dotColor: '#fff',
}

export const MultipleItems: StoryFn = () => (
  <nav style={{ display: 'flex', gap: '1rem' }}>
    <DottedButton label="Home" href="#" textColor="#fff" dotColor="#fff" />
    <DottedButton label="About" href="#" textColor="#fff" dotColor="#fff" />
    <DottedButton label="Services" href="#" textColor="#fff" dotColor="#fff" />
    <DottedButton label="Contact" href="#" textColor="#fff" dotColor="#fff" />
  </nav>
)
MultipleItems.parameters = {
  backgrounds: { default: 'dark' },
}