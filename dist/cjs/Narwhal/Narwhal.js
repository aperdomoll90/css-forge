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
exports.Narwhal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
require("../utils/GlobalStyles.css");
var narwhalBody_png_1 = __importDefault(require("./images/narwhalBody.png"));
var flipper_png_1 = __importDefault(require("./images/flipper.png"));
var fin_png_1 = __importDefault(require("./images/fin.png"));
var Narwhal = function () {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'narwhalArea' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'shade' }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Nora Narwhal" }) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'fullNarwhal' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: flipper_png_1.default, className: 'flipperRight', alt: 'flipper' }), (0, jsx_runtime_1.jsx)("img", { src: fin_png_1.default, className: 'fin', alt: 'fin' }), (0, jsx_runtime_1.jsx)("img", { src: narwhalBody_png_1.default, className: 'narwhalBody', alt: 'Narwhal Body' }), (0, jsx_runtime_1.jsx)("img", { src: flipper_png_1.default, className: 'flipper', alt: 'flipper' }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'blinkers' }, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'narwhalCircle' }), (0, jsx_runtime_1.jsx)("div", { className: 'narwhalCircle' })] }))] })), (0, jsx_runtime_1.jsx)("div", { className: 'narwhalShadow' })] })));
};
exports.Narwhal = Narwhal;
//# sourceMappingURL=Narwhal.js.map