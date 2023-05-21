"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerrariumComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Terrarium_1 = require("./Terrarium");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Petting Zoo',
    component: Terrarium_1.Terrarium,
    parameters: {
        jest: ['Terrarium.test.tsx'],
    },
};
var TerrariumTemplate = function () { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(Terrarium_1.Terrarium, {}) })); };
exports.TerrariumComponent = TerrariumTemplate.bind({});
//# sourceMappingURL=Terrarium.stories.js.map