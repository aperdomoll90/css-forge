import { Meta, StoryFn } from '@storybook/react'
import ToggleButton from './ToggleButton'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Buttons',
  component: ToggleButton,
  parameters: {
    jest: ['ToggleButton.test.tsx'],
  },
} as Meta

const ToggleButtonTemplate: StoryFn = () => (
  <StorybookContainer>
    <ToggleButton />
  </StorybookContainer>
)

export const ToggleButtonComponent = ToggleButtonTemplate.bind({})
