import { Meta, StoryFn } from '@storybook/react'
import { BubbleCard } from './BubbleCard'
import { BubbleCardPropsType } from './BubbleCard.types'
import shoe from '../media/shoe.png'
import dice from '../media/dice.png'
import boat from '../media/boat.png'
import StorybookContainer from '../StorybookContainer'
import { colorPickerControl, percental, mintViolet, pentaDecimals, primaryColors, dozen, negativeArray, scaleValues } from '../utils/StoryProps'
import { blackNwhite } from '../utils/StoryProps'

export default {
  title: 'Cards',
  component: BubbleCard,
  parameters: {
    jest: ['BubbleCard.test.tsx'],
  },
  argTypes: {
    label: { options: ['Sea', 'Game', 'Shoe'], control: { type: 'select' } },
    demoUrl: { options: [null, 'https://ingots.web.app/fishing'], control: { type: 'select' } },
    codeUrl: { options: [null, 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll'], control: { type: 'select' } },
    width: { options: pentaDecimals, control: { type: 'select' } },
    height: { options: pentaDecimals, control: { type: 'select' } },
    primaryColor: colorPickerControl,
    secondaryColor: colorPickerControl,
    fontColor: colorPickerControl,
    imgWidth: { options: percental, control: { type: 'select' } },
    imgUrl: { options: [shoe, boat, dice], control: { type: 'select' } },
    imgX: { options: dozen, control: { type: 'select' } },
    imgY: { options: dozen, control: { type: 'select' } },
    hoverX: { options: negativeArray, control: { type: 'select' } },
    hoverY: { options: negativeArray, control: { type: 'select' } },
    hoverScale: { options: scaleValues, control: { type: 'select' } },
    
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
