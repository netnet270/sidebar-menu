
$(document).ready(function () {

    $(".navigation ul li:not(:first)").click(function () {
        var subMenu = $(this).children('ul');
        var classNames = subMenu.attr('class');
        var itemIconCollapse = $('.item-icon-collapse');

        $('.sub-menu').each(function (index) {
            $('.sub-menu').addClass('d-none');
            itemIconCollapse.html('<i class="far fa-plus-square"></i>');

        });

        if (classNames.includes('d-none')) {
            subMenu.removeClass("d-none");
            // subMenu.addClass("d-block");	
            subMenu.slideDown();
            itemIconCollapse.html('<i class="far fa-minus-square"></i>');
        } else {
            subMenu.removeClass("d-block");
            // subMenu.addClass("d-none");
            subMenu.slideUp();
            itemIconCollapse.html('<i class="far fa-plus-square"></i>');
        }
    });

    var openBtn = $(".openbtn");
    var closeBtn = $(".closebtn");

    openBtn.click(function () {
        if (parseInt($(window).width()) <= 425) {
            $(".side-bar").css("width", "250px");
            $(".main-content").css("margin-left", "250px");
            $('.navigation ul li>a').children('span').removeClass('d-none');
            $('body').addClass('bg-opacity');
        }

        else {
            $(".side-bar").css("width", "250px");
            $(".main-content").css("margin-left", "250px");
            $('.navigation ul li>a').children('span').removeClass('d-none');
            $('.navigation ul li.active').children('ul').removeClass('d-none');
        }

        $(window).click(function(){

        })
    });

    closeBtn.click(function () {
        if (parseInt($(window).width()) <= 425) {
            $(".side-bar").css("width", "60px");
            $(".main-content").css("margin-left", "60px");
            $('.navigation ul li>a').children('span').addClass('d-none');
            $('body').removeClass('bg-opacity');
        }
        else{
            $(".side-bar").css("width", "60px");
            $(".main-content").css("margin-left", "60px");
            $('.navigation ul li>a').children('span').addClass('d-none');
            $('.navigation ul li').children('ul').addClass('d-none');
    
        }
    });

});