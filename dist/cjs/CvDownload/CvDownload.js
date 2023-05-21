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
exports.CvDownload = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
require("../utils/GlobalStyles.css");
var page_svg_1 = __importDefault(require("./media/page.svg"));
var CvBanner_1 = require("./media/CvBanner");
var ColorManipulation_1 = require("../utils/ColorManipulation");
var CvDownload = function (_a) {
    var color = _a.color, buttonHover = _a.buttonHover, labelColor = _a.labelColor, linkUrl = _a.linkUrl;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'cv-download-wrapper', style: { '--color': color ? color : '#71bd55', '--underBanner': color ? (0, ColorManipulation_1.LightenDarkenColor)(color, -80) : (0, ColorManipulation_1.LightenDarkenColor)('#71bd55', -80), '--buttonHover': buttonHover ? buttonHover : 'green', '--labelColor': labelColor ? labelColor : 'white' } }, { children: [(0, jsx_runtime_1.jsx)("img", { src: page_svg_1.default, className: 'cv-download-page' }), CvBanner_1.DownloadBanner, (0, jsx_runtime_1.jsx)("a", __assign({ href: linkUrl, target: '_blank', className: 'cv-download-arrow-circle' }, { children: (0, jsx_runtime_1.jsx)("div", { className: 'cv-download-arrow' }) })), (0, jsx_runtime_1.jsx)("p", __assign({ className: 'cv-download-label' }, { children: "DOWNLOAD" }))] })));
};
exports.CvDownload = CvDownload;
//# sourceMappingURL=CvDownload.js.map