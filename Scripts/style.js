$(window).on('load', function () {
    $('#main-banner').owlCarousel({
        loop: true,
        margin: 0,
        stagePadding: 0,
        nav: true,
        dots: false,
        autoplay: true,
        mouseDrag: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                nav: false,
                touchDrag: true,
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('#stuent-review').owlCarousel({
        loop: true,
        margin: 35,
        stagePadding: 10,
        nav: true,
        dots: false,
        autoplay: true,
        mouseDrag: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        center: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                nav: false,
                touchDrag: true,
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $("#header-sticky").removeClass("header-sticky");
        } else {
            $("#header-sticky").addClass("header-sticky");
        }
    });
    $('.popup-link-video').magnificPopup({
        type: 'iframe', // Use iframe type for video links
        midClick: true, // Allow opening popup on middle mouse click
        mainClass: 'mfp-bg mfp-ready',
        removalDelay: 300, // Delay for smoother animation
        preloader: true,
        fixedContentPos: false
    });
});