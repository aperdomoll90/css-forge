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
import { ToggleButton } from './ToggleButton';
import StorybookContainer from '../StorybookContainer';
import { colorPickerControl, dozen } from '../utils/StoryProps';
export default {
    title: 'Buttons',
    component: ToggleButton,
    parameters: {
        jest: ['ToggleButton.test.tsx'],
    },
    argTypes: {
        size: { options: dozen, control: { type: 'select' } },
        top: { options: dozen, control: { type: 'select' } },
        bottom: { options: dozen, control: { type: 'select' } },
        left: { options: dozen, control: { type: 'select' } },
        right: { options: dozen, control: { type: 'select' } },
        color: colorPickerControl,
        buttonHover: colorPickerControl,
        buttonBackgroundColor: colorPickerControl,
        shadow: { options: [true, false], control: { type: 'radio' } },
        ariaControls: { options: ['ariaControls', 'ariaControlsTest'], control: { type: 'radio' } },
        customClass: { options: ['customClass', 'customClassTest'], control: { type: 'radio' } },
    },
};
var ToggleButtonTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx("div", __assign({ className: 'story-button-container-centered' }, { children: _jsx(ToggleButton, __assign({}, args)) })) })); };
export var ToggleButtonComponent = ToggleButtonTemplate.bind({});
ToggleButtonComponent.args = {
    setActive: function () {
        return;
    },
};
//# sourceMappingURL=ToggleButton.stories.js.map