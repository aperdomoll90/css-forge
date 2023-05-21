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
exports.SkillBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
require("../utils/GlobalStyles.css");
var SkillBar = function (_a) {
    var level = _a.level, label = _a.label;
    var skillWidth = {
        maxWidth: "".concat(level, "%"),
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'skill' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'skill-name' }, { children: label })), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'skill-bar' }, { children: (0, jsx_runtime_1.jsx)("div", { className: 'skill-per', "data-per": "".concat(level, "%"), style: skillWidth }) }))] })));
};
exports.SkillBar = SkillBar;
//# sourceMappingURL=SkillBar.js.map