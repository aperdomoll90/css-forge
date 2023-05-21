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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./styles.css");
require("../utils/GlobalStyles.css");
var MouseEvents_1 = require("../utils/MouseEvents");
var ColorManipulation_1 = require("../utils/ColorManipulation");
var BubbleCard = function (_a) {
    var width = _a.width, height = _a.height, primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor, fontColor = _a.fontColor, label = _a.label, content = _a.content, imgUrl = _a.imgUrl, imgWidth = _a.imgWidth, imgX = _a.imgX, imgY = _a.imgY, hoverX = _a.hoverX, hoverY = _a.hoverY, hoverScale = _a.hoverScale, demoUrl = _a.demoUrl, codeUrl = _a.codeUrl;
    (0, react_1.useEffect)(function () {
        var elements = document.querySelectorAll('.wobble');
        document.addEventListener('mousemove', function (e) {
            (0, MouseEvents_1.wobbleElement)(e, elements);
        });
    }, []);
    var stylesProps = {
        '--width': width ? "".concat(width, "rem") : '17rem',
        '--height': height ? "".concat(height, "rem") : '23rem',
        '--primaryColor': primaryColor ? primaryColor : '#1c2942',
        '--secondaryColor': secondaryColor ? secondaryColor : '#67df6e',
        '--fontColor': fontColor ? fontColor : '#fff',
        '--buttonActive': secondaryColor ? (0, ColorManipulation_1.LightenDarkenColor)(secondaryColor, -50) : (0, ColorManipulation_1.LightenDarkenColor)('#67df6e', -50),
        '--imgWidth': imgWidth ? "".concat(imgWidth, "%") : '70%',
        '--imgY': imgY ? "".concat(imgY, "rem") : '3.5rem',
        '--imgX': imgX ? "".concat(imgX, "rem") : '1.8rem',
        '--hoverX': hoverX ? "".concat(hoverX, "rem") : '-3rem',
        '--hoverY': hoverY ? "".concat(hoverY, "rem") : '-5rem',
        '--hoverScale': hoverScale ? hoverScale : 0.8,
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'bubbleCard-wrapper', style: stylesProps }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'bubbleCard-content' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'bubbleCard-marquee ' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ "data-speed": '-255', className: 'wobble' }, { children: label })) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'bubbleCard-img-container' }, { children: (0, jsx_runtime_1.jsx)("img", { "data-speed": '-25', alt: "".concat(label, "-image"), src: imgUrl, className: 'bubbleCard-img wobble' }) })), (0, jsx_runtime_1.jsx)("h1", __assign({ className: 'bubbleCard-title' }, { children: label })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'bubbleCard-body' }, { children: (0, jsx_runtime_1.jsx)("p", __assign({ className: 'bubbleCard-content-text' }, { children: content })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'bubbleCard-footer' }, { children: [demoUrl && ((0, jsx_runtime_1.jsx)("a", __assign({ className: 'bubbleCard-link', target: '_blank', href: demoUrl }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: 'bubbleCard-btn bubbleCard-success' }, { children: "Demo" })) }))), codeUrl && ((0, jsx_runtime_1.jsx)("a", __assign({ className: 'bubbleCard-link', target: '_blank', href: codeUrl }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: 'bubbleCard-btn bubbleCard-border' }, { children: "Github" })) })))] }))] })) })));
};
exports.BubbleCard = BubbleCard;
//# sourceMappingURL=BubbleCard.js.map