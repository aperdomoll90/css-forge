var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var colorPickerControl = /(background|color)$/i;
export var blackNwhite = [null, '#000000', '#ffffff'];
export var primaryColors = [null, '#ff0000', '#ffff00', '#0000ff'];
export var mintViolet = __spreadArray(__spreadArray([], blackNwhite, true), ['#b5ffe1', '#541388', '#e59500', '#d93654', '#151515'], false);
export var grayScale = __spreadArray(__spreadArray([], blackNwhite, true), ['#161616', '#2c2b2b', '#686666', '#b3b0b0', '#e9e7e7'], false);
export var ochreScale = __spreadArray(__spreadArray([], blackNwhite, true), ['#2d2222', '#d5d5a3', '#3d3939'], false);
export var datePickerControl = /Date$/;
export var dozen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null];
export var negativeArray = __spreadArray(__spreadArray([], dozen, true), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10], false);
export var percental = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, null];
export var pentaDecimals = [40, 35, 30, 25, 20, 15, 10, null];
export var scaleValues = [null, 0.5, 0.8, 1, 1.2, 1.5, 2];
//# sourceMappingURL=StoryProps.js.map