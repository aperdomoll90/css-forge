import { Meta, StoryFn } from '@storybook/react'
import {ThreeJsTest} from './ThreeJsTest'
import StorybookContainer from '../StorybookContainer'
import { ThreeJsTestPropsType } from './ThreeJsTest.types'

export default {
  title: '3D',
  component: ThreeJsTest,
  parameters: {
    jest: ['ThreeJsTest.test.tsx'],
  },
  argTypes: {
    size: { options: [90, 80, 50,], control: { type: 'radio' } },
  },
} as Meta

const ThreeJsTestTemplate: StoryFn<ThreeJsTestPropsType> = (args) => (
  <StorybookContainer>
    <ThreeJsTest {...args} />
  </StorybookContainer>
)

export const ThreeJsTestComponent = ThreeJsTestTemplate.bind({})
ThreeJsTestComponent.args = {
  size: 80,
}