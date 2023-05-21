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
var SlicerButton_1 = require("./SlicerButton");
describe('SlicerButton component', function () {
    var props = {
        label: 'Button',
        linkUrl: '#testAddress',
        color: 'red',
        fontSize: '2rem',
        colorHover: 'yellow',
    };
    var renderComponent = function () { return (0, react_1.render)((0, jsx_runtime_1.jsx)(SlicerButton_1.SlicerButton, __assign({}, props))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=SlicerButton.test.js.map