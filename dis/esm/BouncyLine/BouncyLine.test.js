import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { BouncyLine } from './BouncyLine';
describe('BouncyLine component', function () {
    var renderComponent = function () { return render(_jsx(BouncyLine, {})); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=BouncyLine.test.js.map