import { Meta, StoryFn } from '@storybook/react'
import { ResponsiveNav } from './ResponsiveNav'
import StorybookContainer from '../StorybookContainer'
import { ResponsiveNavPropsTypes } from './ResponsiveNav.type'
import { menuItemsArray } from '../utils/MenuProps'
import { colorPickerControl, pentaDecimals } from '../utils/StoryProps'
import logo from '../media/Logo.png'

export default {
  title: 'Navigation Bars',
  component: ResponsiveNav,
  parameters: {
    jest: ['ResponsiveNav.test.tsx'],
  },
  argTypes: {
    height: { options: pentaDecimals, control: { type: 'select' } },
    width: { options: pentaDecimals, control: { type: 'select' } },
    primaryColor: colorPickerControl,
    secondaryColor: colorPickerControl,
    labelColor: colorPickerControl,
    hoverColor: colorPickerControl,
    pressColor: colorPickerControl,
  },
} as Meta

const ResponsiveNavTemplate: StoryFn<ResponsiveNavPropsTypes> = (args) => (
  <StorybookContainer backgroundImage>
    <ResponsiveNav {...args} />
  </StorybookContainer>
)

export const ResponsiveNavComponent = ResponsiveNavTemplate.bind({})
ResponsiveNavComponent.args = {
  logo:logo,
  menuItemsArray: menuItemsArray,
}