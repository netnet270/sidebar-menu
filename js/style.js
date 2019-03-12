$(document).ready(function () {

    $(".navigation ul li:not(:last)").on('click', function () { 
        var subMenu = $(this).children('ul');
        var itemIconCollapse = $(this).find('span:last');

        $('.sub-menu').each(function () {
            $('.sub-menu').slideUp(400);
            itemIconCollapse.html('<i class="far fa-plus-square"></i>');
        });

        if((subMenu).is(":hidden")){
            subMenu.slideDown(400);
            itemIconCollapse.html('<i class="far fa-minus-square"></i>');
        }

        else{
            subMenu.slideUp(400);
            itemIconCollapse.html('<i class="far fa-plus-square"></i>');
        }
    });

    var openBtn = $(".openbtn");
    var closeBtn = $(".closebtn");

    openBtn.on('click', function () {
        $('.navigation ul li>a').children('span').removeClass('d-none');
        $('.navigation ul li.active').children('ul').removeClass('d-none');
        // $('.navigation ul li.active').children('ul').slideDown(400);

        if (parseInt($(window).width()) <= 425) {
            $(".side-bar").css("width", "250px");
            $(".main-content").css("margin-left", "0px");
            $('.overlay').css({"opacity":"1"});
        }

        else {
            $(".side-bar").css("width", "250px");
            $(".main-content").css("margin-left", "250px");
        }
    });

    closeBtn.on('click', function () {
        $('.navigation ul li').children('ul').addClass('d-none');
        $('.navigation ul li>a').children('span').addClass('d-none');

        if (parseInt($(window).width()) <= 425) {
            $(".side-bar").css("width", "60px");
            $(".main-content").css("margin-left", "60px");
            $('.overlay').css({"opacity":"0"});
        }

        else {
            $(".side-bar").css("width", "60px");
            $(".main-content").css("margin-left", "60px");
        }
    });

    if (parseInt($(window).width()) <= 425) {
        $('.overlay').on('click', function(){         
            $('.overlay').css({"opacity":"0", " visibility": "hidden"});
            $(".side-bar").css("width", "60px");
            $(".main-content").css("margin-left", "60px");
            $('.navigation ul li>a').children('span').addClass('d-none');
            $('.navigation ul li').children('ul').addClass('d-none');
        })
    }; 


});

