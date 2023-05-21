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
import { HalfNav } from './HalfNav';
import StorybookContainer from '../StorybookContainer';
import { menuItemsArray } from '../utils/MenuProps';
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
};
var HalfNavTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx("div", __assign({ className: 'story-button-container-centered' }, { children: _jsx(HalfNav, __assign({}, args)) })) })); };
export var HalfNavComponent = HalfNavTemplate.bind({});
HalfNavComponent.args = {
    menuItemsArray: menuItemsArray,
};
//# sourceMappingURL=HalfNav.stories.js.map