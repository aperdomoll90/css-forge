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
import { FaeLoader } from './FaeLoader';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'Loaders',
    component: FaeLoader,
    parameters: {
        jest: ['FaeLoader.test.tsx'],
    },
    argTypes: {
        size: { options: [90, 80, 50,], control: { type: 'radio' } },
    },
};
var FaeLoaderTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx(FaeLoader, __assign({}, args)) })); };
export var FaeLoaderComponent = FaeLoaderTemplate.bind({});
FaeLoaderComponent.args = {
    size: 80,
};
//# sourceMappingURL=FaeLoader.stories.js.map