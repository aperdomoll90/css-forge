"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarrySkyComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var StarrySky_1 = require("./StarrySky");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Petting Zoo',
    component: StarrySky_1.StarrySky,
    parameters: {
        jest: ['StarrySky.test.tsx'],
    },
};
var StarrySkyTemplate = function () { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(StarrySky_1.StarrySky, {}) })); };
exports.StarrySkyComponent = StarrySkyTemplate.bind({});
//# sourceMappingURL=StarrySky.stories.js.map