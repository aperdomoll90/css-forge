import { Meta, StoryFn } from '@storybook/react'
import {RainbowVinylLoader} from './RainbowVinylLoader'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Loaders',
  component: RainbowVinylLoader,
  parameters: {
    jest: ['RainbowVinylLoader.test.tsx'],
  },
} as Meta

const RainbowVinylLoaderTemplate:StoryFn = () => (
  <StorybookContainer>
    <RainbowVinylLoader  />
  </StorybookContainer>
)

export const RainbowVinylLoaderComponent = RainbowVinylLoaderTemplate.bind({})
