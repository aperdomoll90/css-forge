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
import { useRef, useState } from 'react';
import { gsap, Elastic } from 'gsap';
import './styles.css';
import '../utils/GlobalStyles.css';
export var BouncyLine = function () {
    var _a = useState({ x: 0, y: 0 }), coords = _a[0], setCoords = _a[1];
    var ref = useRef(null);
    var handleMouseMov = function (e) {
        if (ref && ref.current) {
            var width = ref.current.clientWidth;
            var height = ref.current.clientHeight;
            var offX = (e.nativeEvent.offsetX / width) * 500;
            var offY = (e.nativeEvent.offsetY / height) * 500;
            setCoords({
                x: offX,
                y: offY,
            });
            updatePath(width);
        }
    };
    var updatePath = function (width) {
        var path = document.querySelector('path');
        var x = coords.x, y = coords.y;
        path.setAttribute('d', "M250,0 Q".concat(x, ",").concat(y, " 250,500"));
    };
    var handleMouseOut = function (e) {
        var path = document.querySelector('path');
        snapBack();
        function snapBack() {
            gsap.to(path, { ease: Elastic.easeOut.config(1, 0), attr: { d: 'M250,0 Q250,250 250,500' } });
        }
    };
    // same effect but using JavaScrip Event Listeners
    // useEffect(()=>{
    //     let areaEffect = document.getElementById('BouncyLineWrapper')
    //     const path = document.querySelector('path')
    //     // let areaEffect = document
    //     areaEffect.addEventListener('mousemove', event => {
    //     let x = event.clientX
    //     let y = event.clientY
    //     let width = x / window.innerWidth
    //     updateCoords(x, y)
    //     function updateCoords(x, y) {
    //       x = width * 500
    //       path.setAttribute('d', `M250,0 Q${x},${y} 250,500`)
    //     }
    //   })
    //   areaEffect.addEventListener('mouseout', event => {
    //     snapBack()
    //     function snapBack() {
    //         // path.setAttribute('d', 'M250,0 Q250,250 250,500')
    //         gsap.to(path, { ease: Elastic.easeOut.config(1,0,3), attr: { d: 'M250,0 Q250,250 250,500' } })
    //       }
    //   })
    // },[])
    return (_jsx("div", __assign({ id: 'BouncyLineWrapper', onMouseMove: handleMouseMov, onMouseOut: handleMouseOut, ref: ref }, { children: _jsx("svg", __assign({ viewBox: '0 0 500 500', preserveAspectRatio: 'xMidYMid meet' }, { children: _jsx("path", { d: 'M250,0 Q250,250 250,500' }) })) })));
};
//# sourceMappingURL=BouncyLine.js.map