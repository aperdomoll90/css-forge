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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarrySky = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./styles.css");
require("../utils/GlobalStyles.css");
var StarrySky = function () {
    (0, react_1.useEffect)(function () {
        rain();
    }, []);
    var rain = function () {
        var area = document.querySelector('.StarrySky');
        var amount = 20;
        var i = 0;
        if (area) {
            while (i < amount) {
                var drop = document.createElement('i');
                // let size = Math.random() * 5
                var posX = Math.floor(Math.random() * window.innerWidth);
                var posY = Math.floor(Math.random() * window.innerHeight);
                var delay = Math.random() * 10;
                var duration = Math.random() * 5;
                // drop.style.width = 0.2 + size + 'px'
                drop.style.left = posX + 'px';
                drop.style.top = posY + 'px';
                drop.style.animationDelay = delay + 's';
                drop.style.animationDuration = 20 + duration + 's';
                area.appendChild(drop);
                i++;
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'StarrySky' }, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'stars' }), (0, jsx_runtime_1.jsx)("div", { className: 'clouds' })] })));
};
exports.StarrySky = StarrySky;
//# sourceMappingURL=StarrySky.js.map