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
import { BubbleCard } from './BubbleCard';
import shoe from '../media/shoe.png';
describe('BubbleCard component', function () {
    var props = {
        label: 'Shoes',
        imgUrl: shoe,
        content: 'Dummy website using shoes as a theme',
        demoUrl: 'https://ingots.web.app/fishing',
        codeUrl: 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll',
    };
    var renderComponent = function () { return render(_jsx(BubbleCard, __assign({}, props))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=BubbleCard.test.js.map