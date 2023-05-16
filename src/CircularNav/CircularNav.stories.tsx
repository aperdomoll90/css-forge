import { Meta, StoryFn } from '@storybook/react'
import { CircularNav } from './CircularNav'
import StorybookContainer from '../StorybookContainer'
import { CircularNavPropsTypes } from './CircularNav.types'
import { extendedMenuItemsArray } from '../utils/MenuProps'

export default {
  title: 'Navigation Bars',
  component: CircularNav,
  parameters: {
    jest: ['CircularNav.test.tsx'],
  },
  argTypes: {
    color: { options: ['red', 'black', 'yellow', 'purple'], control: { type: 'radio' } },
    hoverColor: { options: ['red', 'black', 'yellow', 'purple'], control: { type: 'radio' } },
    pressColor: { options: ['red', 'black', 'yellow', 'purple'], control: { type: 'radio' } },
  },
} as Meta

const CircularNavTemplate: StoryFn<CircularNavPropsTypes> = args => (
  <StorybookContainer>
    <div style={{ position: 'absolute', top: '20%', left: 'calc(50% - 7.5rem)' }}>
      <CircularNav {...args} />
    </div>
  </StorybookContainer>
)

export const CircularNavComponent = CircularNavTemplate.bind({})
CircularNavComponent.args = {
  menuItemsArray: extendedMenuItemsArray,
  color: 'rgb(28, 28, 28)',
  hoverColor: 'red',
  pressColor: 'yellow',
}
