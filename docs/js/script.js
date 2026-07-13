// Automatic Copyright Year
const date = new Date();
document.getElementById("year").innerHTML = date.getUTCFullYear();


// Mobile Scaling
// Viewport Variables + Container id
var scaleContainer = document.getElementById("scale")
var vw = window.innerWidth;
var vh = window.innerHeight;
var viewportSmall = null;
if (vw <= 768 || vh <= 768) { // Initiallise viewportSmall
    viewportSmall = true;
} else {
    viewportSmall = false;
}
/*
console.log("width: ", vw);
console.log("height: ", vh);
console.log("small?: ", viewportSmall);
*/

// Change Scale Function
function changeScale() {
    scale.classList.toggle("scale-100", !viewportSmall);
    scale.classList.toggle("scale-75", viewportSmall);
}
changeScale()

// Viewport Listener, Scales When Updated
window.addEventListener("resize", function() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    if (vw <= 640 || vh <= 768) {
        viewportSmall = true;
    } else {
        viewportSmall = false;
    }
    changeScale()
    /*
    console.log("width: ", vw);
    console.log("height: ", vh);
    console.log("small?: ", viewportSmall);
    */
});