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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HikerParallax } from './HikerParallax';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'Parallax',
    component: HikerParallax,
    parameters: {
        jest: ['HikerParallax.test.tsx'],
    },
};
var HikerParallaxTemplate = function () { return (_jsx(StorybookContainer, { children: _jsxs("div", __assign({ style: {
            position: 'relative',
            width: '100vw',
            minHeight: '200vh',
            overflow: 'scroll',
            background: 'yellow',
        } }, { children: [_jsx(HikerParallax, {}), _jsx("div", { style: {
                    position: 'relative',
                    width: '100vw',
                    minHeight: '100vh',
                    background: 'red',
                } })] })) })); };
export var HikerParallaxComponent = HikerParallaxTemplate.bind({});
//# sourceMappingURL=HikerParallax.stories.js.map