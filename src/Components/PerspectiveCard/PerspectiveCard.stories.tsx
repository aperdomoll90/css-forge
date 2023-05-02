import { Meta, StoryFn } from '@storybook/react'
import PerspectiveCard, { PerspectiveCardPropsType } from './PerspectiveCard'
import StorybookContainer from '../StorybookContainer'
import shoe from './media/shoe.png'


export default {
  title: 'Cards',
  component: PerspectiveCard,
  parameters: {
    jest: ['PerspectiveCard.test.tsx'],
  },
  argTypes: {
    color: { options: ['red', ''], control: { type: 'radio' } },
    label: { options: ['Sea', 'Forest', 'Mountain',], control: { type: 'radio' } },
  },
} as Meta

const PerspectiveCardTemplate: StoryFn<PerspectiveCardPropsType> = (args) => (
  <StorybookContainer>
    <PerspectiveCard {...args} />
  </StorybookContainer>
)

export const PerspectiveCardComponent = PerspectiveCardTemplate.bind({})
PerspectiveCardComponent.args = {
  label: 'Shoes',
  imgUrl: shoe,
  content:'This card follows the pointer',
}