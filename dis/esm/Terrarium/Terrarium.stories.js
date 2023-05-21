import { jsx as _jsx } from "react/jsx-runtime";
import { Terrarium } from './Terrarium';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'Petting Zoo',
    component: Terrarium,
    parameters: {
        jest: ['Terrarium.test.tsx'],
    },
};
var TerrariumTemplate = function () { return (_jsx(StorybookContainer, { children: _jsx(Terrarium, {}) })); };
export var TerrariumComponent = TerrariumTemplate.bind({});
//# sourceMappingURL=Terrarium.stories.js.map