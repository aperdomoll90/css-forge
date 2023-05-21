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
import { jsx as _jsx } from "react/jsx-runtime";
import { CvDownload } from './CvDownload';
import StorybookContainer from '../StorybookContainer';
export default {
    title: 'Buttons',
    component: CvDownload,
    parameters: {
        jest: ['CvDownload.test.tsx'],
    },
    argTypes: {
        color: { options: ['', '#ff0000', 'rgb(0, 0, 255)', '#1c2942'], control: { type: 'radio' } },
        buttonHover: { options: ['', '#ff0000', 'rgb(0, 0, 255)', '#1c2942'], control: { type: 'radio' } },
        labelColor: { options: ['#fff', '#418440', '#1c2942'], control: { type: 'radio' } },
    },
};
var CvDownloadTemplate = function (args) { return (_jsx(StorybookContainer, { children: _jsx(CvDownload, __assign({}, args)) })); };
export var CvDownloadComponent = CvDownloadTemplate.bind({});
CvDownloadComponent.args = {
    linkUrl: 'test',
    color: '',
    buttonHover: '',
    labelColor: '',
};
//# sourceMappingURL=CvDownload.stories.js.map