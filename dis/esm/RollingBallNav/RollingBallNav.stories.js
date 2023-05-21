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
import { RollingBallNav } from './RollingBallNav';
import StorybookContainer from '../StorybookContainer';
import { menuItemsArray } from '../utils/MenuProps';
export default {
    title: 'Navigation Bars',
    component: RollingBallNav,
    parameters: {
        jest: ['RollingBallNav.test.tsx'],
    },
};
var RollingBallNavTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx(RollingBallNav, __assign({}, args)) })); };
export var RollingBallNavComponent = RollingBallNavTemplate.bind({});
RollingBallNavComponent.args = {
    menuItemsArray: menuItemsArray,
};
//# sourceMappingURL=RollingBallNav.stories.js.map