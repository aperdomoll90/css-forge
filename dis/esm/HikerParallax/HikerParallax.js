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
// import hiker from './media/hiker.png'
// import plane2 from './media/plane2.png'
// import plane3 from './media/plane3.png'
// import backgroundMountain from './media/plane4.png'
import sky from './media/space.jpeg';
export var HikerParallax = function () {
    useEffect(function () {
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
    return (_jsxs("div", __assign({ id: 'hiker-parallax' }, { children: [_jsx("p", { children: "test" }), _jsx("img", { src: sky, className: 'sky translate', "data-speed": '-0.3', alt: 'sky' })] })));
};
//# sourceMappingURL=HikerParallax.js.map