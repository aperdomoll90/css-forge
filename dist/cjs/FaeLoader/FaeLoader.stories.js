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
exports.FaeLoaderComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var FaeLoader_1 = require("./FaeLoader");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Loaders',
    component: FaeLoader_1.FaeLoader,
    parameters: {
        jest: ['FaeLoader.test.tsx'],
    },
    argTypes: {
        size: { options: [90, 80, 50,], control: { type: 'radio' } },
    },
};
var FaeLoaderTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(FaeLoader_1.FaeLoader, __assign({}, args)) })); };
exports.FaeLoaderComponent = FaeLoaderTemplate.bind({});
exports.FaeLoaderComponent.args = {
    size: 80,
};
//# sourceMappingURL=FaeLoader.stories.js.map