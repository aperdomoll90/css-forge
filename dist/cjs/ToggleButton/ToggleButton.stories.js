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
exports.ToggleButtonComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ToggleButton_1 = require("./ToggleButton");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
var StoryProps_1 = require("../utils/StoryProps");
exports.default = {
    title: 'Buttons',
    component: ToggleButton_1.ToggleButton,
    parameters: {
        jest: ['ToggleButton.test.tsx'],
    },
    argTypes: {
        size: { options: StoryProps_1.dozen, control: { type: 'select' } },
        top: { options: StoryProps_1.dozen, control: { type: 'select' } },
        bottom: { options: StoryProps_1.dozen, control: { type: 'select' } },
        left: { options: StoryProps_1.dozen, control: { type: 'select' } },
        right: { options: StoryProps_1.dozen, control: { type: 'select' } },
        color: StoryProps_1.colorPickerControl,
        buttonHover: StoryProps_1.colorPickerControl,
        buttonBackgroundColor: StoryProps_1.colorPickerControl,
        shadow: { options: [true, false], control: { type: 'radio' } },
        ariaControls: { options: ['ariaControls', 'ariaControlsTest'], control: { type: 'radio' } },
        customClass: { options: ['customClass', 'customClassTest'], control: { type: 'radio' } },
    },
};
var ToggleButtonTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'story-button-container-centered' }, { children: (0, jsx_runtime_1.jsx)(ToggleButton_1.ToggleButton, __assign({}, args)) })) })); };
exports.ToggleButtonComponent = ToggleButtonTemplate.bind({});
exports.ToggleButtonComponent.args = {
    setActive: function () {
        return;
    },
};
//# sourceMappingURL=ToggleButton.stories.js.map