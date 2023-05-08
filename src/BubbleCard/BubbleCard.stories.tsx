import { Meta, StoryFn } from '@storybook/react'
import { BubbleCard } from './BubbleCard'
import { BubbleCardPropsType } from './BubbleCard.types'
import shoe from '../media/shoe.png'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Cards',
  component: BubbleCard,
  parameters: {
    jest: ['BubbleCard.test.tsx'],
  },
  argTypes: {
    color: { options: ['red', ''], control: { type: 'radio' } },
    label: { options: ['Sea', 'Forest', 'Mountain'], control: { type: 'radio' } },
  },
} as Meta

const BubbleCardTemplate: StoryFn<BubbleCardPropsType> = args => (
  <StorybookContainer>
    <BubbleCard {...args} />
  </StorybookContainer>
)

export const BubbleCardComponent = BubbleCardTemplate.bind({})
BubbleCardComponent.args = {
  label: 'Shoes',
  imgUrl: shoe,
  content: 'Dummy website using shoes as a theme',
  demoUrl: 'https://ingots.web.app/fishing',
  codeUrl: 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll',
}
