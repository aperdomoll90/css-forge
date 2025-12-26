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
  color: '#fff',
  colorHover: '#4caf50',
  fontSize: '2rem',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Click Here',
  href: '#',
  color: '#fff',
  colorHover: '#ff5722',
  fontSize: '1rem',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Explore',
  href: '#',
  color: '#fff',
  colorHover: '#2196f3',
  fontSize: '3rem',
}

export const MultipleLinks: StoryFn<SlicerButtonProps> = () => (
  <div style={{ display: 'flex', gap: '2rem' }}>
    <SlicerButton
      label="Home"
      href="#"
      color="#fff"
      colorHover="#4caf50"
      fontSize="1.5rem"
    />
    <SlicerButton
      label="About"
      href="#"
      color="#fff"
      colorHover="#2196f3"
      fontSize="1.5rem"
    />
    <SlicerButton
      label="Contact"
      href="#"
      color="#fff"
      colorHover="#ff5722"
      fontSize="1.5rem"
    />
  </div>
)

export const WithCustomStyle: StoryFn<SlicerButtonProps> = (args) => (
  <div>
    <SlicerButton
      {...args}
      style={{
        fontFamily: 'Georgia, serif',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
      }}
    />
    <p style={{ color: '#888', marginTop: '1rem', fontSize: '0.875rem' }}>
      Use className or style to add your own font styles, spacing etc.
    </p>
  </div>
)
WithCustomStyle.args = {
  label: 'Styled Link',
  href: '#',
  color: '#fff',
  colorHover: '#9c27b0',
  fontSize: '2rem',
}