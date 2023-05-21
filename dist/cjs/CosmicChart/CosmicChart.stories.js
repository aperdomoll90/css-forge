"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmicChartComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CosmicChart_1 = require("./CosmicChart");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Cosmic Chart',
    component: CosmicChart_1.CosmicChart,
    parameters: {
        jest: ['CosmicChart.test.tsx'],
    },
};
var CosmicChartTemplate = function () { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(CosmicChart_1.CosmicChart, {}) })); };
exports.CosmicChartComponent = CosmicChartTemplate.bind({});
//# sourceMappingURL=CosmicChart.stories.js.map