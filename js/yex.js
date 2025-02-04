/*
  [JS Index]
  
  ---
  
  Template Name: Yex - One Page Portfolio Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. slick slider
    2.1. slick fullscreen slideshow ZOOM/FADE
  3. fullPage
  4. YouTube player
  5. owl carousel slider
    5.1. owl sections carousel slider
	5.2. owl team carousel slider
	5.3. owl works carousel slider
  6. magnificPopup
    6.1. magnificPopup works gallery
	6.2. magnificPopup works gallery slider
  7. swiper slider
    7.1. swiper slider
  8. navigation
    8.1. close navigation
  9. featured news MORE
  10. featured news MORE reset
*/


$(function() {
    "use strict";
	
	
    // 1. preloader
	$("#preloader").fadeOut(800);
    $(".preloader-bg").delay(600).fadeOut(800);
	
    // 2. slick slider
    // 2.1. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 3. fullPage
    $("#fullpage").fullpage({
        anchors: ["home", "about", "works", "news", "contact"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "About", "Works", "News", "Contact"],
        responsiveWidth: 995,
        autoScrolling: true,
        scrollBar: false,
        afterResponsive: function(isResponsive) {}
    });
	
    // 4. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 5. owl carousel slider
    // 5.1. owl sections carousel slider
    $("#about-section-carousel, #works-section-carousel, #news-section-carousel, #contact-section-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 1,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"]
    });
	// 5.2. owl team carousel slider
    $("#owl-carousel-team").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='owl-nav ion-chevron-left'></i>", "<i class='owl-nav ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-team',
        responsive: {
            0: {
                items: 1,
				margin: 25
            },
            768: {
                items: 2,
				margin: 25
            },
            980: {
                items: 2,
				margin: 50
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
	// 5.3. owl works carousel slider
	$("#owl-carousel-works").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='owl-nav ion-chevron-left'></i>", "<i class='owl-nav ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-works',
        responsive: {
            0: {
                items: 1,
				margin: 25
            },
            768: {
                items: 1,
				margin: 25
            },
            980: {
                items: 1,
				margin: 50
            },
            1240: {
                items: 1,
                margin: 50
            }
        }
    });
	
	// 6. magnificPopup
    // 6.1. magnificPopup works gallery
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
	// 6.2. magnificPopup works gallery slider
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
			removalDelay: 100,
			mainClass: "mfp-fade",
			fixedContentPos: false
        });
    });
	
    // 7. swiper slider
    // 7.1. swiper slider
    var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
        preloadImages: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        }
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.pause();
        });
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.play();
        });
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");

    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper.autoplay.start();
    }
    playButton.on("click", function() {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
	
	// 8. navigation
    // 8.1. close navigation
    $(".menu-nav").on("click", function() {
        $("#menu-mobile").removeClass("activated");
        $("#menu-mobile-caller").removeClass("lines-close");
    });
	
	// 9. featured news MORE
    $(".button-the").on("click", function() {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".news-closer, .to-top-arrow, .navigation-icon").on("click", function() {
        $(".panel-left, .panel-right").removeClass("open");
    });
	
	
});


// 10. featured news MORE reset
$(".button-the, .news-closer").on("click", function() {
    target = $(".news-reset");
    $("html, body").animate({
		scrollTop: target.offset().top - 0
		
    }, 500);
});