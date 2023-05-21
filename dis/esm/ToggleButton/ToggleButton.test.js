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
import { ToggleButton } from './ToggleButton';
describe('ToggleButton component', function () {
    var props = {
        color: '#fff',
        buttonHover: 'red',
        buttonBackgroundColor: 'black',
        setActive: function () {
            alert('Button clicked');
        },
    };
    var renderComponent = function () { return render(_jsx(ToggleButton, __assign({}, props))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=ToggleButton.test.js.map