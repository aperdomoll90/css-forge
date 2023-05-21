"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var CosmicChart_1 = require("./CosmicChart");
describe('CosmicChart component', function () {
    var renderComponent = function () { return (0, react_1.render)((0, jsx_runtime_1.jsx)(CosmicChart_1.CosmicChart, {})); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=CosmicChart.test.js.map