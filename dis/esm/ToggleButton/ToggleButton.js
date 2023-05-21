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
import { useEffect } from 'react';
import './styles.css';
import '../utils/GlobalStyles.css';
import { LightenDarkenColor } from '../utils/ColorManipulation';
export var ToggleButton = function (_a) {
    var size = _a.size, color = _a.color, buttonHover = _a.buttonHover, buttonBackgroundColor = _a.buttonBackgroundColor, shadow = _a.shadow, setActive = _a.setActive, ariaControls = _a.ariaControls, ariaExpanded = _a.ariaExpanded, top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right, customClass = _a.customClass;
    var defaultColor = '#fff';
    var defaultBackgroundColor = '#303030da';
    var stylesProps = {
        '--size': size ? "".concat(size, "rem") : '2rem',
        '--color': color ? color : defaultColor,
        '--buttonHover': buttonHover ? buttonHover : LightenDarkenColor(buttonBackgroundColor || defaultBackgroundColor, -80),
        '--buttonBackgroundColor': buttonBackgroundColor ? buttonBackgroundColor : defaultBackgroundColor,
        '--shadow': shadow ? 'rgba(0, 0, 0, 0.8)' : '',
        '--top': top ? "".concat(top, "rem") : '1rem',
        '--bottom': bottom ? "".concat(bottom, "rem") : 'auto',
        '--left': left ? "".concat(left, "rem") : 'auto',
        '--right': right ? "".concat(right, "rem") : '1rem',
    };
    var toggleMenu = function () { return setActive(function (value) { return !value; }); };
    useEffect(function () {
        var menuToggle = document.querySelector('.ToggleButton');
        if (menuToggle) {
            menuToggle.onclick = function () {
                menuToggle.classList.toggle('ToggleButtonActive');
                toggleMenu();
            };
        }
    }, []);
    var classArray = customClass && customClass ? "ToggleButton ".concat(customClass) : 'ToggleButton';
    return (_jsxs("button", __assign({ className: classArray, "aria-controls": ariaControls, "aria-expanded": ariaExpanded, style: stylesProps }, { children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {}), _jsx("span", __assign({ className: 'sr-only' }, { children: "menu" }))] })));
};
//# sourceMappingURL=ToggleButton.js.map