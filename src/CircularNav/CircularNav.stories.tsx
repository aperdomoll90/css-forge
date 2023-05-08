import { Meta, StoryFn } from '@storybook/react'
import { CircularNav } from './CircularNav'
import { AtomIcon, BarIcon, CameraIcon, CodeIcon, GearIcon, HomeIcon, MapIcon, PawIcon, PlanetIcon, ProfileIcon } from '../IconCollection/IconCollection'
import StorybookContainer from '../StorybookContainer'
import { CircularNavPropsTypes, MenuItemsArrayPropsTypes } from './CircularNav.types'

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
    label: 'Map',
    icon: MapIcon,
    link: '#',
  },
  {
    label: 'Analytics',
    icon: BarIcon,
    link: '#',
  },
  {
    label: 'Animations',
    icon: CameraIcon,
    link: '#',
  },
  {
    label: 'Profile',
    icon: ProfileIcon,
    link: '#',
  },
  {
    label: 'Pets',
    icon: PawIcon,
    link: '#',
  },
  {
    label: 'Code',
    icon: CodeIcon,
    link: '#',
  },
]

const CircularNavTemplate: StoryFn<CircularNavPropsTypes> = args => (
  <StorybookContainer>
    <div style={{ position: 'absolute', top: '20%', left: 'calc(50% - 7.5rem)' }}>
      <CircularNav {...args} />
    </div>
  </StorybookContainer>
)

export const CircularNavComponent = CircularNavTemplate.bind({})
CircularNavComponent.args = {
  MenuItemsArray: MenuItemsArray,
  color: 'rgb(28, 28, 28)',
  hoverColor: 'red',
  pressColor: 'yellow',
}
