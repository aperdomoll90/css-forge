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
    <div
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '200vh',
        overflow: 'scroll',
        background:'yellow',
      }}>
      <HikerParallax />
      <div
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        background:'red',
      }}/>
    </div>
  </StorybookContainer>
)

export const HikerParallaxComponent = HikerParallaxTemplate.bind({})
