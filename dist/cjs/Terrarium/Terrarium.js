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
exports.Terrarium = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
require("../utils/GlobalStyles.css");
var fishBowlTop_png_1 = __importDefault(require("./images/fishBowlTop.png"));
var soil_png_1 = __importDefault(require("./images/soil.png"));
var onion_png_1 = __importDefault(require("./images/onion.png"));
var plants_png_1 = __importDefault(require("./images/plants.png"));
var fishbowl_png_1 = __importDefault(require("./images/fishbowl.png"));
var clouds_png_1 = __importDefault(require("./images/clouds.png"));
var Terrarium = function () {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'TerrariumArea' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'shade' }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Sleeping Onion" }) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'fullTerrarium' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'fishbowlSky' }, { children: (0, jsx_runtime_1.jsx)("img", { src: clouds_png_1.default, className: ' clouds', alt: 'clouds' }) })), (0, jsx_runtime_1.jsx)("img", { src: fishbowl_png_1.default, className: 'imgPosition fishbowl', alt: 'fishbowl' }), (0, jsx_runtime_1.jsx)("img", { src: plants_png_1.default, className: 'imgPosition plants', alt: 'plants' }), (0, jsx_runtime_1.jsx)("img", { src: onion_png_1.default, className: 'imgPosition onion', alt: 'pokemon sleeping' }), (0, jsx_runtime_1.jsx)("img", { src: soil_png_1.default, className: 'imgPosition soil', alt: 'soil' }), (0, jsx_runtime_1.jsx)("img", { src: fishBowlTop_png_1.default, className: 'imgPosition fishBowlTop', alt: 'fish bowl opening' })] }))] })));
};
exports.Terrarium = Terrarium;
//# sourceMappingURL=Terrarium.js.map