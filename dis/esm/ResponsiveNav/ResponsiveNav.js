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
import logo from '../media/Logo.png';
import { ToggleButton } from '../ToggleButton';
export var ResponsiveNav = function (_a) {
    var height = _a.height, width = _a.width, logoHeight = _a.logoHeight, logoMargin = _a.logoMargin, menuItemsArray = _a.menuItemsArray, primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor, hoverColor = _a.hoverColor, pressColor = _a.pressColor, labelColor = _a.labelColor;
    useEffect(function () {
        var primaryNav = document.querySelector('.primary-navigation');
        var navToggle = document.querySelector('.mobile-nav-toggle');
        navToggle === null || navToggle === void 0 ? void 0 : navToggle.addEventListener('click', function () {
            var visibility = primaryNav === null || primaryNav === void 0 ? void 0 : primaryNav.getAttribute('data-visible');
            if (visibility === 'false') {
                primaryNav === null || primaryNav === void 0 ? void 0 : primaryNav.setAttribute('data-visible', 'true');
                navToggle === null || navToggle === void 0 ? void 0 : navToggle.setAttribute('aria-expanded', 'true');
            }
            else if (visibility === 'true') {
                primaryNav === null || primaryNav === void 0 ? void 0 : primaryNav.setAttribute('data-visible', 'false');
                navToggle === null || navToggle === void 0 ? void 0 : navToggle.setAttribute('aria-expanded', 'false ');
            }
        });
    }, []);
    var stylesProps = {
        '--height': height ? "".concat(height, "rem") : '5.4rem',
        '--width': width ? "".concat(width, "rem") : '100%',
        '--logoHeight': logoHeight ? logoHeight : '3rem',
        '--logoMargin': logoMargin ? logoMargin : '1rem',
        '--primaryColor': primaryColor ? primaryColor : '#222327',
        '--secondaryColor': secondaryColor ? secondaryColor : '#29fd53',
        '--labelColor': labelColor ? labelColor : '#fff',
        '--hoverColor': hoverColor ? hoverColor : '#1c2942',
        '--pressColor': pressColor ? pressColor : '#1c2942',
    };
    return (_jsxs("header", __assign({ id: 'primary-header', className: 'primary-header flex-row', style: stylesProps }, { children: [_jsx("div", { children: _jsx("img", { src: logo, className: 'primary-logo' }) }), _jsx(ToggleButton, { customClass: 'mobile-nav-toggle', ariaControls: 'primary-navigation', ariaExpanded: false, setActive: function () { }, buttonBackgroundColor: 'transparent' }), _jsx("nav", { children: _jsx("ul", __assign({ id: 'primary-navigation', "data-visible": 'false', className: 'primary-navigation uppercase ff-sans-cond flex-row' }, { children: menuItemsArray &&
                        menuItemsArray.map(function (item, index) { return (_jsx("li", __assign({ className: 'responsiveNav-active' }, { children: _jsxs("a", __assign({ className: 'responsiveNav-link', href: item.link }, { children: [_jsxs("span", __assign({ "aria-hidden": 'true' }, { children: ["0", index] })), item.label] })) }))); }) })) })] })));
};
//# sourceMappingURL=ResponsiveNav.js.map