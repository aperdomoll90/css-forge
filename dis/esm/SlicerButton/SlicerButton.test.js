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
import { SlicerButton } from './SlicerButton';
describe('SlicerButton component', function () {
    var props = {
        label: 'Button',
        linkUrl: '#testAddress',
        color: 'red',
        fontSize: '2rem',
        colorHover: 'yellow',
    };
    var renderComponent = function () { return render(_jsx(SlicerButton, __assign({}, props))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=SlicerButton.test.js.map