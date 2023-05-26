import { Meta, StoryFn } from '@storybook/react'
import { TestHook } from './TestHook'
import StorybookContainer from '../StorybookContainer'
import { TestHookPropsType } from './TestHook.types'
import { colorPickerControl, dozen } from '../utils/StoryProps'

export default {
  title: 'Buttons',
  component: TestHook,
  parameters: {
    jest: ['TestHook.test.tsx'],
  },
  argTypes: {
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

const TestHookTemplate: StoryFn<TestHookPropsType> = args => {
  return (
    <StorybookContainer>
      <div className='story-button-container-centered'>
        <TestHook {...args} />
      </div>
    </StorybookContainer>
  )
}

export const TestHookComponent = TestHookTemplate.bind({})
TestHookComponent.args = {}
