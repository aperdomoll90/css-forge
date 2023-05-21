import { jsx as _jsx } from "react/jsx-runtime";
import { TextColorHover } from './TextColorHover';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'Text Effects',
    component: TextColorHover,
    parameters: {
        jest: ['TextColorHover.test.tsx'],
    },
};
var TextColorHoverTemplate = function () { return (_jsx(StorybookContainer, { children: _jsx(TextColorHover, { text: 'Color Text' }) })); };
export var TextColorHoverComponent = TextColorHoverTemplate.bind({});
//# sourceMappingURL=TextColorHover.stories.js.map