console.log("it works!");

let closeButton = document.querySelector(".close-button");
    closeButton.addEventListener( "click", hideNavigationLinks );


let hamburgerButton = document.querySelector(".hamburger-button");
    hamburgerButton.addEventListener( "click", showNavigationLinks );

let navigationLinks = document.querySelector(".secondary-navigation-bar");


function showNavigationLinks() {
        console.log("Hamburger button clicked");
        hamburgerButton.classList.toggle("hidden");
        closeButton.classList.toggle("hidden");
        navigationLinks.classList.toggle("hidden");
}

function hideNavigationLinks() {
        console.log("Close button clicked");
        hamburgerButton.classList.toggle("hidden");
        closeButton.classList.toggle("hidden");
        navigationLinks.classList.toggle("hidden");
}

