import { Meta, StoryFn } from '@storybook/react'
import { FixedModel } from './FixedModel'
import StorybookContainer from '../StorybookContainer'
import { FixedModelPropsTypes } from './FixedModel.types'

export default {
  title: '3D',
  component: FixedModel,
  parameters: {
    jest: ['FixedModel.test.tsx'],
  },
  argTypes: {
    bgColor: { options: ['#fff', '#cacbcd', '#f15946', '#571ec1', '#636567'], control: { type: 'select' } },
    testId: { options: ['test-1', 'test-2'], control: { type: 'radio' } },
    customClass: { options: ['test-1', 'test-2'], control: { type: 'radio' } },
  },
} as Meta

const FixedModelTemplate: StoryFn<FixedModelPropsTypes> = args => (
  <StorybookContainer>
    <FixedModel {...args} />
  </StorybookContainer>
)

export const FixedModelComponent = FixedModelTemplate.bind({})
FixedModelComponent.args = {}
