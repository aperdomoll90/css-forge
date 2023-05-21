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
import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { ResponsiveNav } from './ResponsiveNav';
import { menuItemsArray } from '../utils/MenuProps';
describe('ResponsiveNav component', function () {
    var props = {
        menuItemsArray: menuItemsArray,
        height: 3,
        width: 5,
        primaryColor: 'rgb(0, 0, 0)',
        secondaryColor: 'rgb(0, 0, 0)',
        hoverColor: 'rgb(0, 0, 0)',
        pressColor: 'rgb(0, 0, 0)',
        labelColor: 'rgb(0, 0, 0)',
    };
    var renderComponent = function () { return render(_jsx(ResponsiveNav, __assign({}, props))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=ResponsiveNav.test.js.map