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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import './styles.css';
import '../utils/GlobalStyles.css';
import { AddIcon } from '../IconCollection/IconCollection';
export var CircularNav = function (_a) {
    var menuItemsArray = _a.menuItemsArray, color = _a.color, hoverColor = _a.hoverColor, pressColor = _a.pressColor;
    useEffect(function () {
        var toggle = document.querySelector('.circularNavToggle');
        var menu = document.querySelector('.circularNavMenu');
        toggle.onclick = function () {
            menu.classList.toggle('circularNavActive');
        };
    }, []);
    return (_jsx("div", __assign({ className: 'circularNavWrapper' }, { children: _jsxs("div", __assign({ className: 'circularNavMenu', style: { '--color': color, '--hoverColor': hoverColor, '--pressColor': pressColor } }, { children: [_jsx("div", __assign({ className: 'circularNavToggle' }, { children: _jsx("div", __assign({ className: 'circularNavToggle-icon' }, { children: AddIcon })) })), menuItemsArray &&
                    menuItemsArray.map(function (item, index) {
                        return (_jsx("li", __assign({ className: 'circularNavMenu-icon', style: { '--i': index } }, { children: _jsx("a", __assign({ href: item.link, className: 'circularNavMenu-icon' }, { children: _jsx(_Fragment, { children: item.icon }) })) })));
                    })] })) })));
};
//# sourceMappingURL=CircularNav.js.map