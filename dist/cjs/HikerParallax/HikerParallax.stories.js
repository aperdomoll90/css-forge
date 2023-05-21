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
exports.HikerParallaxComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var HikerParallax_1 = require("./HikerParallax");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Parallax',
    component: HikerParallax_1.HikerParallax,
    parameters: {
        jest: ['HikerParallax.test.tsx'],
    },
};
var HikerParallaxTemplate = function () { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ style: {
            position: 'relative',
            width: '100vw',
            minHeight: '200vh',
            overflow: 'scroll',
            background: 'yellow',
        } }, { children: [(0, jsx_runtime_1.jsx)(HikerParallax_1.HikerParallax, {}), (0, jsx_runtime_1.jsx)("div", { style: {
                    position: 'relative',
                    width: '100vw',
                    minHeight: '100vh',
                    background: 'red',
                } })] })) })); };
exports.HikerParallaxComponent = HikerParallaxTemplate.bind({});
//# sourceMappingURL=HikerParallax.stories.js.map