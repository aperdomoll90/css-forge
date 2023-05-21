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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerspectiveCardComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var PerspectiveCard_1 = require("./PerspectiveCard");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
var shoe_png_1 = __importDefault(require("../media/shoe.png"));
var StoryProps_1 = require("../utils/StoryProps");
exports.default = {
    title: 'Cards',
    component: PerspectiveCard_1.PerspectiveCard,
    parameters: {
        jest: ['PerspectiveCard.test.tsx'],
    },
    argTypes: {
        label: { options: ['Sea', 'Forest', 'Mountain'], control: { type: 'radio' } },
        demoUrl: { options: [null, 'https://ingots.web.app/fishing'], control: { type: 'radio' } },
        codeUrl: { options: [null, 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll'], control: { type: 'radio' } },
        width: { options: ['17', '10', '5'], control: { type: 'radio' } },
        height: { options: ['23', '17', '10'], control: { type: 'radio' } },
        primaryColor: { options: StoryProps_1.mintViolet, control: { type: 'radio' } },
        secondaryColor: { options: StoryProps_1.mintViolet, control: { type: 'radio' } },
        fontColor: { options: __spreadArray(__spreadArray([], StoryProps_1.primaryColors, true), StoryProps_1.blackNwhite, true), control: { type: 'radio' } },
        imgWidth: { options: ['70', '50', '20'], control: { type: 'radio' } },
    },
};
var PerspectiveCardTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(PerspectiveCard_1.PerspectiveCard, __assign({}, args)) })); };
exports.PerspectiveCardComponent = PerspectiveCardTemplate.bind({});
exports.PerspectiveCardComponent.args = {
    label: 'Shoes',
    imgUrl: shoe_png_1.default,
    content: 'Dummy website using shoes as a theme',
    demoUrl: 'https://ingots.web.app/fishing',
    codeUrl: 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll',
};
//# sourceMappingURL=PerspectiveCard.stories.js.map