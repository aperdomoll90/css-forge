import { Meta, StoryFn } from '@storybook/react'
import {Narwhal} from './Narwhal'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Petting Zoo',
  component: Narwhal,
  parameters: {
    jest: ['Narwhal.test.tsx'],
  },
} as Meta

const NarwhalTemplate: StoryFn = () => (
  <StorybookContainer>
    <Narwhal />
  </StorybookContainer>
)

export const NarwhalComponent = NarwhalTemplate.bind({})
