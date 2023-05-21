"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularNavComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CircularNav_1 = require("./CircularNav");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
var MenuProps_1 = require("../utils/MenuProps");
exports.default = {
    title: 'Navigation Bars',
    component: CircularNav_1.CircularNav,
    parameters: {
        jest: ['CircularNav.test.tsx'],
    },
    argTypes: {
        color: { options: ['red', 'black', 'yellow', 'purple'], control: { type: 'radio' } },
        hoverColor: { options: ['red', 'black', 'yellow', 'purple'], control: { type: 'radio' } },
        pressColor: { options: ['red', 'black', 'yellow', 'purple'], control: { type: 'radio' } },
    },
};
var CircularNavTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: { position: 'absolute', top: '20%', left: 'calc(50% - 7.5rem)' } }, { children: (0, jsx_runtime_1.jsx)(CircularNav_1.CircularNav, __assign({}, args)) })) })); };
exports.CircularNavComponent = CircularNavTemplate.bind({});
exports.CircularNavComponent.args = {
    menuItemsArray: MenuProps_1.extendedMenuItemsArray,
    color: 'rgb(28, 28, 28)',
    hoverColor: 'red',
    pressColor: 'yellow',
};
//# sourceMappingURL=CircularNav.stories.js.map