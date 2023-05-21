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
exports.TextColorHover = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./styles.css");
require("../utils/GlobalStyles.css");
var TextColorHover = function (_a) {
    var text = _a.text;
    var _b = (0, react_1.useState)({ x: 0, y: 0 }), coords = _b[0], setCoords = _b[1];
    var ref = (0, react_1.useRef)();
    var x = coords.x, y = coords.y;
    var maskStyle = {
        '--maskX': x,
        '--maskY': y,
    };
    var handleMouseMov = function (e) {
        var width = ref.current.clientWidth;
        var height = ref.current.clientHeight;
        var offX = (e.nativeEvent.offsetX / width) * 100;
        var offY = (e.nativeEvent.offsetY / height) * 100;
        setCoords({
            x: offX,
            y: offY,
        });
    };
    var handleMouseOut = function (e) {
        setCoords({
            x: 0,
            y: 0,
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ id: 'mouseOverTextWrapper' }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'mouseOverTextContainer', onMouseMove: handleMouseMov, onMouseOut: handleMouseOut, style: maskStyle, ref: ref }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'mouseOverTextTitleWrapper' }, { children: (0, jsx_runtime_1.jsx)("h1", { children: text }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'mouseOverTextTitleWrapper mouseOverTexCloneWrapper' }, { children: (0, jsx_runtime_1.jsx)("h1", { children: text }) }))] })) })));
};
exports.TextColorHover = TextColorHover;
//# sourceMappingURL=TextColorHover.js.map