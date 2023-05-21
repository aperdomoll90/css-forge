"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextColorHoverComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var TextColorHover_1 = require("./TextColorHover");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Text Effects',
    component: TextColorHover_1.TextColorHover,
    parameters: {
        jest: ['TextColorHover.test.tsx'],
    },
};
var TextColorHoverTemplate = function () { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(TextColorHover_1.TextColorHover, { text: 'Color Text' }) })); };
exports.TextColorHoverComponent = TextColorHoverTemplate.bind({});
//# sourceMappingURL=TextColorHover.stories.js.map