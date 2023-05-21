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
exports.SlicerButtonComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SlicerButton_1 = require("./SlicerButton");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Buttons',
    component: SlicerButton_1.SlicerButton,
    parameters: {
        jest: ['SlicerButton.test.tsx'],
    },
    argTypes: {
        label: { options: ['Button', 'Contact me', 'Home'], control: { type: 'radio' } },
        fontSize: { options: ['1rem', '3rem', '5rem'], control: { type: 'radio' } },
        color: { options: ['#d93654', '#000', 'yellow', 'purple', ''], control: { type: 'radio' } },
        colorHover: { options: ['#d93654', '#000', 'yellow', 'purple', ''], control: { type: 'radio' } },
    },
};
var SlicerButtonTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'story-button-container-centered' }, { children: (0, jsx_runtime_1.jsx)(SlicerButton_1.SlicerButton, __assign({}, args)) })) })); };
exports.SlicerButtonComponent = SlicerButtonTemplate.bind({});
exports.SlicerButtonComponent.args = {
    label: 'Button',
    linkUrl: '#testAddress',
    color: 'red',
    fontSize: '2rem',
    colorHover: 'yellow',
};
//# sourceMappingURL=SlicerButton.stories.js.map