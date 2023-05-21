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
import { CircularNav } from './CircularNav';
import StorybookContainer from '../StorybookContainer';
import { extendedMenuItemsArray } from '../utils/MenuProps';
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
};
var CircularNavTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx("div", __assign({ style: { position: 'absolute', top: '20%', left: 'calc(50% - 7.5rem)' } }, { children: _jsx(CircularNav, __assign({}, args)) })) })); };
export var CircularNavComponent = CircularNavTemplate.bind({});
CircularNavComponent.args = {
    menuItemsArray: extendedMenuItemsArray,
    color: 'rgb(28, 28, 28)',
    hoverColor: 'red',
    pressColor: 'yellow',
};
//# sourceMappingURL=CircularNav.stories.js.map