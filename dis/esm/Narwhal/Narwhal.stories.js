import { jsx as _jsx } from "react/jsx-runtime";
import { Narwhal } from './Narwhal';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'Petting Zoo',
    component: Narwhal,
    parameters: {
        jest: ['Narwhal.test.tsx'],
    },
};
var NarwhalTemplate = function () { return (_jsx(StorybookContainer, { children: _jsx(Narwhal, {}) })); };
export var NarwhalComponent = NarwhalTemplate.bind({});
//# sourceMappingURL=Narwhal.stories.js.map