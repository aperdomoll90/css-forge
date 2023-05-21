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
import { render } from '@testing-library/react';
import { CvDownload } from './CvDownload';
describe('CvDownload component', function () {
    var prop = {
        linkUrl: 'test',
        color: '#fff',
        buttonHover: 'red',
        labelColor: 'green',
    };
    var renderComponent = function () { return render(_jsx(CvDownload, __assign({}, prop))); };
    it('should match snapshots', function () {
        var container = renderComponent().container;
        expect(container).toMatchSnapshot();
    });
});
//# sourceMappingURL=CvDownload.test.js.map