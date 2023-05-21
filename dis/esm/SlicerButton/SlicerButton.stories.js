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
import { SlicerButton } from './SlicerButton';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'Buttons',
    component: SlicerButton,
    parameters: {
        jest: ['SlicerButton.test.tsx'],
    },
    argTypes: {
        label: { options: ['Button', 'Contact me', 'Home'], control: { type: 'radio' } },
        fontSize: { options: ['1rem', '3rem', '5rem'], control: { type: 'radio' } },
        color: { options: ['#d93654', '#000', 'yellow', 'purple', ''], control: { type: 'radio' } },
        colorHover: { options: ['#d93654', '#000', 'yellow', 'purple', ''], control: { type: 'radio' } },
    },
};
var SlicerButtonTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx("div", __assign({ className: 'story-button-container-centered' }, { children: _jsx(SlicerButton, __assign({}, args)) })) })); };
export var SlicerButtonComponent = SlicerButtonTemplate.bind({});
SlicerButtonComponent.args = {
    label: 'Button',
    linkUrl: '#testAddress',
    color: 'red',
    fontSize: '2rem',
    colorHover: 'yellow',
};
//# sourceMappingURL=SlicerButton.stories.js.map