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
export var FaeLoader = function (_a) {
    var size = _a.size;
    var faeCircleSize = {
        width: "".concat(size, "px"),
        height: "".concat(size, "px"),
    };
    var topCircle = {
        width: "".concat(size, "px"),
        height: "".concat(size, "px"),
        top: "-".concat(size && size / 2.5, "px"),
    };
    return (_jsxs("div", __assign({ className: 'FaeLoaderContainer' }, { children: [_jsx("div", { className: 'faeCircle', style: faeCircleSize }), _jsx("div", { className: 'faeCircle', style: faeCircleSize }), _jsx("div", { className: 'faeCircle', style: topCircle }), _jsx("p", { children: "loading..." })] })));
};
//# sourceMappingURL=FaeLoader.js.map