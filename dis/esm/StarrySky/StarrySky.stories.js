import { jsx as _jsx } from "react/jsx-runtime";
import { StarrySky } from './StarrySky';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'Petting Zoo',
    component: StarrySky,
    parameters: {
        jest: ['StarrySky.test.tsx'],
    },
};
var StarrySkyTemplate = function () { return (_jsx(StorybookContainer, { children: _jsx(StarrySky, {}) })); };
export var StarrySkyComponent = StarrySkyTemplate.bind({});
//# sourceMappingURL=StarrySky.stories.js.map