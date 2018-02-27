var navElement = document.getElementById("main-nav");
var coverButton = document.getElementById("cover-arrow");
var navProjectsButton = document.getElementById("nav-projects");
var navAboutButton = document.getElementById("nav-about");
var aboutContactMeButton = document.getElementById("about-contact-me");
// var projectReadMoreButton = document.getElementById("project-read-more");

(function($){

    window.addEventListener("scroll", checkScrollPos);
    

    // coverButton.onclick = function (event) {
    //     scrollToAnimation(event, "#projects");
    // }

    $("#cover-arrow").on(
        "click", 
        {element: "#projects"},
        scrollToAnimation
    );

    $("#nav-projects").on(
        "click", 
        {element: "#projects"},
        scrollToAnimation
    );
    $("#nav-about").on(
        "click", 
        {element: "#about"},
        scrollToAnimation
    );

    $("#about-contact-me").on(
        "click", 
        {element: "#contact"},
        scrollToAnimation
    );
    // $("#project-read-more").on(
    //     "click", 
    //     {element: "#project-content"},
    //     scrollToAnimation
    // )
    
})(jQuery);

// document.addEventListener("DOMContentLoaded", function() {
    
// });


function scrollToAnimation (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(event.data.element).offset().top
    }, 1500);
}

function checkScrollPos () {
    if(window.innerHeight <= window.scrollY){
        navElement.classList.remove("hide-nav");
    }else{
        navElement.classList.add("hide-nav");
    }
}