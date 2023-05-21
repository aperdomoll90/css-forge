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
import { PerspectiveCard } from './PerspectiveCard';
import shoe from '../media/shoe.png';
describe('PerspectiveCard component', function () {
    // const { axe, toHaveNoViolations } = require('jest-axe')
    // expect.extend(toHaveNoViolations)
    var props = {
        label: 'Shoes',
        imgUrl: shoe,
        content: 'Dummy website using shoes as a theme',
        demoUrl: 'https://ingots.web.app/fishing',
        codeUrl: 'https://github.com/aperdomoll90/ingots/tree/main/src/Archives/SvgPathOnScroll',
    };
    var renderComponent = function () { return render(_jsx(PerspectiveCard, __assign({}, props))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
    //   it('should demonstrate ADA compliance on this component', async () => {
    //     const { container } = renderComponent()
    //     const results = await axe(container)
    //     expect(container).toHaveNoViolations()
    //   })
});
//# sourceMappingURL=PerspectiveCard.test.js.map