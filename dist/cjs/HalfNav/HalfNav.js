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
exports.HalfNav = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./styles.css");
require("../utils/GlobalStyles.css");
var ColorManipulation_1 = require("../utils/ColorManipulation");
var ToggleButton_1 = require("../ToggleButton");
var HalfNav = function (_a) {
    var menuItemsArray = _a.menuItemsArray, color = _a.color, buttonHover = _a.buttonHover, labelColor = _a.labelColor, labelColorHover = _a.labelColorHover, buttonBackgroundColor = _a.buttonBackgroundColor, menuBackgroundColor = _a.menuBackgroundColor;
    var _b = (0, react_1.useState)(false), showMenu = _b[0], setShowMenu = _b[1];
    (0, react_1.useEffect)(function () {
        console.log('showMenu', showMenu);
    }, [showMenu]);
    var defaultColor = '#fff';
    var defaultLabelColor = '#fff';
    var defaultLabelColorHover = '#7a7777';
    var defaultBackgroundColor = '#303030da';
    var stylesProps = {
        '--color': color ? color : defaultColor,
        '--buttonHover': buttonHover ? buttonHover : (0, ColorManipulation_1.LightenDarkenColor)(defaultBackgroundColor, -80),
        '--labelColor': labelColor ? labelColor : defaultLabelColor,
        '--labelColorHover': labelColorHover ? labelColorHover : defaultLabelColorHover,
        '--menuBackgroundColor': menuBackgroundColor ? menuBackgroundColor : defaultBackgroundColor,
        '--buttonBackgroundColor': buttonBackgroundColor ? buttonBackgroundColor : defaultBackgroundColor,
    };
    (0, react_1.useEffect)(function () {
        var menuDropDown = document.querySelector('.HalfNavDropDown');
        showMenu ? menuDropDown.classList.add('HalfNavDropDownActive') : menuDropDown.classList.remove('HalfNavDropDownActive');
    }, [showMenu]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'HalfNavWrapper', style: stylesProps }, { children: [(0, jsx_runtime_1.jsx)(ToggleButton_1.ToggleButton, { setActive: setShowMenu, color: color, buttonHover: buttonHover, buttonBackgroundColor: buttonBackgroundColor }), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'HalfNavDropDown' }, { children: menuItemsArray &&
                    menuItemsArray.map(function (item, index) {
                        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'HalfNavDropDown-menu-bullet' }, { children: (0, jsx_runtime_1.jsx)("p", { children: item.label }) })));
                    }) }))] })));
};
exports.HalfNav = HalfNav;
//# sourceMappingURL=HalfNav.js.map