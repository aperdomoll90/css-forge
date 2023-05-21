"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleCardComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var BubbleCard_1 = require("./BubbleCard");
var shoe_png_1 = __importDefault(require("../media/shoe.png"));
var dice_png_1 = __importDefault(require("../media/dice.png"));
var boat_png_1 = __importDefault(require("../media/boat.png"));
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
var StoryProps_1 = require("../utils/StoryProps");
exports.default = {
    title: 'Cards',
    component: BubbleCard_1.BubbleCard,
    parameters: {
        jest: ['BubbleCard.test.tsx'],
    },
    argTypes: {
        label: { options: ['Sea', 'Game', 'Shoe'], control: { type: 'select' } },
        demoUrl: { options: [null, 'https://ingots.web.app/fishing'], control: { type: 'select' } },
        codeUrl: { options: [null, 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll'], control: { type: 'select' } },
        width: { options: StoryProps_1.pentaDecimals, control: { type: 'select' } },
        height: { options: StoryProps_1.pentaDecimals, control: { type: 'select' } },
        primaryColor: StoryProps_1.colorPickerControl,
        secondaryColor: StoryProps_1.colorPickerControl,
        fontColor: StoryProps_1.colorPickerControl,
        imgWidth: { options: StoryProps_1.percental, control: { type: 'select' } },
        imgUrl: { options: [shoe_png_1.default, boat_png_1.default, dice_png_1.default], control: { type: 'select' } },
        imgX: { options: StoryProps_1.dozen, control: { type: 'select' } },
        imgY: { options: StoryProps_1.dozen, control: { type: 'select' } },
        hoverX: { options: StoryProps_1.negativeArray, control: { type: 'select' } },
        hoverY: { options: StoryProps_1.negativeArray, control: { type: 'select' } },
        hoverScale: { options: StoryProps_1.scaleValues, control: { type: 'select' } },
    },
};
var BubbleCardTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(BubbleCard_1.BubbleCard, __assign({}, args)) })); };
exports.BubbleCardComponent = BubbleCardTemplate.bind({});
exports.BubbleCardComponent.args = {
    label: 'Shoes',
    imgUrl: shoe_png_1.default,
    content: 'Dummy website using shoes as a theme',
    demoUrl: 'https://ingots.web.app/fishing',
    codeUrl: 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll',
};
//# sourceMappingURL=BubbleCard.stories.js.map