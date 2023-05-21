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
exports.CircularNav = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./styles.css");
require("../utils/GlobalStyles.css");
var IconCollection_1 = require("../IconCollection/IconCollection");
var CircularNav = function (_a) {
    var menuItemsArray = _a.menuItemsArray, color = _a.color, hoverColor = _a.hoverColor, pressColor = _a.pressColor;
    (0, react_1.useEffect)(function () {
        var toggle = document.querySelector('.circularNavToggle');
        var menu = document.querySelector('.circularNavMenu');
        toggle.onclick = function () {
            menu.classList.toggle('circularNavActive');
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'circularNavWrapper' }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'circularNavMenu', style: { '--color': color, '--hoverColor': hoverColor, '--pressColor': pressColor } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'circularNavToggle' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'circularNavToggle-icon' }, { children: IconCollection_1.AddIcon })) })), menuItemsArray &&
                    menuItemsArray.map(function (item, index) {
                        return ((0, jsx_runtime_1.jsx)("li", __assign({ className: 'circularNavMenu-icon', style: { '--i': index } }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: item.link, className: 'circularNavMenu-icon' }, { children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: item.icon }) })) })));
                    })] })) })));
};
exports.CircularNav = CircularNav;
//# sourceMappingURL=CircularNav.js.map