import { Meta, StoryFn } from '@storybook/react'
import FaeLoader, { FaeLoaderPropsType } from './FaeLoader'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Loaders',
  component: FaeLoader,
  parameters: {
    jest: ['FaeLoader.test.tsx'],
  },
  argTypes: {
    size: { options: [90, 80, 50,], control: { type: 'radio' } },
  },
} as Meta

const FaeLoaderTemplate: StoryFn<FaeLoaderPropsType> = (args) => (
  <StorybookContainer>
    <FaeLoader {...args} />
  </StorybookContainer>
)

export const FaeLoaderComponent = FaeLoaderTemplate.bind({})
FaeLoaderComponent.args = {
  size: 80,
}