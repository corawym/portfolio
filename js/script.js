var navElement = document.getElementById("main-nav");

(function($){

    window.addEventListener("scroll", checkScrollPos);

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

    
})(jQuery);


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