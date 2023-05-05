import { Meta, StoryFn } from '@storybook/react'
import {TextColorHover} from './TextColorHover'
import StorybookContainer from '../StorybookContainer'
import { TextColorHoverPropsTypes } from './TextColorHover.types'

export default {
  title: 'Text Effects',
  component: TextColorHover,
  parameters: {
    jest: ['TextColorHover.test.tsx'],
  },
} as Meta

const TextColorHoverTemplate: StoryFn<TextColorHoverPropsTypes>= () => (
  <StorybookContainer>
        <TextColorHover text={'Color Text'} />
  </StorybookContainer>
)

export const TextColorHoverComponent = TextColorHoverTemplate.bind({})
