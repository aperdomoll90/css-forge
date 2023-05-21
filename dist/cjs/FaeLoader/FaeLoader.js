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
exports.FaeLoader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
require("../utils/GlobalStyles.css");
var FaeLoader = function (_a) {
    var size = _a.size;
    var faeCircleSize = {
        width: "".concat(size, "px"),
        height: "".concat(size, "px"),
    };
    var topCircle = {
        width: "".concat(size, "px"),
        height: "".concat(size, "px"),
        top: "-".concat(size && size / 2.5, "px"),
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'FaeLoaderContainer' }, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'faeCircle', style: faeCircleSize }), (0, jsx_runtime_1.jsx)("div", { className: 'faeCircle', style: faeCircleSize }), (0, jsx_runtime_1.jsx)("div", { className: 'faeCircle', style: topCircle }), (0, jsx_runtime_1.jsx)("p", { children: "loading..." })] })));
};
exports.FaeLoader = FaeLoader;
//# sourceMappingURL=FaeLoader.js.map