$(document).ready(function(){
    $("#click").click(function(){ 
        $(".cell").css({ transform: 'scale(.5)' });
        $(".cell").clone().appendTo("#cell-clone").animate({left: "200px"});
    });
});

