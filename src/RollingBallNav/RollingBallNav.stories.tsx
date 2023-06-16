import { Meta, StoryFn } from '@storybook/react'
import { RollingBallNav } from './RollingBallNav'
import StorybookContainer from '../StorybookContainer'
import { RollingBallNavPropsTypes } from './RollingBallNav.type'
import { menuItemsArray } from '../utils/MenuProps'

export default {
  title: 'Navigation',
  component: RollingBallNav,
  parameters: {
    jest: ['RollingBallNav.test.tsx'],
  },
} as Meta

const RollingBallNavTemplate: StoryFn<RollingBallNavPropsTypes> = (args) => (
  <StorybookContainer>
    <RollingBallNav {...args} />
  </StorybookContainer>
)

export const RollingBallNavComponent = RollingBallNavTemplate.bind({})
RollingBallNavComponent.args = {
  menuItemsArray: menuItemsArray,
}