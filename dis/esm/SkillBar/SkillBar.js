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
export var SkillBar = function (_a) {
    var level = _a.level, label = _a.label;
    var skillWidth = {
        maxWidth: "".concat(level, "%"),
    };
    return (_jsxs("div", __assign({ className: 'skill' }, { children: [_jsx("div", __assign({ className: 'skill-name' }, { children: label })), _jsx("div", __assign({ className: 'skill-bar' }, { children: _jsx("div", { className: 'skill-per', "data-per": "".concat(level, "%"), style: skillWidth }) }))] })));
};
//# sourceMappingURL=SkillBar.js.map