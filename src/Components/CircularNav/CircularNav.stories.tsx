import { Meta, StoryFn } from '@storybook/react'
import CircularNav from './CircularNav'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Navigation Bars',
  component: CircularNav,
  parameters: {
    jest: ['CircularNav.test.tsx'],
  },
} as Meta

const CircularNavTemplate: StoryFn = () => (
  <StorybookContainer>
    <CircularNav />
  </StorybookContainer>
)

export const CircularNavComponent = CircularNavTemplate.bind({})
