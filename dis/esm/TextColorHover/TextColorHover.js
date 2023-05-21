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
import { useRef, useState } from 'react';
import './styles.css';
import '../utils/GlobalStyles.css';
export var TextColorHover = function (_a) {
    var text = _a.text;
    var _b = useState({ x: 0, y: 0 }), coords = _b[0], setCoords = _b[1];
    var ref = useRef();
    var x = coords.x, y = coords.y;
    var maskStyle = {
        '--maskX': x,
        '--maskY': y,
    };
    var handleMouseMov = function (e) {
        var width = ref.current.clientWidth;
        var height = ref.current.clientHeight;
        var offX = (e.nativeEvent.offsetX / width) * 100;
        var offY = (e.nativeEvent.offsetY / height) * 100;
        setCoords({
            x: offX,
            y: offY,
        });
    };
    var handleMouseOut = function (e) {
        setCoords({
            x: 0,
            y: 0,
        });
    };
    return (_jsx("div", __assign({ id: 'mouseOverTextWrapper' }, { children: _jsxs("div", __assign({ className: 'mouseOverTextContainer', onMouseMove: handleMouseMov, onMouseOut: handleMouseOut, style: maskStyle, ref: ref }, { children: [_jsx("div", __assign({ className: 'mouseOverTextTitleWrapper' }, { children: _jsx("h1", { children: text }) })), _jsx("div", __assign({ className: 'mouseOverTextTitleWrapper mouseOverTexCloneWrapper' }, { children: _jsx("h1", { children: text }) }))] })) })));
};
//# sourceMappingURL=TextColorHover.js.map