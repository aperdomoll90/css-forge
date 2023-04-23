import { Meta, StoryFn } from '@storybook/react'
import Terrarium from './Terrarium'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Petting Zoo',
  component: Terrarium,
  parameters: {
    jest: ['Terrarium.test.tsx'],
  },
} as Meta

const TerrariumTemplate: StoryFn = () => (
  <StorybookContainer>
    <Terrarium />
  </StorybookContainer>
)

export const TerrariumComponent = TerrariumTemplate.bind({})
