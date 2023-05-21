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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './styles.css';
import '../utils/GlobalStyles.css';
export var ChevronCard = function (_a) {
    var color = _a.color, buttonColor = _a.buttonColor, buttonHover = _a.buttonHover, buttonLabel = _a.buttonLabel, label = _a.label, labelColor = _a.labelColor, imgUrl = _a.imgUrl, linkUrl = _a.linkUrl, direction = _a.direction;
    var styleProps = { '--color': color, '--buttonColor': buttonColor, '--buttonHover': buttonHover, '--direction': direction, '--labelColor': labelColor };
    return (_jsxs("div", __assign({ className: 'chevronCard', style: styleProps }, { children: [_jsxs("div", __assign({ className: 'box' }, { children: [_jsx("div", __assign({ className: "chevronCard-label" }, { children: label })), _jsx("img", { alt: 'profile of barber', src: imgUrl, className: 'chevronCardPicture' })] })), _jsx("a", __assign({ target: '_blank', href: linkUrl }, { children: buttonLabel }))] })));
};
//# sourceMappingURL=ChevronCard.js.map