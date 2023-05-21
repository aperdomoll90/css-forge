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
exports.SkillBarComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SkillBar_1 = require("./SkillBar");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Skill Bars',
    component: SkillBar_1.SkillBar,
    parameters: {
        jest: ['SkillBar.test.tsx'],
    },
    argTypes: {
        level: { options: [90, 80, 50], control: { type: 'radio' } },
        label: { options: ['Css', 'javaScrip', 'Jest'], control: { type: 'radio' } },
    },
};
var SkillBarTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(SkillBar_1.SkillBar, __assign({}, args)) })); };
exports.SkillBarComponent = SkillBarTemplate.bind({});
exports.SkillBarComponent.args = {
    level: 80,
    label: 'Css'
};
//# sourceMappingURL=SkillBar.stories.js.map