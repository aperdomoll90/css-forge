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
exports.PerspectiveCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var MouseEvents_1 = require("../utils/MouseEvents");
require("./styles.css");
require("../utils/GlobalStyles.css");
var ColorManipulation_1 = require("../utils/ColorManipulation");
var PerspectiveCard = function (_a) {
    var width = _a.width, height = _a.height, primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor, fontColor = _a.fontColor, label = _a.label, content = _a.content, imgUrl = _a.imgUrl, imgWidth = _a.imgWidth, demoUrl = _a.demoUrl, codeUrl = _a.codeUrl;
    (0, react_1.useEffect)(function () {
        var contentArea = document.querySelector('.perspectiveCard-content');
        document.addEventListener('mousemove', function (e) {
            (0, MouseEvents_1.rotateElement)(e, contentArea);
        });
    }, []);
    var stylesProps = {
        '--width': width ? "".concat(width, "rem") : '17rem',
        '--height': height ? "".concat(height, "rem") : '23rem',
        '--imgWidth': imgWidth ? "".concat(imgWidth, "%") : '70%',
        '--primaryColor': primaryColor ? primaryColor : '#1c2942',
        '--secondaryColor': secondaryColor ? secondaryColor : '#67df6e',
        '--fontColor': fontColor ? fontColor : '#fff',
        '--buttonActive': secondaryColor ? (0, ColorManipulation_1.LightenDarkenColor)(secondaryColor, -50) : (0, ColorManipulation_1.LightenDarkenColor)('#67df6e', -50),
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'perspectiveCard-wrapper', style: stylesProps }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'perspectiveCard-content' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'perspectiveCard-marquee' }, { children: label })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'perspectiveCard-img-container' }, { children: (0, jsx_runtime_1.jsx)("img", { alt: "".concat(label, "-image"), src: imgUrl, className: 'perspectiveCard-img' }) })), (0, jsx_runtime_1.jsx)("h1", __assign({ className: 'perspectiveCard-title' }, { children: label })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'perspectiveCard-body' }, { children: (0, jsx_runtime_1.jsx)("p", __assign({ className: 'perspectiveCard-content-text' }, { children: content })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'perspectiveCard-footer' }, { children: [demoUrl && ((0, jsx_runtime_1.jsx)("a", __assign({ className: 'perspectiveCard-link', target: '_blank', href: demoUrl }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: 'perspectiveCard-btn perspectiveCard-success' }, { children: "Demo" })) }))), codeUrl && ((0, jsx_runtime_1.jsx)("a", __assign({ className: 'perspectiveCard-link', target: '_blank', href: codeUrl }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: 'perspectiveCard-btn perspectiveCard-border' }, { children: "Github" })) })))] }))] })) })));
};
exports.PerspectiveCard = PerspectiveCard;
//# sourceMappingURL=PerspectiveCard.js.map