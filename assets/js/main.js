(function () {
    /*setting consoles clearing start*/
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
    /* end setting consoles clearing*/

    /*preloader start*/


    $(window).on("load", function () {
        preloaderFadeOutTime = 500;

        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            preloader.fadeOut(preloaderFadeOutTime);
        }

        hidePreloader();
    });
    /*preloader end*/
    /*menu start*/
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");


        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

    });
    /*end menu*/

    /*slider start */
    if ($(".wrapping-slider").length > 0) {

// buttons
        var sliderControl = document.querySelector(".slider-control");

// slides informations
        var slides = document.querySelectorAll(".slide"),
            slidesLength = slides.length;

// slides array
        var slidesArr = [].slice.call(slides);

// reverse array sorting
        slidesArr = slidesArr.reverse();

// slide current
        var slideCurrent = 0;

        sliderControl.addEventListener("click", function (e) {
            target = e.target;

            // get next button
            if (target.classList.contains("next")) {

                next = e.target,
                    prev = next.previousElementSibling,
                    nextSlide = slidesArr[slideCurrent + 1],
                    slide = slidesArr[slideCurrent];

                slide.classList.add("slide-on");
                slide.classList.remove("text-on");
                nextSlide.classList.add("text-on");

                slideCurrent += 1;

                if (slideCurrent > 0) {
                    prev.classList.remove("disabled");
                }

                if (slideCurrent === slidesLength - 1) {
                    next.classList.add("disabled");
                }
            }

            // get prev button
            if (target.classList.contains("prev")) {

                slideCurrent -= 1;

                prev = e.target,
                    next = prev.nextElementSibling,
                    prevSlide = slidesArr[slideCurrent + 1],
                    slide = slidesArr[slideCurrent];

                prevSlide.classList.remove("text-on");
                slide.classList.remove("slide-on");
                slide.classList.add("text-on");

                if (slideCurrent === slidesLength - 2) {
                    next.classList.remove("disabled");
                }

                if (slideCurrent === 0) {
                    prev.classList.add("disabled");
                }

            }

        });

    }
    /*main slider end*/
    /*feature slider Start*/
    $('.services-carousal').owlCarousel({
        center: false,
        items: 4,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        loop: true,
        margin: 30,
        singleItem: true,
        dots: true,
        nav: false,
        responsive: {
            280: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    });
    /*feature slider end*/
    /*feature slider about page Start*/
    $('.services-carousal-about').owlCarousel({
        center: false,
        items: 2,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        loop: true,
        margin: 30,
        singleItem: true,
        dots: true,
        nav: false,
        responsive: {
            280: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            },
            1400: {
                items: 2
            }
        }
    });


    /*feature slider about page end*/
    /*counter slider start*/

    var a = 0;
    $(window).scroll(function () {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 7000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }

    });

    /*counter slider end*/


    /*start client logos*/

    if ($('.brands_slider').length) {
        var brandsSlider = $('.brands_slider');

        brandsSlider.owlCarousel(
            {
                center: false,
                items: 4,
                autoplay: true,
                autoplayTimeout: 3000,
                smartSpeed: 800,
                loop: true,
                margin: 30,
                singleItem: true,
                dots: true,
                nav: false,
                responsive: {
                    280: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    },
                    1400: {
                        items: 4
                    }
                }

            });

        if ($('.brands_prev').length) {
            var prev = $('.brands_prev');
            prev.on('click', function () {
                brandsSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.brands_next').length) {
            var next = $('.brands_next');
            next.on('click', function () {
                brandsSlider.trigger('next.owl.carousel');
            });
        }
    }


    /*end client logos*/


    /*fancy box*/
    if ($(".fancybox").length > 0) {

        $(".fancybox").fancybox({
            padding: 0,
            autoResize: true,
            beforeShow: function () {
                this.title = $(this.element).attr('title');
                this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
            },
            helpers: {
                title: {
                    type: 'inside'
                },
            }
        });
    }
    /*end fancy box*/

    /*start scroll to top */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    /*end scroll to top */
}());

