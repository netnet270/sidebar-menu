
$(document).ready(function () {
    $(".navigation ul li").click(function(){
        $(".sub-menu").addClass("open");
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