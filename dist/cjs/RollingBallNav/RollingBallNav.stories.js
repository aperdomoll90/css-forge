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
exports.RollingBallNavComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var RollingBallNav_1 = require("./RollingBallNav");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
var MenuProps_1 = require("../utils/MenuProps");
exports.default = {
    title: 'Navigation Bars',
    component: RollingBallNav_1.RollingBallNav,
    parameters: {
        jest: ['RollingBallNav.test.tsx'],
    },
};
var RollingBallNavTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(RollingBallNav_1.RollingBallNav, __assign({}, args)) })); };
exports.RollingBallNavComponent = RollingBallNavTemplate.bind({});
exports.RollingBallNavComponent.args = {
    menuItemsArray: MenuProps_1.menuItemsArray,
};
//# sourceMappingURL=RollingBallNav.stories.js.map