$(document).ready(function(){ 
    let menu = $(".menu");
    let hamburger = $(".hamburger-icon");
    let menuOpen;

    function openMenu() {
        menu.animate({
            left: "30%"
        }, 500);
        menuOpen = true;
    }

    function closeMenu() {
        menu.animate({
            left: "100%"
        }, 500);
        menuOpen = false;
    }

    function toggleMenu() {
        menuOpen ? closeMenu() : openMenu();
    }

    hamburger.on("click", () => {
        toggleMenu();
    });


});