
$(document).ready(function () {

    $(".navigation ul li").click(function(){
        var subMenu = $(this).children('ul');
        var classNames = subMenu.attr('class');
        var itemIconCollapse =  $('.item-icon-collapse');

        console.log(itemIconCollapse.html());

        $('.sub-menu').each(function( index ) {
            $('.sub-menu').addClass('d-none');
            itemIconCollapse.html('<i class="far fa-plus-square"></i>');
           
        });

		if(classNames.includes('d-none')){		
			subMenu.removeClass("d-none");
            subMenu.addClass("d-block");	
            // subMenu.slideDown(3000);
            itemIconCollapse.html('<i class="far fa-minus-square"></i>');
		} else{
			subMenu.removeClass("d-block");
            subMenu.addClass("d-none");
            itemIconCollapse.html('<i class="far fa-plus-square"></i>');
        }
        
    })

    $(".openbtn").click(function(){
        $(".sidebar-menu").css("width","20%");
        $(".main-content").css("margin-left","20%");
    })
    
    $(".closebtn").click(function(){
        $(".sidebar-menu").css("width","0");
        $(".main-content").css("margin-left","0");
    })
});