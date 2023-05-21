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
import { useEffect, useState } from 'react';
import './styles.css';
import '../utils/GlobalStyles.css';
import { LightenDarkenColor } from '../utils/ColorManipulation';
import { ToggleButton } from '../ToggleButton';
export var HalfNav = function (_a) {
    var menuItemsArray = _a.menuItemsArray, color = _a.color, buttonHover = _a.buttonHover, labelColor = _a.labelColor, labelColorHover = _a.labelColorHover, buttonBackgroundColor = _a.buttonBackgroundColor, menuBackgroundColor = _a.menuBackgroundColor;
    var _b = useState(false), showMenu = _b[0], setShowMenu = _b[1];
    useEffect(function () {
        console.log('showMenu', showMenu);
    }, [showMenu]);
    var defaultColor = '#fff';
    var defaultLabelColor = '#fff';
    var defaultLabelColorHover = '#7a7777';
    var defaultBackgroundColor = '#303030da';
    var stylesProps = {
        '--color': color ? color : defaultColor,
        '--buttonHover': buttonHover ? buttonHover : LightenDarkenColor(defaultBackgroundColor, -80),
        '--labelColor': labelColor ? labelColor : defaultLabelColor,
        '--labelColorHover': labelColorHover ? labelColorHover : defaultLabelColorHover,
        '--menuBackgroundColor': menuBackgroundColor ? menuBackgroundColor : defaultBackgroundColor,
        '--buttonBackgroundColor': buttonBackgroundColor ? buttonBackgroundColor : defaultBackgroundColor,
    };
    useEffect(function () {
        var menuDropDown = document.querySelector('.HalfNavDropDown');
        showMenu ? menuDropDown.classList.add('HalfNavDropDownActive') : menuDropDown.classList.remove('HalfNavDropDownActive');
    }, [showMenu]);
    return (_jsxs("div", __assign({ className: 'HalfNavWrapper', style: stylesProps }, { children: [_jsx(ToggleButton, { setActive: setShowMenu, color: color, buttonHover: buttonHover, buttonBackgroundColor: buttonBackgroundColor }), _jsx("div", __assign({ className: 'HalfNavDropDown' }, { children: menuItemsArray &&
                    menuItemsArray.map(function (item, index) {
                        return (_jsx("div", __assign({ className: 'HalfNavDropDown-menu-bullet' }, { children: _jsx("p", { children: item.label }) })));
                    }) }))] })));
};
//# sourceMappingURL=HalfNav.js.map