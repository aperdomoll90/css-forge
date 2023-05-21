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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import { PerspectiveCard } from './PerspectiveCard';
import StorybookContainer from '../StorybookContainer';
import shoe from '../media/shoe.png';
import { blackNwhite, mintViolet, primaryColors } from '../utils/StoryProps';
export default {
    title: 'Cards',
    component: PerspectiveCard,
    parameters: {
        jest: ['PerspectiveCard.test.tsx'],
    },
    argTypes: {
        label: { options: ['Sea', 'Forest', 'Mountain'], control: { type: 'radio' } },
        demoUrl: { options: [null, 'https://ingots.web.app/fishing'], control: { type: 'radio' } },
        codeUrl: { options: [null, 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll'], control: { type: 'radio' } },
        width: { options: ['17', '10', '5'], control: { type: 'radio' } },
        height: { options: ['23', '17', '10'], control: { type: 'radio' } },
        primaryColor: { options: mintViolet, control: { type: 'radio' } },
        secondaryColor: { options: mintViolet, control: { type: 'radio' } },
        fontColor: { options: __spreadArray(__spreadArray([], primaryColors, true), blackNwhite, true), control: { type: 'radio' } },
        imgWidth: { options: ['70', '50', '20'], control: { type: 'radio' } },
    },
};
var PerspectiveCardTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx(PerspectiveCard, __assign({}, args)) })); };
export var PerspectiveCardComponent = PerspectiveCardTemplate.bind({});
PerspectiveCardComponent.args = {
    label: 'Shoes',
    imgUrl: shoe,
    content: 'Dummy website using shoes as a theme',
    demoUrl: 'https://ingots.web.app/fishing',
    codeUrl: 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll',
};
//# sourceMappingURL=PerspectiveCard.stories.js.map