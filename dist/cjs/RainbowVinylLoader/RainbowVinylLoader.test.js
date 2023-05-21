"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var RainbowVinylLoader_1 = require("./RainbowVinylLoader");
describe('RainbowVinylLoader component', function () {
    // const { axe, toHaveNoViolations } = require('jest-axe')
    // expect.extend(toHaveNoViolations)
    var renderComponent = function () { return (0, react_1.render)((0, jsx_runtime_1.jsx)(RainbowVinylLoader_1.RainbowVinylLoader, {})); };
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
//# sourceMappingURL=RainbowVinylLoader.test.js.map