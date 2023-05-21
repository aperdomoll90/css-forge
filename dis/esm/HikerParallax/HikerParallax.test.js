import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { HikerParallax } from './HikerParallax';
describe('HikerParallax component', function () {
    var renderComponent = function () { return render(_jsx(HikerParallax, {})); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=HikerParallax.test.js.map