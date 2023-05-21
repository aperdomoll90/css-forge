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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var BubbleCard_1 = require("./BubbleCard");
var shoe_png_1 = __importDefault(require("../media/shoe.png"));
describe('BubbleCard component', function () {
    var props = {
        label: 'Shoes',
        imgUrl: shoe_png_1.default,
        content: 'Dummy website using shoes as a theme',
        demoUrl: 'https://ingots.web.app/fishing',
        codeUrl: 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll',
    };
    var renderComponent = function () { return (0, react_1.render)((0, jsx_runtime_1.jsx)(BubbleCard_1.BubbleCard, __assign({}, props))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=BubbleCard.test.js.map