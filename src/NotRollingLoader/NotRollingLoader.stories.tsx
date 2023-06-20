import { Meta, StoryFn } from '@storybook/react'
import { NotRollingLoader } from './NotRollingLoader'
import StorybookContainer from '../StorybookContainer'
import { NotRollingLoaderPropsType } from './NotRollingLoader.types'

export default {
  title: 'Loaders',
  component: NotRollingLoader,
  parameters: {
    jest: ['NotRollingLoader.test.tsx'],
  },
  argTypes: {
    tracks: { options: [2, 4, 7, 8], control: { type: 'radio' } },
  },
} as Meta

const NotRollingLoaderTemplate: StoryFn<NotRollingLoaderPropsType> = args => (
  <StorybookContainer>
    <NotRollingLoader {...args} />
  </StorybookContainer>
)

export const NotRollingLoaderComponent = NotRollingLoaderTemplate.bind({})
NotRollingLoaderComponent.args = {
  tracks: 10,
}
