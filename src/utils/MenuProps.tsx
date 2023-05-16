import { menuItemsArrayPropsTypes } from './GlobalTypes.types'
import { BarIcon, CameraIcon, CodeIcon, GearIcon, HomeIcon, MapIcon, PawIcon, PlanetIcon, ProfileIcon } from '../IconCollection/IconCollection'
export const menuItemsArray: menuItemsArrayPropsTypes[] = [
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
    label: 'Data',
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

export const extendedMenuItemsArray: menuItemsArrayPropsTypes[] = [
    ...menuItemsArray,
    {
      label: 'Map',
      icon: MapIcon,
      link: '#',
    },
    {
      label: 'Animations',
      icon: CameraIcon,
      link: '#',
    },
    {
      label: 'Pets',
      icon: PawIcon,
      link: '#',
    },
  ]