import { Meta, StoryFn } from '@storybook/react'
import TextColorHover from './TextColorHover'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Text Effects',
  component: TextColorHover,
  parameters: {
    jest: ['TextColorHover.test.tsx'],
  },
} as Meta

const TextColorHoverTemplate: StoryFn = () => (
  <StorybookContainer>
        <TextColorHover text={'Color Text'} />
  </StorybookContainer>
)

export const TextColorHoverComponent = TextColorHoverTemplate.bind({})
