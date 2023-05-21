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
exports.ChevronCardComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ChevronCard_1 = require("./ChevronCard");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
var shoe_png_1 = __importDefault(require("../media/shoe.png"));
exports.default = {
    title: 'Cards',
    component: ChevronCard_1.ChevronCard,
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
var ChevronCardTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(ChevronCard_1.ChevronCard, __assign({}, args)) })); };
exports.ChevronCardComponent = ChevronCardTemplate.bind({});
exports.ChevronCardComponent.args = {
    color: 'blue',
    direction: '45deg',
    label: 'Shoes for running in the moon',
    labelColor: 'red',
    buttonLabel: 'Buy Now',
    imgUrl: shoe_png_1.default,
    linkUrl: 'string',
    buttonColor: 'white',
    buttonHover: 'yellow',
};
//# sourceMappingURL=ChevronCard.stories.js.map