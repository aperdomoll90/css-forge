import { Meta, StoryFn } from '@storybook/react'
import { ChevronCard } from './ChevronCard'
import { ChevronCardPropsType } from './ChevronCard.types'
import StorybookContainer from '../StorybookContainer'
import shoe from '../media/shoe.png'

export default {
  title: 'Cards',
  component: ChevronCard,
  parameters: {
    jest: ['ChevronCard.test.tsx'],
  },
  argTypes: {
    color: { options: ['red', 'blue', '#1c2942'], control: { type: 'radio' } },
    buttonColor: { options: ['red', 'blue', '#1c2942','white'], control: { type: 'radio' } },
    buttonHover: { options: ['red', 'blue', '#1c2942','white'], control: { type: 'radio' } },
    labelColor: { options: ['red', 'blue', '#1c2942','white'], control: { type: 'radio' } },
    label: { options: ['Sea', 'Forest', 'Mountain'], control: { type: 'radio' } },
    direction: { options: ['45deg', '-45deg'], control: { type: 'radio' } },
  },
} as Meta

const ChevronCardTemplate: StoryFn<ChevronCardPropsType> = args => (
  <StorybookContainer>
    <ChevronCard {...args} />
  </StorybookContainer>
)

export const ChevronCardComponent = ChevronCardTemplate.bind({})
ChevronCardComponent.args = {
  color: 'blue',
  direction: '45deg',
  label: 'Shoes for running in the moon',
  labelColor: 'red',
  buttonLabel: 'Buy Now',
  imgUrl: shoe,
  linkUrl: 'string',
  buttonColor: 'white',
  buttonHover: 'yellow',
}
