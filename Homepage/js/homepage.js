var userInfo;
function myFunction() {
    $('#myUL').show();

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    
}
$(document).ready(function () {

    userInfo = JSON.parse(localStorage.getItem('LoggedInUser'));
    

    let newUser = localStorage.getItem("NewUser");
  
    if(!newUser){
        $('#dashboard').hide();
        $('#myInput').hide();
    }
    $('#myUL').hide();


    $('#html_play').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'HTML');
            window.location.href = "../instructions/start.html";

        }
    });

    $('#css_play').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'CSS');
            window.location.href = "../instructions/start.html";
        }

    });

    $('#js_play').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'JS');
            window.location.href = "../instructions/start.html";
        }

    });
    $('#boot_play').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'BOOTSTRAP');
            window.location.href = "../instructions/start.html";

        }
    });

    $('#sass_play').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'SASS');
            window.location.href = "../instructions/start.html";
        }

    });

    $('#node_play').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'NODE');
            window.location.href = "../instructions/start.html";
        }

    });


    // Search functionality buttons
    $('#html_play1').click(function(){
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'HTML');
            window.location.href = "../instructions/start.html";
        }
    })
    $('#css_play1').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'CSS');
            window.location.href = "../instructions/start.html";
        }

    });

    $('#js_play1').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'JS');
            window.location.href = "../instructions/start.html";
        }

    });
    $('#boot_play1').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'BOOTSTRAP');
            window.location.href = "../instructions/start.html";

        }
    });

    $('#sass_play1').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'SASS');
            window.location.href = "../instructions/start.html";
        }

    });

    $('#node_play1').click(function () {
        if (!newUser) {
            window.location.href = "../authentication/login.html";
        }
        else {
            localStorage.setItem('subject', 'NODE');
            window.location.href = "../instructions/start.html";
        }

    });
    $("input").keyup(function () {
        // $("input").css("background-color", "pink");
        console.log("In Function....")
        $('#myUL').show();

        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });
    $("#signup_button").hide();
    $("#login_button").hide();

    $('#login_icon').click(function () {
        $("#signup_button").toggle();
        $("#login_button").toggle();
    });
});