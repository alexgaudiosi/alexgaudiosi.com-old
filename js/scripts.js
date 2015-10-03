jQuery(document).ready(function ($) {

    var brandLogos = ["img/rolex.png", "img/Nasdaq.png", "img/lane-crawford.png", "img/airbus.jpg", "img/sothebys.jpg", "img/ibm.jpg", "img/jaguar.png", "img/tiffany.jpg", "img/virgin-atlantic.jpg", "img/hp.jpg", "img/financial-times.jpg", "img/htsi.jpg", "img/bloomberg.png", "img/gucci.jpg", "img/chanel.jpg", "img/mulberry.jpg", "img/bally.jpg", "img/cartier.jpg", "img/deutsche.jpg"];

    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });

    for (var i = 0; i < brandLogos.length; i++) {
        $('.brands-container').append('<div class="brands"><img src='+brandLogos[i]+'></div');
    };


});