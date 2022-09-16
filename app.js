$(document).ready(function () {
    $(window).scroll(function () {

        if (this.scrollY > 200) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scrolling Button Btn
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    var typed = new Typed(".typing-1", {
        strings: [
            "Pre-Final Year Student in IIT Jodhpur", "Tech-Enthusiast",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

   
});















