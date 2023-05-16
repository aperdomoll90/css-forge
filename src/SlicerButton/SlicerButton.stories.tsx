import { Meta, StoryFn } from '@storybook/react'
import { SlicerButton } from './SlicerButton'
import StorybookContainer from '../StorybookContainer'
import { SlicerButtonPropsTypes } from './SlicerButton.types'

export default {
  title: 'Buttons',
  component: SlicerButton,
  parameters: {
    jest: ['SlicerButton.test.tsx'],
  },
  argTypes: {
    label: { options: ['Button', 'Contact me', 'Home'], control: { type: 'radio' } },
    fontSize: { options: ['1rem', '3rem', '5rem'], control: { type: 'radio' } },
    color: { options: ['#d93654', '#000', 'yellow', 'purple', ''], control: { type: 'radio' } },
    colorHover: { options: ['#d93654', '#000', 'yellow', 'purple', ''], control: { type: 'radio' } },
  },
} as Meta

const SlicerButtonTemplate: StoryFn<SlicerButtonPropsTypes> = args => (
  <StorybookContainer>
    <div className='story-button-container-centered'>
      <SlicerButton {...args} />
    </div>
  </StorybookContainer>
)

export const SlicerButtonComponent = SlicerButtonTemplate.bind({})
SlicerButtonComponent.args = {
  label: 'Button',
  linkUrl: '#testAddress',
  color: 'red',
  fontSize: '2rem',
  colorHover: 'yellow',
}
