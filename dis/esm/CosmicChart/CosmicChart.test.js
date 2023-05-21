import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { CosmicChart } from './CosmicChart';
describe('CosmicChart component', function () {
    var renderComponent = function () { return render(_jsx(CosmicChart, {})); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=CosmicChart.test.js.map