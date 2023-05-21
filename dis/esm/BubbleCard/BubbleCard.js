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
import { useEffect } from 'react';
import './styles.css';
import '../utils/GlobalStyles.css';
import { wobbleElement } from '../utils/MouseEvents';
import { LightenDarkenColor } from '../utils/ColorManipulation';
export var BubbleCard = function (_a) {
    var width = _a.width, height = _a.height, primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor, fontColor = _a.fontColor, label = _a.label, content = _a.content, imgUrl = _a.imgUrl, imgWidth = _a.imgWidth, imgX = _a.imgX, imgY = _a.imgY, hoverX = _a.hoverX, hoverY = _a.hoverY, hoverScale = _a.hoverScale, demoUrl = _a.demoUrl, codeUrl = _a.codeUrl;
    useEffect(function () {
        var elements = document.querySelectorAll('.wobble');
        document.addEventListener('mousemove', function (e) {
            wobbleElement(e, elements);
        });
    }, []);
    var stylesProps = {
        '--width': width ? "".concat(width, "rem") : '17rem',
        '--height': height ? "".concat(height, "rem") : '23rem',
        '--primaryColor': primaryColor ? primaryColor : '#1c2942',
        '--secondaryColor': secondaryColor ? secondaryColor : '#67df6e',
        '--fontColor': fontColor ? fontColor : '#fff',
        '--buttonActive': secondaryColor ? LightenDarkenColor(secondaryColor, -50) : LightenDarkenColor('#67df6e', -50),
        '--imgWidth': imgWidth ? "".concat(imgWidth, "%") : '70%',
        '--imgY': imgY ? "".concat(imgY, "rem") : '3.5rem',
        '--imgX': imgX ? "".concat(imgX, "rem") : '1.8rem',
        '--hoverX': hoverX ? "".concat(hoverX, "rem") : '-3rem',
        '--hoverY': hoverY ? "".concat(hoverY, "rem") : '-5rem',
        '--hoverScale': hoverScale ? hoverScale : 0.8,
    };
    return (_jsx("div", __assign({ className: 'bubbleCard-wrapper', style: stylesProps }, { children: _jsxs("div", __assign({ className: 'bubbleCard-content' }, { children: [_jsx("div", __assign({ className: 'bubbleCard-marquee ' }, { children: _jsx("div", __assign({ "data-speed": '-255', className: 'wobble' }, { children: label })) })), _jsx("div", __assign({ className: 'bubbleCard-img-container' }, { children: _jsx("img", { "data-speed": '-25', alt: "".concat(label, "-image"), src: imgUrl, className: 'bubbleCard-img wobble' }) })), _jsx("h1", __assign({ className: 'bubbleCard-title' }, { children: label })), _jsx("div", __assign({ className: 'bubbleCard-body' }, { children: _jsx("p", __assign({ className: 'bubbleCard-content-text' }, { children: content })) })), _jsxs("div", __assign({ className: 'bubbleCard-footer' }, { children: [demoUrl && (_jsx("a", __assign({ className: 'bubbleCard-link', target: '_blank', href: demoUrl }, { children: _jsx("button", __assign({ className: 'bubbleCard-btn bubbleCard-success' }, { children: "Demo" })) }))), codeUrl && (_jsx("a", __assign({ className: 'bubbleCard-link', target: '_blank', href: codeUrl }, { children: _jsx("button", __assign({ className: 'bubbleCard-btn bubbleCard-border' }, { children: "Github" })) })))] }))] })) })));
};
//# sourceMappingURL=BubbleCard.js.map