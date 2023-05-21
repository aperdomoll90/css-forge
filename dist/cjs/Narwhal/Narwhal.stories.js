"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NarwhalComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Narwhal_1 = require("./Narwhal");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Petting Zoo',
    component: Narwhal_1.Narwhal,
    parameters: {
        jest: ['Narwhal.test.tsx'],
    },
};
var NarwhalTemplate = function () { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(Narwhal_1.Narwhal, {}) })); };
exports.NarwhalComponent = NarwhalTemplate.bind({});
//# sourceMappingURL=Narwhal.stories.js.map