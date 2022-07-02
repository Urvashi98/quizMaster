$(document).ready(function () {
    
    let newUser = localStorage.getItem("NewUser");

    if (!newUser) {
        $('#dashboard').hide();
        $('#myInput').hide();
        $('#logout').hide();
    }
    $('#myUL').hide();

    $("#signup_button").hide();
    $("#login_button").hide();

    $('#login_icon').click(function () {
        $("#signup_button").toggle();
        $("#login_button").toggle();
    });



    $('.faq_question').click(function () {

        if ($(this).parent().is('.open')) {
            $(this).closest('.faq').find('.faq_answer_container').slideUp();
             $(this).closest('.faq').removeClass('open');
        } else {
            $('.faq_answer_container').slideUp();
            $('.faq').removeClass('open');
            $(this).closest('.faq').find('.faq_answer_container').slideDown();
            $(this).closest('.faq').addClass('open');
        }

    });
});