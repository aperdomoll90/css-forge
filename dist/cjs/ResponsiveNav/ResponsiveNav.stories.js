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
exports.ResponsiveNavComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ResponsiveNav_1 = require("./ResponsiveNav");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
var MenuProps_1 = require("../utils/MenuProps");
var StoryProps_1 = require("../utils/StoryProps");
exports.default = {
    title: 'Navigation Bars',
    component: ResponsiveNav_1.ResponsiveNav,
    parameters: {
        jest: ['ResponsiveNav.test.tsx'],
    },
    argTypes: {
        height: { options: StoryProps_1.pentaDecimals, control: { type: 'select' } },
        width: { options: StoryProps_1.pentaDecimals, control: { type: 'select' } },
        primaryColor: StoryProps_1.colorPickerControl,
        secondaryColor: StoryProps_1.colorPickerControl,
        labelColor: StoryProps_1.colorPickerControl,
        hoverColor: StoryProps_1.colorPickerControl,
        pressColor: StoryProps_1.colorPickerControl,
    },
};
var ResponsiveNavTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, __assign({ backgroundImage: true }, { children: (0, jsx_runtime_1.jsx)(ResponsiveNav_1.ResponsiveNav, __assign({}, args)) }))); };
exports.ResponsiveNavComponent = ResponsiveNavTemplate.bind({});
exports.ResponsiveNavComponent.args = {
    menuItemsArray: MenuProps_1.menuItemsArray,
};
//# sourceMappingURL=ResponsiveNav.stories.js.map