import { Meta, StoryFn } from '@storybook/react'
import {RollingBallNav} from './RollingBallNav'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Navigation Bars',
  component: RollingBallNav,
  parameters: {
    jest: ['RollingBallNav.test.tsx'],
  },
} as Meta

const RollingBallNavTemplate: StoryFn = () => (
  <StorybookContainer>
    <RollingBallNav />
  </StorybookContainer>
)

export const RollingBallNavComponent = RollingBallNavTemplate.bind({})
