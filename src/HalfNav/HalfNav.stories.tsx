import { Meta, StoryFn } from '@storybook/react'
import { HalfNav } from './HalfNav'
import StorybookContainer from '../StorybookContainer'
import { HalfNavPropsType } from './HalfNav.types'
import { menuItemsArray } from '../utils/MenuProps'

export default {
  title: 'Navigation Bars',
  component: HalfNav,
  parameters: {
    jest: ['HalfNav.test.tsx'],
  },
  argTypes: {
    color: { options: ['', 'black', 'white', 'red', 'blue'], control: { type: 'radio' } },
    buttonHover: { options: ['', 'black', 'white', 'red', 'blue'], control: { type: 'radio' } },
    labelColor: { options: ['', 'black', 'white', 'red', 'blue'], control: { type: 'radio' } },
    labelColorHover: { options: ['', 'black', 'white', 'red', 'blue'], control: { type: 'radio' } },
    buttonBackgroundColor: { options: ['', 'black', 'white', 'red', 'blue'], control: { type: 'radio' } },
    menuBackgroundColor: { options: ['', 'black', 'white', 'red', 'blue'], control: { type: 'radio' } },
  },
} as Meta

const HalfNavTemplate: StoryFn<HalfNavPropsType> = args => (
  <StorybookContainer>
    <div className='story-button-container-centered'>
      <HalfNav {...args} />
    </div>
  </StorybookContainer>
)

export const HalfNavComponent = HalfNavTemplate.bind({})
HalfNavComponent.args = {
  menuItemsArray: menuItemsArray,
}
