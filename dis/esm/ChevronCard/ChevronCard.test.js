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
import { ChevronCard } from './ChevronCard';
import shoe from '../media/shoe.png';
describe('ChevronCard component', function () {
    var props = {
        color: 'blue',
        direction: '45deg',
        label: 'label',
        labelColor: 'red',
        buttonLabel: 'Buy Now',
        imgUrl: shoe,
        linkUrl: 'string',
        buttonColor: 'white',
        buttonHover: 'yellow',
    };
    var renderComponent = function () { return render(_jsx(ChevronCard, __assign({}, props))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=ChevronCard.test.js.map