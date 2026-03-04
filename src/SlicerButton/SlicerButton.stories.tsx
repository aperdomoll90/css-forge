import { Meta, StoryFn } from '@storybook/react'
import { SlicerButton } from './SlicerButton'
import { SlicerButtonProps } from './SlicerButton.types'

export default {
  title: 'Buttons/SlicerButton',
  component: SlicerButton,
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    color: { control: 'color' },
    colorHover: { control: 'color' },
    fontSize: { control: 'text' },
  },
} as Meta

const Template: StoryFn<SlicerButtonProps> = (args) => <SlicerButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Hover Me',
  href: '#',
  color: 'var(--white-100)',
  colorHover: 'var(--green-400)',
  fontSize: '2rem',
}

export const MultipleLinks: StoryFn<SlicerButtonProps> = () => (
  <div style={{ display: 'flex', gap: '2rem' }}>
    <SlicerButton
      label="Home"
      href="#"
      color="var(--white-100)"
      colorHover="var(--green-400)"
      fontSize="1.5rem"
    />
    <SlicerButton
      label="About"
      href="#"
      color="var(--white-100)"
      colorHover="var(--blue-700)"
      fontSize="1.5rem"
    />
    <SlicerButton
      label="Contact"
      href="#"
      color="var(--white-100)"
      colorHover="var(--red-300)"
      fontSize="1.5rem"
    />
  </div>
)

