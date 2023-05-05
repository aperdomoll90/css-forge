import { Meta, StoryFn } from '@storybook/react'
import {BouncyLine} from './BouncyLine'
import StorybookContainer from '../StorybookContainer'


export default {
  title: 'User Behavior Animation',
  component: BouncyLine,
  parameters: {
    jest: ['BouncyLine.test.tsx'],
  },
} as Meta

const BouncyLineTemplate: StoryFn = () => (
  <StorybookContainer>
    <BouncyLine />
  </StorybookContainer>
)

export const BouncyLineComponent = BouncyLineTemplate.bind({})
