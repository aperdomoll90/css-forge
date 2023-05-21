var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ResponsiveNav } from './ResponsiveNav';
import StorybookContainer from '../StorybookContainer';
import { menuItemsArray } from '../utils/MenuProps';
import { colorPickerControl, pentaDecimals } from '../utils/StoryProps';
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
};
var ResponsiveNavTemplate = function (args) { return (_jsx(StorybookContainer, __assign({ backgroundImage: true }, { children: _jsx(ResponsiveNav, __assign({}, args)) }))); };
export var ResponsiveNavComponent = ResponsiveNavTemplate.bind({});
ResponsiveNavComponent.args = {
    menuItemsArray: menuItemsArray,
};
//# sourceMappingURL=ResponsiveNav.stories.js.map