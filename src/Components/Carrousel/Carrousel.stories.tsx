import { Meta, StoryFn } from '@storybook/react'
import Carrousel from './Carrousel'
import StorybookContainer from '../StorybookContainer'

export default {
  title: 'Carrousel',
  component: Carrousel,
  parameters: {
    jest: ['Carrousel.test.tsx'],
  },
} as Meta

const cardInfo = [{ text: 'Frist card' }, { text: 'card' }, { text: 'card' }, { text: 'card' }, { text: 'card' }, { text: 'card' }, { text: 'card' }, { text: 'Last card' }]


const CarrouselTemplate: StoryFn = (args) => (
  <StorybookContainer>
   <Carrousel {...args}>
      <div>First card</div>
      <div>card</div>
      <div>card</div>
      <div>card</div>
      <div>card</div>
      <div>card</div>
      <div>Last card</div>
    </Carrousel>
  </StorybookContainer>
)

export const CarrouselComponent = CarrouselTemplate.bind({})
CarrouselComponent.args = {
    id: 'carrousel-wrapper',
    testId: 'carrousel-wrapper-testId',
    wrapperClass: 'carrousel-wrapper-className',
    cardsContainerClass: 'card-container-className',
    cardsClass: 'carrousel-card-className',
    //   cardContainerWidth: '100%',
    height: '70%',
    width: '95vw',
    pagination: false,
    navigation: true,
    orientation: { default: 'column', md: 'row', lg: 'row' },
    color: 'blue',
    cardsPerView: { default: 2, md: 2, lg: 2 },
    cardsArray: cardInfo, //in leu off children TO BE DELETED
  }
