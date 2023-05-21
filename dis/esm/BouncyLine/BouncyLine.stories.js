import { jsx as _jsx } from "react/jsx-runtime";
import { BouncyLine } from './BouncyLine';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'User Behavior Animation',
    component: BouncyLine,
    parameters: {
        jest: ['BouncyLine.test.tsx'],
    },
};
var BouncyLineTemplate = function () { return (_jsx(StorybookContainer, { children: _jsx(BouncyLine, {}) })); };
export var BouncyLineComponent = BouncyLineTemplate.bind({});
//# sourceMappingURL=BouncyLine.stories.js.map