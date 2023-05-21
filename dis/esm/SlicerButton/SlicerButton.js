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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import './styles.css';
import '../utils/GlobalStyles.css';
export var SlicerButton = function (_a) {
    var label = _a.label, linkUrl = _a.linkUrl, color = _a.color, fontSize = _a.fontSize, colorHover = _a.colorHover;
    var defaultColor = '#d93654';
    var defaultColorHover = '#f2f2f2';
    return (_jsx("a", __assign({ href: linkUrl }, { children: _jsx("div", __assign({ className: 'slicerButton-wrapper', style: { '--fontSize': fontSize ? fontSize : '1rem', '--color': color ? color : defaultColor, '--colorHover': colorHover ? colorHover : defaultColorHover, } }, { children: _jsxs("h2", { children: [label, _jsxs("span", { children: [" ", label] }), _jsxs("span", { children: [" ", label] })] }) })) })));
};
//# sourceMappingURL=SlicerButton.js.map