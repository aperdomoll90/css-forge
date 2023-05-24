import { Meta, StoryFn } from '@storybook/react'
import { ToggleButton } from './ToggleButton'
import StorybookContainer from '../StorybookContainer'
import { ToggleButtonPropsType } from './ToggleButton.types'
import { colorPickerControl, dozen } from '../utils/StoryProps'

export default {
  title: 'Buttons',
  component: ToggleButton,
  parameters: {
    jest: ['ToggleButton.test.tsx'],
  },
  argTypes: {
    active: { options: [true,false], control: { type: 'radio' } },
    size: { options: dozen, control: { type: 'select' } },
    top: { options: dozen, control: { type: 'select' } },
    bottom: { options: dozen, control: { type: 'select' } },
    left: { options: dozen, control: { type: 'select' } },
    right: { options: dozen, control: { type: 'select' } },
    color: colorPickerControl,
    buttonHover: colorPickerControl,
    buttonBackgroundColor: colorPickerControl,
    shadow: { options: [true, false], control: { type: 'radio' } },
    ariaControls: { options: ['ariaControls', 'ariaControlsTest'], control: { type: 'radio' } },
    customClass: { options: ['customClass', 'customClassTest'], control: { type: 'radio' } },
  },
} as Meta

const ToggleButtonTemplate: StoryFn<ToggleButtonPropsType> = args => {
  return (
    <StorybookContainer>
      <div className='story-button-container-centered'>
        <ToggleButton {...args} />
      </div>
    </StorybookContainer>
  )
}

export const ToggleButtonComponent = ToggleButtonTemplate.bind({})
ToggleButtonComponent.args = {
  setActive: () => {
    return
  },
}
