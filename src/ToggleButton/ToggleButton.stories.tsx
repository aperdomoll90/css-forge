import { Meta, StoryFn } from '@storybook/react'
import { ToggleButton } from './ToggleButton'
import StorybookContainer from '../StorybookContainer'
import { ToggleButtonPropsType } from './ToggleButton.types'
import { MenuItemsArrayPropsTypes } from '../utils/GlobalTypes.types'
import { BarIcon, CameraIcon, CodeIcon, GearIcon, HomeIcon, MapIcon, PawIcon, PlanetIcon, ProfileIcon } from '../IconCollection/IconCollection'

export default {
  title: 'Buttons',
  component: ToggleButton,
  parameters: {
    jest: ['ToggleButton.test.tsx'],
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

const MenuItemsArray: MenuItemsArrayPropsTypes[] = [
  {
    label: 'Home',
    icon: HomeIcon,
    link: '#',
  },
  {
    label: 'Settings',
    icon: GearIcon,
    link: '#',
  },
  {
    label: 'Analytics',
    icon: BarIcon,
    link: '#',
  },
  {
    label: 'Profile',
    icon: ProfileIcon,
    link: '#',
  },
  {
    label: 'Code',
    icon: CodeIcon,
    link: '#',
  },
]

const ToggleButtonTemplate: StoryFn<ToggleButtonPropsType> = args => (
  <StorybookContainer>
    <ToggleButton {...args} />
  </StorybookContainer>
)

export const ToggleButtonComponent = ToggleButtonTemplate.bind({})
ToggleButtonComponent.args = {
  MenuItemsArray: MenuItemsArray,
}
