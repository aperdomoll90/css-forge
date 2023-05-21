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
exports.CvDownloadComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CvDownload_1 = require("./CvDownload");
var StorybookContainer_1 = __importDefault(require("../StorybookContainer"));
exports.default = {
    title: 'Buttons',
    component: CvDownload_1.CvDownload,
    parameters: {
        jest: ['CvDownload.test.tsx'],
    },
    argTypes: {
        color: { options: ['', '#ff0000', 'rgb(0, 0, 255)', '#1c2942'], control: { type: 'radio' } },
        buttonHover: { options: ['', '#ff0000', 'rgb(0, 0, 255)', '#1c2942'], control: { type: 'radio' } },
        labelColor: { options: ['#fff', '#418440', '#1c2942'], control: { type: 'radio' } },
    },
};
var CvDownloadTemplate = function (args) { return ((0, jsx_runtime_1.jsx)(StorybookContainer_1.default, { children: (0, jsx_runtime_1.jsx)(CvDownload_1.CvDownload, __assign({}, args)) })); };
exports.CvDownloadComponent = CvDownloadTemplate.bind({});
exports.CvDownloadComponent.args = {
    linkUrl: 'test',
    color: '',
    buttonHover: '',
    labelColor: '',
};
//# sourceMappingURL=CvDownload.stories.js.map