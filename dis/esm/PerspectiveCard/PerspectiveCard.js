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
import { rotateElement } from '../utils/MouseEvents';
import './styles.css';
import '../utils/GlobalStyles.css';
import { LightenDarkenColor } from '../utils/ColorManipulation';
export var PerspectiveCard = function (_a) {
    var width = _a.width, height = _a.height, primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor, fontColor = _a.fontColor, label = _a.label, content = _a.content, imgUrl = _a.imgUrl, imgWidth = _a.imgWidth, demoUrl = _a.demoUrl, codeUrl = _a.codeUrl;
    useEffect(function () {
        var contentArea = document.querySelector('.perspectiveCard-content');
        document.addEventListener('mousemove', function (e) {
            rotateElement(e, contentArea);
        });
    }, []);
    var stylesProps = {
        '--width': width ? "".concat(width, "rem") : '17rem',
        '--height': height ? "".concat(height, "rem") : '23rem',
        '--imgWidth': imgWidth ? "".concat(imgWidth, "%") : '70%',
        '--primaryColor': primaryColor ? primaryColor : '#1c2942',
        '--secondaryColor': secondaryColor ? secondaryColor : '#67df6e',
        '--fontColor': fontColor ? fontColor : '#fff',
        '--buttonActive': secondaryColor ? LightenDarkenColor(secondaryColor, -50) : LightenDarkenColor('#67df6e', -50),
    };
    return (_jsx("div", __assign({ className: 'perspectiveCard-wrapper', style: stylesProps }, { children: _jsxs("div", __assign({ className: 'perspectiveCard-content' }, { children: [_jsx("div", __assign({ className: 'perspectiveCard-marquee' }, { children: label })), _jsx("div", __assign({ className: 'perspectiveCard-img-container' }, { children: _jsx("img", { alt: "".concat(label, "-image"), src: imgUrl, className: 'perspectiveCard-img' }) })), _jsx("h1", __assign({ className: 'perspectiveCard-title' }, { children: label })), _jsx("div", __assign({ className: 'perspectiveCard-body' }, { children: _jsx("p", __assign({ className: 'perspectiveCard-content-text' }, { children: content })) })), _jsxs("div", __assign({ className: 'perspectiveCard-footer' }, { children: [demoUrl && (_jsx("a", __assign({ className: 'perspectiveCard-link', target: '_blank', href: demoUrl }, { children: _jsx("button", __assign({ className: 'perspectiveCard-btn perspectiveCard-success' }, { children: "Demo" })) }))), codeUrl && (_jsx("a", __assign({ className: 'perspectiveCard-link', target: '_blank', href: codeUrl }, { children: _jsx("button", __assign({ className: 'perspectiveCard-btn perspectiveCard-border' }, { children: "Github" })) })))] }))] })) })));
};
//# sourceMappingURL=PerspectiveCard.js.map