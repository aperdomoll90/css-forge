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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './styles.css';
import '../utils/GlobalStyles.css';
import page from './media/page.svg';
import { DownloadBanner } from './media/CvBanner';
import { LightenDarkenColor } from '../utils/ColorManipulation';
export var CvDownload = function (_a) {
    var color = _a.color, buttonHover = _a.buttonHover, labelColor = _a.labelColor, linkUrl = _a.linkUrl;
    return (_jsxs("div", __assign({ className: 'cv-download-wrapper', style: { '--color': color ? color : '#71bd55', '--underBanner': color ? LightenDarkenColor(color, -80) : LightenDarkenColor('#71bd55', -80), '--buttonHover': buttonHover ? buttonHover : 'green', '--labelColor': labelColor ? labelColor : 'white' } }, { children: [_jsx("img", { src: page, className: 'cv-download-page' }), DownloadBanner, _jsx("a", __assign({ href: linkUrl, target: '_blank', className: 'cv-download-arrow-circle' }, { children: _jsx("div", { className: 'cv-download-arrow' }) })), _jsx("p", __assign({ className: 'cv-download-label' }, { children: "DOWNLOAD" }))] })));
};
//# sourceMappingURL=CvDownload.js.map