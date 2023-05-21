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
var CircularNav_1 = require("./CircularNav");
var MenuProps_1 = require("../utils/MenuProps");
describe('CircularNav component', function () {
    var props = {
        menuItemsArray: MenuProps_1.menuItemsArray,
    };
    var renderComponent = function () { return (0, react_1.render)((0, jsx_runtime_1.jsx)(CircularNav_1.CircularNav, __assign({}, props))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=CircularNav.test.js.map