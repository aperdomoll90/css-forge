"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RainbowVinylLoaderComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var RainbowVinylLoader_1 = require("./RainbowVinylLoader");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Loaders',
    component: RainbowVinylLoader_1.RainbowVinylLoader,
    parameters: {
        jest: ['RainbowVinylLoader.test.tsx'],
    },
};
var RainbowVinylLoaderTemplate = function () { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(RainbowVinylLoader_1.RainbowVinylLoader, {}) })); };
exports.RainbowVinylLoaderComponent = RainbowVinylLoaderTemplate.bind({});
//# sourceMappingURL=RainbowVinylLoader.stories.js.map