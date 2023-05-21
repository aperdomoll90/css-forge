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
import { BubbleCard } from './BubbleCard';
import shoe from '../media/shoe.png';
import dice from '../media/dice.png';
import boat from '../media/boat.png';
import StorybookContainer from '../StorybookContainer';
import { colorPickerControl, percental, pentaDecimals, dozen, negativeArray, scaleValues } from '../utils/StoryProps';
export default {
    title: 'Cards',
    component: BubbleCard,
    parameters: {
        jest: ['BubbleCard.test.tsx'],
    },
    argTypes: {
        label: { options: ['Sea', 'Game', 'Shoe'], control: { type: 'select' } },
        demoUrl: { options: [null, 'https://ingots.web.app/fishing'], control: { type: 'select' } },
        codeUrl: { options: [null, 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll'], control: { type: 'select' } },
        width: { options: pentaDecimals, control: { type: 'select' } },
        height: { options: pentaDecimals, control: { type: 'select' } },
        primaryColor: colorPickerControl,
        secondaryColor: colorPickerControl,
        fontColor: colorPickerControl,
        imgWidth: { options: percental, control: { type: 'select' } },
        imgUrl: { options: [shoe, boat, dice], control: { type: 'select' } },
        imgX: { options: dozen, control: { type: 'select' } },
        imgY: { options: dozen, control: { type: 'select' } },
        hoverX: { options: negativeArray, control: { type: 'select' } },
        hoverY: { options: negativeArray, control: { type: 'select' } },
        hoverScale: { options: scaleValues, control: { type: 'select' } },
    },
};
var BubbleCardTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx(BubbleCard, __assign({}, args)) })); };
export var BubbleCardComponent = BubbleCardTemplate.bind({});
BubbleCardComponent.args = {
    label: 'Shoes',
    imgUrl: shoe,
    content: 'Dummy website using shoes as a theme',
    demoUrl: 'https://ingots.web.app/fishing',
    codeUrl: 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll',
};
//# sourceMappingURL=BubbleCard.stories.js.map