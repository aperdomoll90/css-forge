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
import fishBowlTop from './images/fishBowlTop.png';
import soil from './images/soil.png';
import onion from './images/onion.png';
import plants from './images/plants.png';
import fishbowl from './images/fishbowl.png';
import clouds from './images/clouds.png';
export var Terrarium = function () {
    return (_jsxs("div", __assign({ className: 'TerrariumArea' }, { children: [_jsx("div", __assign({ className: 'shade' }, { children: _jsx("p", { children: "Sleeping Onion" }) })), _jsxs("div", __assign({ className: 'fullTerrarium' }, { children: [_jsx("div", __assign({ className: 'fishbowlSky' }, { children: _jsx("img", { src: clouds, className: ' clouds', alt: 'clouds' }) })), _jsx("img", { src: fishbowl, className: 'imgPosition fishbowl', alt: 'fishbowl' }), _jsx("img", { src: plants, className: 'imgPosition plants', alt: 'plants' }), _jsx("img", { src: onion, className: 'imgPosition onion', alt: 'pokemon sleeping' }), _jsx("img", { src: soil, className: 'imgPosition soil', alt: 'soil' }), _jsx("img", { src: fishBowlTop, className: 'imgPosition fishBowlTop', alt: 'fish bowl opening' })] }))] })));
};
//# sourceMappingURL=Terrarium.js.map