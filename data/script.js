$(document).reday(function(){

    $('#menu').onclick(function(){
        $(this).toggleClass('fa-bars');
        $('header').toggleClass('toggle');
    });

    $(windows).on('scrol load',function(){
        $('#menu').removeClass('fa-bars');
        $('header').removeClass('toggle');
    });
});