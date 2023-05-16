import { Meta, StoryFn } from '@storybook/react'
import { PerspectiveCardPropsType } from './PerspectiveCard.types'
import { PerspectiveCard } from './PerspectiveCard'
import StorybookContainer from '../StorybookContainer'
import shoe from '../media/shoe.png'
import { blackNwhite, mintViolet, primaryColors } from '../utils/StoryProps'

export default {
  title: 'Cards',
  component: PerspectiveCard,
  parameters: {
    jest: ['PerspectiveCard.test.tsx'],
  },
  argTypes: {
    label: { options: ['Sea', 'Forest', 'Mountain'], control: { type: 'radio' } },
    demoUrl: { options: [null, 'https://ingots.web.app/fishing'], control: { type: 'radio' } },
    codeUrl: { options: [null, 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll'], control: { type: 'radio' } },
    width: { options: ['17', '10', '5'], control: { type: 'radio' } },
    height: { options: ['23', '17', '10'], control: { type: 'radio' } },
    primaryColor: { options: mintViolet, control: { type: 'radio' } },
    secondaryColor: { options: mintViolet, control: { type: 'radio' } },
    fontColor: { options: [...primaryColors, ...blackNwhite], control: { type: 'radio' } },
    imgWidth: { options: ['70', '50', '20'], control: { type: 'radio' } },
  },
} as Meta

const PerspectiveCardTemplate: StoryFn<PerspectiveCardPropsType> = args => (
  <StorybookContainer>
    <PerspectiveCard {...args} />
  </StorybookContainer>
)

export const PerspectiveCardComponent = PerspectiveCardTemplate.bind({})
PerspectiveCardComponent.args = {
  label: 'Shoes',
  imgUrl: shoe,
  content: 'Dummy website using shoes as a theme',
  demoUrl: 'https://ingots.web.app/fishing',
  codeUrl: 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll',
}
