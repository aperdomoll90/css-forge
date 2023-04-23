import { Meta, StoryFn } from '@storybook/react'
import HikerParallax from './HikerParallax'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Parallax',
  component: HikerParallax,
  parameters: {
    jest: ['HikerParallax.test.tsx'],
  },
} as Meta

const HikerParallaxTemplate: StoryFn = () => (
  <StorybookContainer>
    <HikerParallax />
  </StorybookContainer>
)

export const HikerParallaxComponent = HikerParallaxTemplate.bind({})
