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
import narwhalBody from './images/narwhalBody.png';
import flipper from './images/flipper.png';
import fin from './images/fin.png';
export var Narwhal = function () {
    return (_jsxs("div", __assign({ className: 'narwhalArea' }, { children: [_jsx("div", __assign({ className: 'shade' }, { children: _jsx("p", { children: "Nora Narwhal" }) })), _jsxs("div", __assign({ className: 'fullNarwhal' }, { children: [_jsx("img", { src: flipper, className: 'flipperRight', alt: 'flipper' }), _jsx("img", { src: fin, className: 'fin', alt: 'fin' }), _jsx("img", { src: narwhalBody, className: 'narwhalBody', alt: 'Narwhal Body' }), _jsx("img", { src: flipper, className: 'flipper', alt: 'flipper' }), _jsxs("div", __assign({ className: 'blinkers' }, { children: [_jsx("div", { className: 'narwhalCircle' }), _jsx("div", { className: 'narwhalCircle' })] }))] })), _jsx("div", { className: 'narwhalShadow' })] })));
};
//# sourceMappingURL=Narwhal.js.map