"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleValues = exports.pentaDecimals = exports.percental = exports.negativeArray = exports.dozen = exports.datePickerControl = exports.ochreScale = exports.grayScale = exports.mintViolet = exports.primaryColors = exports.blackNwhite = exports.colorPickerControl = void 0;
exports.colorPickerControl = /(background|color)$/i;
exports.blackNwhite = [null, '#000000', '#ffffff'];
exports.primaryColors = [null, '#ff0000', '#ffff00', '#0000ff'];
exports.mintViolet = __spreadArray(__spreadArray([], exports.blackNwhite, true), ['#b5ffe1', '#541388', '#e59500', '#d93654', '#151515'], false);
exports.grayScale = __spreadArray(__spreadArray([], exports.blackNwhite, true), ['#161616', '#2c2b2b', '#686666', '#b3b0b0', '#e9e7e7'], false);
exports.ochreScale = __spreadArray(__spreadArray([], exports.blackNwhite, true), ['#2d2222', '#d5d5a3', '#3d3939'], false);
exports.datePickerControl = /Date$/;
exports.dozen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null];
exports.negativeArray = __spreadArray(__spreadArray([], exports.dozen, true), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10], false);
exports.percental = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, null];
exports.pentaDecimals = [40, 35, 30, 25, 20, 15, 10, null];
exports.scaleValues = [null, 0.5, 0.8, 1, 1.2, 1.5, 2];
//# sourceMappingURL=StoryProps.js.map