
const background = document.getElementById('background');
const welcome = document.getElementById('welcome');

/* background.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var width = background.clientWidth;

    console.log("width: "+width)
    var color = x / width;
    var Wcolor = 1 - color;
    console.log("x: "+x)
    console.log("color: "+color)
    console.log("Wcolor: "+Wcolor)

    this.style.backgroundColor = "rgba(0, 0, 0, "+ color +")";
    welcome.style.color = "rgba(0, 0, 0, "+ Wcolor +")";
}); */

background.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var width = background.clientWidth;
    console.log("width: "+width)
    var color = x / width;
    color = Math.round(255 * color);
    this.style.backgroundColor = "rgb("+color+", "+color+", "+color+")";

    var inv = 255 - color;

    welcome.style.color = "rgb("+inv+", "+inv+", "+inv+")";
});