import { Meta, StoryFn } from '@storybook/react'
import StarrySky from './StarrySky'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Petting Zoo',
  component: StarrySky,
  parameters: {
    jest: ['StarrySky.test.tsx'],
  },
} as Meta

const StarrySkyTemplate: StoryFn = () => (
  <StorybookContainer>
    <StarrySky />
  </StorybookContainer>
)

export const StarrySkyComponent = StarrySkyTemplate.bind({})
