
$(document).ready(function () {
    var userInfo = JSON.parse(localStorage.getItem('LoggedInUser'));

    let newUser = localStorage.getItem("NewUser");

    if (!userInfo) {
        $('#logout').hide();
    }
    if (!newUser) {
        $('#dashboard').hide();
        $('#myInput').hide();
    }
    $('#myUL').hide();
    $("#signup_button").hide();
    $("#login_button").hide();

    $('#login_icon').click(function () {
        $("#signup_button").toggle();
        $("#login_button").toggle();
    });

})
