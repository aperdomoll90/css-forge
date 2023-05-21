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
exports.ChevronCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
require("../utils/GlobalStyles.css");
var ChevronCard = function (_a) {
    var color = _a.color, buttonColor = _a.buttonColor, buttonHover = _a.buttonHover, buttonLabel = _a.buttonLabel, label = _a.label, labelColor = _a.labelColor, imgUrl = _a.imgUrl, linkUrl = _a.linkUrl, direction = _a.direction;
    var styleProps = { '--color': color, '--buttonColor': buttonColor, '--buttonHover': buttonHover, '--direction': direction, '--labelColor': labelColor };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'chevronCard', style: styleProps }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'box' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "chevronCard-label" }, { children: label })), (0, jsx_runtime_1.jsx)("img", { alt: 'profile of barber', src: imgUrl, className: 'chevronCardPicture' })] })), (0, jsx_runtime_1.jsx)("a", __assign({ target: '_blank', href: linkUrl }, { children: buttonLabel }))] })));
};
exports.ChevronCard = ChevronCard;
//# sourceMappingURL=ChevronCard.js.map