import { Meta, StoryFn } from '@storybook/react'
import { PerspectiveControls } from './PerspectiveControls'
import StorybookContainer from '../StorybookContainer'
import { createRef } from 'react'
import { PerspectiveControlsPropsTypes } from './PerspectiveControls.types'

export default {
  title: 'Navigation',
  component: PerspectiveControls,
  parameters: {
    jest: ['PerspectiveControls.test.tsx'],
  },
  argTypes: {
    customClass: { options: ['test-1', 'test-2'], control: { type: 'radio' } },
    top: { options: [0, '5', '20'], control: { type: 'select' } },
    bottom: { options: [0, '5', '20'], control: { type: 'select' } },
    left: { options: [0, '5', '20'], control: { type: 'select' } },
    right: { options: [0, '5', '20'], control: { type: 'select' } },
    labelColor: { options: ['none', '#fff', '#000'], control: { type: 'radio' } },
    primaryColor: { options: ['none', '#fff', '#000'], control: { type: 'radio' } },
    buttonColor: { options: ['none', '#fff', '#000'], control: { type: 'radio' } },
    hoverColor: { options: ['none', '#fff', '#000'], control: { type: 'radio' } },
    pressColor: { options: ['none', '#fff', '#000'], control: { type: 'radio' } },
  },
} as Meta

const PerspectiveControlsTemplate: StoryFn<PerspectiveControlsPropsTypes> = args => (
  <StorybookContainer>
    <PerspectiveControls {...args} />
  </StorybookContainer>
)

export const PerspectiveControlsComponent = PerspectiveControlsTemplate.bind({})
PerspectiveControlsComponent.args = {
  cameraRef: createRef<any>(),
  customClass: 'Test-class',
}
