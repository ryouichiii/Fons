// index.html-specific JavaScript Codes

// Reveal Card + Disclaimer
// Status Booleans
let revealStatus = false;
let disclaimerStatus = false;

// Links to HTML id's
var linkCard = document.getElementById("linkCard")
var disclaimer = document.getElementById("disclaimer")

// Replace Height, Opacity and Pointer Events on Button Click
function changeRevealStatus() {
    revealStatus = !revealStatus;
    disclaimerStatus = !disclaimerStatus;

    linkCard.classList.toggle("opacity-0", !revealStatus);
    linkCard.classList.toggle("opacity-100", revealStatus);
    linkCard.classList.toggle("max-h-0", !revealStatus);
    linkCard.classList.toggle("max-h-[31rem]", revealStatus);
    linkCard.classList.toggle("pointer-events-none", !revealStatus);
    linkCard.classList.toggle("pointer-events-auto", revealStatus);

    disclaimer.classList.toggle("opacity-0", !revealStatus);
    disclaimer.classList.toggle("opacity-100", revealStatus);
}