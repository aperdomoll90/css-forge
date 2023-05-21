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
exports.RollingBallNav = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./styles.css");
require("../utils/GlobalStyles.css");
var RollingBallNav = function (_a) {
    var height = _a.height, width = _a.width, menuItemsArray = _a.menuItemsArray, primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor, hoverColor = _a.hoverColor, pressColor = _a.pressColor, labelColor = _a.labelColor;
    (0, react_1.useEffect)(function () {
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
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'rollingBallNavWrapper', style: stylesProps }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rollingBallNav' }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [menuItemsArray &&
                        menuItemsArray.map(function (item) {
                            console.log('item', item);
                            return ((0, jsx_runtime_1.jsx)("li", __assign({ className: 'rollingBallNavList' }, { children: (0, jsx_runtime_1.jsxs)("a", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'rollingBallNavIcon' }, { children: [" ", (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: item.icon })] })), (0, jsx_runtime_1.jsx)("span", __assign({ className: 'rollingBallNavText' }, { children: item.label }))] }) })));
                        }), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rollingBallNavIndicator' }, { children: " " }))] }) })) })));
};
exports.RollingBallNav = RollingBallNav;
//# sourceMappingURL=RollingBallNav.js.map