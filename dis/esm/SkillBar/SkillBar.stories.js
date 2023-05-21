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
import { jsx as _jsx } from "react/jsx-runtime";
import { SkillBar } from './SkillBar';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'Skill Bars',
    component: SkillBar,
    parameters: {
        jest: ['SkillBar.test.tsx'],
    },
    argTypes: {
        level: { options: [90, 80, 50], control: { type: 'radio' } },
        label: { options: ['Css', 'javaScrip', 'Jest'], control: { type: 'radio' } },
    },
};
var SkillBarTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx(SkillBar, __assign({}, args)) })); };
export var SkillBarComponent = SkillBarTemplate.bind({});
SkillBarComponent.args = {
    level: 80,
    label: 'Css'
};
//# sourceMappingURL=SkillBar.stories.js.map