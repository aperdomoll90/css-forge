"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BouncyLineComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var BouncyLine_1 = require("./BouncyLine");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'User Behavior Animation',
    component: BouncyLine_1.BouncyLine,
    parameters: {
        jest: ['BouncyLine.test.tsx'],
    },
};
var BouncyLineTemplate = function () { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(BouncyLine_1.BouncyLine, {}) })); };
exports.BouncyLineComponent = BouncyLineTemplate.bind({});
//# sourceMappingURL=BouncyLine.stories.js.map