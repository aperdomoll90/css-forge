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
exports.SlicerButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
require("../utils/GlobalStyles.css");
var SlicerButton = function (_a) {
    var label = _a.label, linkUrl = _a.linkUrl, color = _a.color, fontSize = _a.fontSize, colorHover = _a.colorHover;
    var defaultColor = '#d93654';
    var defaultColorHover = '#f2f2f2';
    return ((0, jsx_runtime_1.jsx)("a", __assign({ href: linkUrl }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'slicerButton-wrapper', style: { '--fontSize': fontSize ? fontSize : '1rem', '--color': color ? color : defaultColor, '--colorHover': colorHover ? colorHover : defaultColorHover, } }, { children: (0, jsx_runtime_1.jsxs)("h2", { children: [label, (0, jsx_runtime_1.jsxs)("span", { children: [" ", label] }), (0, jsx_runtime_1.jsxs)("span", { children: [" ", label] })] }) })) })));
};
exports.SlicerButton = SlicerButton;
//# sourceMappingURL=SlicerButton.js.map