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
exports.HikerParallax = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./styles.css");
require("../utils/GlobalStyles.css");
// import hiker from './media/hiker.png'
// import plane2 from './media/plane2.png'
// import plane3 from './media/plane3.png'
// import backgroundMountain from './media/plane4.png'
var space_jpeg_1 = __importDefault(require("./media/space.jpeg"));
var HikerParallax = function () {
    (0, react_1.useEffect)(function () {
        window.addEventListener('scroll', function () {
            var scroll = window.pageYOffset;
            var screenWidth = window.screen.width;
            var translate = document.querySelectorAll('.translate');
            var backgroundMountain = document.querySelector('.backgroundMountain');
            var shadow = document.querySelector('.heroShadow');
            // >>>>>>>>>>>>>>>>>>> TRANSLATE Y
            translate.forEach(function (element) {
                var speed = element.dataset.speed;
                element.style.transform = "translateY(".concat(scroll * speed, "px)");
            });
            // <<<<<<<<<<<<<<<<<<<< HEIGHT
            if (shadow) {
                shadow.style.height = "".concat(scroll * 0.5 + 270, "px");
            }
            // <<<<<<<<<<<<<<<<<<<< WIDTH
            if (backgroundMountain) {
                if (screenWidth < 992) {
                    backgroundMountain.style.width = "".concat(-scroll / 25 + 250, "vw");
                }
                if (screenWidth > 991) {
                    backgroundMountain.style.width = "".concat(-scroll / 25 + 100, "vw");
                }
            }
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ id: 'hiker-parallax' }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "test" }), (0, jsx_runtime_1.jsx)("img", { src: space_jpeg_1.default, className: 'sky translate', "data-speed": '-0.3', alt: 'sky' })] })));
};
exports.HikerParallax = HikerParallax;
//# sourceMappingURL=HikerParallax.js.map