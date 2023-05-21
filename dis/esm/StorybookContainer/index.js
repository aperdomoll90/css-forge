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
import './styles.css';
import '../utils/GlobalStyles.css';
function StorybookContainer(_a) {
    var children = _a.children, backgroundImage = _a.backgroundImage;
    return _jsx("div", __assign({ className: "storybook-container ".concat(backgroundImage && 'storybook-container-image') }, { children: children }));
}
export default StorybookContainer;
//# sourceMappingURL=index.js.map