import { jsx as _jsx } from "react/jsx-runtime";
import { CosmicChart } from './CosmicChart';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'Cosmic Chart',
    component: CosmicChart,
    parameters: {
        jest: ['CosmicChart.test.tsx'],
    },
};
var CosmicChartTemplate = function () { return (_jsx(StorybookContainer, { children: _jsx(CosmicChart, {}) })); };
export var CosmicChartComponent = CosmicChartTemplate.bind({});
//# sourceMappingURL=CosmicChart.stories.js.map