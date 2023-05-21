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
export var StarrySky = function () {
    useEffect(function () {
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
    return (_jsxs("div", __assign({ className: 'StarrySky' }, { children: [_jsx("div", { className: 'stars' }), _jsx("div", { className: 'clouds' })] })));
};
//# sourceMappingURL=StarrySky.js.map