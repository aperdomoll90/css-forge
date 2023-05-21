"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmicChart = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
require("../utils/GlobalStyles.css");
var planetCard_1 = __importDefault(require("./planetCard"));
var CosmicChart = function () {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'navigationChart' }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'planet rougePlanetSystem' }, { children: [(0, jsx_runtime_1.jsx)(planetCard_1.default, { size: '--planetSize' }), (0, jsx_runtime_1.jsx)("div", { className: 'planetOrbit  dashedChart' })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'outerOrbit dashedChart' }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'planet' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'planetRotation' }, { children: (0, jsx_runtime_1.jsx)(planetCard_1.default, { size: '--planetSize' }) })), (0, jsx_runtime_1.jsx)("div", { className: 'planetOrbit dashedChart' })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'innerOrbit dashedChart' }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: 'planet' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'innerOrbitPlanetRotation' }, { children: (0, jsx_runtime_1.jsx)(planetCard_1.default, { size: '--planetSize' }) })), (0, jsx_runtime_1.jsx)("div", { className: 'planetOrbit planetOrbitSecondary dashedChart' })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'sun' }, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ className: 'outerHalo', viewBox: '0 0 128 130', preserveAspectRatio: 'xMidYMax meet' }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M43.5 12.5C38.5 14.5 35 5.99996 29 8.99998C23 12 28.4348 18.7782 24.5 23.5C20.5652 28.2217 13.25 21.4999 10.5 27C7.00002 33.9999 12.6 36 11.5 41.5C10.6 46 0.500009 45.5 0.500017 52C0.500029 60.9999 7.00002 58.5 7.00002 64.5C7.00002 69 -0.653759 69.0001 0.500017 76.5C1.96149 86 8.07153 79.4999 11.5 87.5C13.5 92.1667 7.11535 95 10.5 100.5C13.8846 106 19.5799 100.652 23 104.5C27.4444 109.5 20 113.385 26 118C31.2 122 36 114.464 41.5 118C46.1666 121 42 126.5 49.5 128C56 129.3 56.5 122 63 122C68.5 122 68 129.4 75 128C81 126.8 78.5278 120.736 83 118.5C88 116 92 123.3 97.5 120C103 116.7 98 110.5 102.5 106.5C107 102.5 112.1 109 116 102.5C119.9 96 111.5 93 114 88.5C117.77 81.7147 124.545 87.5 126 79.4999C127.454 71.4999 119 71.8523 119 66C119 59.9999 126 60.9999 126 54.9999C126 47.9999 117.176 48.2347 116 44.9999C113.273 37.5 121 36.5 117.5 30C114 23.5 109.5 31 104 25.5C98.5 20 105.5 14.8635 99.5 10.4999C94 6.49995 90 14.5455 85.5 12.5C80 9.99993 84.5 3.20002 76 1.5C67.5 -0.200022 69.5 7.9166 64.5 7.49994C59.5 7.08327 59.5 -1.68181 51.5 0.499979C43.5 2.68177 48.5 10.5 43.5 12.5Z', stroke: 'black', "stroke-width": '0.1' }) })), (0, jsx_runtime_1.jsx)("svg", __assign({ className: 'middleHalo', viewBox: '0 0 128 130', preserveAspectRatio: 'xMidYMax meet' }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M43.5 12.5C38.5 14.5 35 5.99996 29 8.99998C23 12 28.4348 18.7782 24.5 23.5C20.5652 28.2217 13.25 21.4999 10.5 27C7.00002 33.9999 12.6 36 11.5 41.5C10.6 46 0.500009 45.5 0.500017 52C0.500029 60.9999 7.00002 58.5 7.00002 64.5C7.00002 69 -0.653759 69.0001 0.500017 76.5C1.96149 86 8.07153 79.4999 11.5 87.5C13.5 92.1667 7.11535 95 10.5 100.5C13.8846 106 19.5799 100.652 23 104.5C27.4444 109.5 20 113.385 26 118C31.2 122 36 114.464 41.5 118C46.1666 121 42 126.5 49.5 128C56 129.3 56.5 122 63 122C68.5 122 68 129.4 75 128C81 126.8 78.5278 120.736 83 118.5C88 116 92 123.3 97.5 120C103 116.7 98 110.5 102.5 106.5C107 102.5 112.1 109 116 102.5C119.9 96 111.5 93 114 88.5C117.77 81.7147 124.545 87.5 126 79.4999C127.454 71.4999 119 71.8523 119 66C119 59.9999 126 60.9999 126 54.9999C126 47.9999 117.176 48.2347 116 44.9999C113.273 37.5 121 36.5 117.5 30C114 23.5 109.5 31 104 25.5C98.5 20 105.5 14.8635 99.5 10.4999C94 6.49995 90 14.5455 85.5 12.5C80 9.99993 84.5 3.20002 76 1.5C67.5 -0.200022 69.5 7.9166 64.5 7.49994C59.5 7.08327 59.5 -1.68181 51.5 0.499979C43.5 2.68177 48.5 10.5 43.5 12.5Z', stroke: 'black', "stroke-width": '0.1' }) })), (0, jsx_runtime_1.jsx)("div", { className: 'sunCore' })] }))] }))] }))] })));
};
exports.CosmicChart = CosmicChart;
//# sourceMappingURL=CosmicChart.js.map