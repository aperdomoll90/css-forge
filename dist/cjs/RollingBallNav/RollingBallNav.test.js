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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var RollingBallNav_1 = require("./RollingBallNav");
var MenuProps_1 = require("../utils/MenuProps");
describe('RollingBallNav component', function () {
    var props = {
        menuItemsArray: MenuProps_1.menuItemsArray,
        height: 3,
        width: 5,
        primaryColor: 'rgb(0, 0, 0)',
        secondaryColor: 'rgb(0, 0, 0)',
        hoverColor: 'rgb(0, 0, 0)',
        pressColor: 'rgb(0, 0, 0)',
        labelColor: 'rgb(0, 0, 0)',
    };
    var renderComponent = function () { return (0, react_1.render)((0, jsx_runtime_1.jsx)(RollingBallNav_1.RollingBallNav, __assign({}, props))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=RollingBallNav.test.js.map