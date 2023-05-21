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
exports.ToggleButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./styles.css");
require("../utils/GlobalStyles.css");
var ColorManipulation_1 = require("../utils/ColorManipulation");
var ToggleButton = function (_a) {
    var size = _a.size, color = _a.color, buttonHover = _a.buttonHover, buttonBackgroundColor = _a.buttonBackgroundColor, shadow = _a.shadow, setActive = _a.setActive, ariaControls = _a.ariaControls, ariaExpanded = _a.ariaExpanded, top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right, customClass = _a.customClass;
    var defaultColor = '#fff';
    var defaultBackgroundColor = '#303030da';
    var stylesProps = {
        '--size': size ? "".concat(size, "rem") : '2rem',
        '--color': color ? color : defaultColor,
        '--buttonHover': buttonHover ? buttonHover : (0, ColorManipulation_1.LightenDarkenColor)(buttonBackgroundColor || defaultBackgroundColor, -80),
        '--buttonBackgroundColor': buttonBackgroundColor ? buttonBackgroundColor : defaultBackgroundColor,
        '--shadow': shadow ? 'rgba(0, 0, 0, 0.8)' : '',
        '--top': top ? "".concat(top, "rem") : '1rem',
        '--bottom': bottom ? "".concat(bottom, "rem") : 'auto',
        '--left': left ? "".concat(left, "rem") : 'auto',
        '--right': right ? "".concat(right, "rem") : '1rem',
    };
    var toggleMenu = function () { return setActive(function (value) { return !value; }); };
    (0, react_1.useEffect)(function () {
        var menuToggle = document.querySelector('.ToggleButton');
        if (menuToggle) {
            menuToggle.onclick = function () {
                menuToggle.classList.toggle('ToggleButtonActive');
                toggleMenu();
            };
        }
    }, []);
    var classArray = customClass && customClass ? "ToggleButton ".concat(customClass) : 'ToggleButton';
    return ((0, jsx_runtime_1.jsxs)("button", __assign({ className: classArray, "aria-controls": ariaControls, "aria-expanded": ariaExpanded, style: stylesProps }, { children: [(0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", __assign({ className: 'sr-only' }, { children: "menu" }))] })));
};
exports.ToggleButton = ToggleButton;
//# sourceMappingURL=ToggleButton.js.map