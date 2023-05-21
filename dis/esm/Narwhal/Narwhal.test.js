import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { Narwhal } from './Narwhal';
describe('Narwhal component', function () {
    // const { axe, toHaveNoViolations } = require('jest-axe')
    // expect.extend(toHaveNoViolations)
    var renderComponent = function () { return render(_jsx(Narwhal, {})); };
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
//# sourceMappingURL=Narwhal.test.js.map