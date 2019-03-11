$(document).ready(function () {

    $(".navigation ul li:not(:first)").on('click', function () { 
        var subMenu = $(this).children('ul');
        var classNames = subMenu.attr('class');
        var itemIconCollapse = $(this).find('span:last');

        $('.sub-menu').each(function () {
            $('.sub-menu').addClass('d-none');
            itemIconCollapse.html('<i class="far fa-plus-square"></i>');
        });

        if (classNames.includes('d-none')) {
            subMenu.removeClass("d-none");
            // subMenu.addClass("d-block");	
            subMenu.slideDown(800);
            itemIconCollapse.html('<i class="far fa-minus-square"></i>');
        } else {
            subMenu.removeClass("d-block");
            // subMenu.addClass("d-none");
            subMenu.slideUp(800);
            itemIconCollapse.html('<i class="far fa-plus-square"></i>');
        }
    });

    var openBtn = $(".openbtn");
    var closeBtn = $(".closebtn");

    openBtn.on('click', function () {
        if (parseInt($(window).width()) <= 425) {
            $(".side-bar").css("width", "250px");
            $(".main-content").css("margin-left", "0px");
            $('.navigation ul li>a').children('span').removeClass('d-none');
            $('.overlay').css({"opacity":"1"});
        }

        else {
            $(".side-bar").css("width", "250px");
            $(".main-content").css("margin-left", "250px");
            $('.navigation ul li>a').children('span').removeClass('d-none');
            $('.navigation ul li.active').children('ul').removeClass('d-none');
        }
    });

    closeBtn.on('click', function () {

        if (parseInt($(window).width()) <= 425) {
            $(".side-bar").css("width", "60px");
            $(".main-content").css("margin-left", "60px");
            $('.navigation ul li>a').children('span').addClass('d-none');
            $('body').removeClass('bg-opacity');
            $('.overlay').css({"opacity":"0"});
        }

        else {
            $(".side-bar").css("width", "60px");
            $(".main-content").css("margin-left", "60px");
            $('.navigation ul li>a').children('span').addClass('d-none');
            $('.navigation ul li').children('ul').addClass('d-none');
        }
    });

    if (parseInt($(window).width()) <= 425) {
        $('.overlay').on('click', function(){         
            $('.overlay').css({"opacity":"0"});
            $(".side-bar").css("width", "60px");
            $(".main-content").css("margin-left", "60px");
            $('.navigation ul li>a').children('span').addClass('d-none');
        })
    }; 


});

