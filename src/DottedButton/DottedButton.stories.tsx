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
        { name: 'light', value: 'var(--white-100)' },
        { name: 'dark', value: 'var(--charcoal-300)' },
      ],
    },
  },
} as Meta

const Template: StoryFn<DottedButtonProps> = (args) => <DottedButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Navigation',
  href: '#',
  textColor: 'var(--white-100)',
  dotColor: 'var(--white-100)',
}

export const MultipleItems: StoryFn = () => (
  <nav style={{ display: 'flex', gap: '1rem' }}>
    <DottedButton label="Home" href="#" textColor="var(--white-100)" dotColor="var(--white-100)" />
    <DottedButton label="About" href="#" textColor="var(--white-100)" dotColor="var(--white-100)" />
    <DottedButton label="Services" href="#" textColor="var(--white-100)" dotColor="var(--white-100)" />
    <DottedButton label="Contact" href="#" textColor="var(--white-100)" dotColor="var(--white-100)" />
  </nav>
)
MultipleItems.parameters = {
  backgrounds: { default: 'dark' },
}