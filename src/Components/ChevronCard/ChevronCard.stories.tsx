import { Meta, StoryFn } from '@storybook/react'
import ChevronCard, { ChevronCardPropsType } from './ChevronCard'
import StorybookContainer from '../StorybookContainer'
import ben from './media/ben.png'


export default {
  title: 'Cards',
  component: ChevronCard,
  parameters: {
    jest: ['ChevronCard.test.tsx'],
  },
  argTypes: {
    color: { options: ['red', ''], control: { type: 'radio' } },
    label: { options: ['Sea', 'Forest', 'Mountain',], control: { type: 'radio' } },
  },
} as Meta

const ChevronCardTemplate: StoryFn<ChevronCardPropsType> = (args) => (
  <StorybookContainer>
    <ChevronCard {...args} />
  </StorybookContainer>
)

export const ChevronCardComponent = ChevronCardTemplate.bind({})
ChevronCardComponent.args = {
  label: 'label',
  imgUrl: ben,
}