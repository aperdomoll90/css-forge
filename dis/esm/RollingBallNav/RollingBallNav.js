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
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import './styles.css';
import '../utils/GlobalStyles.css';
export var RollingBallNav = function (_a) {
    var height = _a.height, width = _a.width, menuItemsArray = _a.menuItemsArray, primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor, hoverColor = _a.hoverColor, pressColor = _a.pressColor, labelColor = _a.labelColor;
    useEffect(function () {
        var list = document.querySelectorAll('.rollingBallNavList');
        list.forEach(function (activeItem) {
            activeItem.addEventListener('click', function () {
                list.forEach(function (listItem) { return listItem.classList.remove('rollingBallNavActive'); });
                activeItem.classList.add('rollingBallNavActive');
            });
        });
    }, []);
    var stylesProps = {
        '--width': width ? "".concat(width, "rem") : '26rem',
        '--height': height ? "".concat(height, "rem") : '5.4rem',
        '--primaryColor': primaryColor ? primaryColor : '#222327',
        '--secondaryColor': secondaryColor ? secondaryColor : '#29fd53',
        '--labelColor': labelColor ? labelColor : '#222327',
        '--hoverColor': hoverColor ? hoverColor : '#1c2942',
        '--pressColor': pressColor ? pressColor : '#1c2942',
    };
    return (_jsx("div", __assign({ className: 'rollingBallNavWrapper', style: stylesProps }, { children: _jsx("div", __assign({ className: 'rollingBallNav' }, { children: _jsxs("ul", { children: [menuItemsArray &&
                        menuItemsArray.map(function (item) {
                            console.log('item', item);
                            return (_jsx("li", __assign({ className: 'rollingBallNavList' }, { children: _jsxs("a", { children: [_jsxs("div", __assign({ className: 'rollingBallNavIcon' }, { children: [" ", _jsx(_Fragment, { children: item.icon })] })), _jsx("span", __assign({ className: 'rollingBallNavText' }, { children: item.label }))] }) })));
                        }), _jsx("div", __assign({ className: 'rollingBallNavIndicator' }, { children: " " }))] }) })) })));
};
//# sourceMappingURL=RollingBallNav.js.map