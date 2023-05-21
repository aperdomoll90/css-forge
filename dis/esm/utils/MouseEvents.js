export var rotateElement = function (event, element) {
    // get mouse position
    var x = event.clientX;
    var y = event.clientY;
    // find the middle
    var middleX = window.innerWidth / 2;
    var middleY = window.innerHeight / 2;
    //get offset from middle
    var offsetX = ((x - middleX) / middleX) * 15;
    var offsetY = ((y - middleY) / middleY) * 15;
    console.log('element', element);
    if (element) {
        element.style.setProperty('--rotateX', -1 * offsetY + 'deg');
        element.style.setProperty('--rotateY', offsetX + 'deg');
    }
};
export var wobbleElement = function (e, wobbles) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    // get mouse position
    var x = e.clientX;
    var y = e.clientY;
    // find the middle
    var middleX = window.innerWidth / 2;
    var middleY = window.innerHeight / 2;
    //get offset from middle
    var offsetX = ((x - middleX) / middleX) * 85;
    var offsetY = ((y - middleY) / middleY) * 85;
    wobbles &&
        wobbles.forEach(function (wobble) {
            var speed = wobble.getAttribute('data-speed');
            var x = (offsetX / width) * speed;
            var y = (offsetY / height) * speed;
            wobble.style.transform = "translateX(".concat(x, "%) translateY(").concat(y, "%) ");
        });
};
//# sourceMappingURL=MouseEvents.js.map