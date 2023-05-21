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
exports.HalfNavComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var HalfNav_1 = require("./HalfNav");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
var MenuProps_1 = require("../utils/MenuProps");
exports.default = {
    title: 'Navigation Bars',
    component: HalfNav_1.HalfNav,
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
var HalfNavTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'story-button-container-centered' }, { children: (0, jsx_runtime_1.jsx)(HalfNav_1.HalfNav, __assign({}, args)) })) })); };
exports.HalfNavComponent = HalfNavTemplate.bind({});
exports.HalfNavComponent.args = {
    menuItemsArray: MenuProps_1.menuItemsArray,
};
//# sourceMappingURL=HalfNav.stories.js.map