$(function(){
    //Show or hide the Go To Top button
    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
            $('.goToTop').fadeIn(200);
        }else{
            $('.goToTop').fadeOut(200);
        }
    });

    //Animate the scroll to top
    $('.goToTop').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    })
});