"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendedMenuItemsArray = exports.menuItemsArray = void 0;
var IconCollection_1 = require("../IconCollection/IconCollection");
exports.menuItemsArray = [
    {
        label: 'Home',
        icon: IconCollection_1.HomeIcon,
        link: '#',
    },
    {
        label: 'Settings',
        icon: IconCollection_1.GearIcon,
        link: '#',
    },
    {
        label: 'Data',
        icon: IconCollection_1.BarIcon,
        link: '#',
    },
    {
        label: 'Profile',
        icon: IconCollection_1.ProfileIcon,
        link: '#',
    },
    {
        label: 'Code',
        icon: IconCollection_1.CodeIcon,
        link: '#',
    },
];
exports.extendedMenuItemsArray = __spreadArray(__spreadArray([], exports.menuItemsArray, true), [
    {
        label: 'Map',
        icon: IconCollection_1.MapIcon,
        link: '#',
    },
    {
        label: 'Animations',
        icon: IconCollection_1.CameraIcon,
        link: '#',
    },
    {
        label: 'Pets',
        icon: IconCollection_1.PawIcon,
        link: '#',
    },
], false);
//# sourceMappingURL=MenuProps.js.map