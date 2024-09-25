/*--------------------------------------------------
Template Name: rokomary;
Description: Creative Bootstrap4 Portfolio Template;


NOTE: main.js, All custom script and plugin activation script in this file. 
-----------------------------------------------------

    JS INDEX
    ================================================
    1. Mobile Menu Activation
    2. Sticky-Menu Activation
    3. Jquery Pie Chart Activation
    4. Magnific Popup Activation
    5. Image loade with isotop Activation
    6. wow js Activation
    7. video palyer Activation
    8. Brand Logo  Activation
    9. Testmonial Activation
    10. ScrollUp Activation
    
================================================*/

(function ($) {
    "use Strict";

    /*----------------------------
    1. Mobile Menu Activation
    -----------------------------*/
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
    });

    /*----------------------------
    2. Sticky-Menu Activation
    ------------------------------ */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header-sticky').addClass("sticky");
        } else {
            $('.header-sticky').removeClass("sticky");
        }
    });

    /*----------------------------
    3. Jquery Pie Chart Activation
    ------------------------------ */
    if (typeof ($.fn.knob) != 'undefined') {
        $('.knob').each(function () {
            var $this = $(this),
                knobVal = $this.attr('data-rel');

            $this.knob({
                'draw': function () {
                    $(this.i).val(this.cv + '%')
                }
            });

            $this.appear(function () {
                $({
                    value: 0
                }).animate({
                    value: knobVal
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }, {
                accX: 0,
                accY: -150
            });
        });
    }

    /*----------------------------
    4. Magnific Popup Activation
    ------------------------------ */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });

    /*--------------------------------------
    5. Image loade with isotop Activation
    ---------------------------------------- */
    $('.container').imagesLoaded(function () {

        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            $('.portfolio-menu button').removeClass('active');
            $(this).addClass('active');

            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        })
    });

    /*--------------------------------------
    6. wow js Activation
    ---------------------------------------- */
    new WOW().init();

    /*--------------------------------------
    7. video palyer Activation
    ---------------------------------------- */
    jQuery("#video-active").YTPlayer();

    /*----------------------------------------------------
    8. Brand Logo  Activation
    -----------------------------------------------------*/
    $('.brand-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        dots: false,
        smartSpeed: 500,
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            380: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

    /*----------------------------------------------------
    9. Testmonial Activation
    -----------------------------------------------------*/
    $('.testmonial-active').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        smartSpeed: 500,
        margin: 0,
        items: 1
    })

    /*----------------------------
    10. ScrollUp Activation
    -----------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '550', // Distance from top before showing element (px)
        topSpeed: 1000, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        scrollSpeed: 900,
        animationInSpeed: 1000, // Animation in speed (ms)
        animationOutSpeed: 1000, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    
})(jQuery);