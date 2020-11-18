$(document).ready(() => {
    $('.logo-link, .menu-link').click(function(){
        // console.log('works');
        const id = $(this).attr('href');
        // console.log(id);
        const offset = $(id).offset().top;
        // console.log(offset);
        $('html').animate({
            scrollTop: offset
        }, 1000);
    })
})
