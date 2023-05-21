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
import { ChevronCard } from './ChevronCard';
import StorybookContainer from '../StorybookContainer';
import shoe from '../media/shoe.png';
export default {
    title: 'Cards',
    component: ChevronCard,
    parameters: {
        jest: ['ChevronCard.test.tsx'],
    },
    argTypes: {
        color: { options: ['red', 'blue', '#1c2942'], control: { type: 'radio' } },
        buttonColor: { options: ['red', 'blue', '#1c2942', 'white'], control: { type: 'radio' } },
        buttonHover: { options: ['red', 'blue', '#1c2942', 'white'], control: { type: 'radio' } },
        labelColor: { options: ['red', 'blue', '#1c2942', 'white'], control: { type: 'radio' } },
        label: { options: ['Sea', 'Forest', 'Mountain'], control: { type: 'radio' } },
        direction: { options: ['45deg', '-45deg'], control: { type: 'radio' } },
    },
};
var ChevronCardTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx(ChevronCard, __assign({}, args)) })); };
export var ChevronCardComponent = ChevronCardTemplate.bind({});
ChevronCardComponent.args = {
    color: 'blue',
    direction: '45deg',
    label: 'Shoes for running in the moon',
    labelColor: 'red',
    buttonLabel: 'Buy Now',
    imgUrl: shoe,
    linkUrl: 'string',
    buttonColor: 'white',
    buttonHover: 'yellow',
};
//# sourceMappingURL=ChevronCard.stories.js.map