var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { BarIcon, CameraIcon, CodeIcon, GearIcon, HomeIcon, MapIcon, PawIcon, ProfileIcon } from '../IconCollection/IconCollection';
export var menuItemsArray = [
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
];
export var extendedMenuItemsArray = __spreadArray(__spreadArray([], menuItemsArray, true), [
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
], false);
//# sourceMappingURL=MenuProps.js.map