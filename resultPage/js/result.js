
$(document).ready(function () {



    var userInfo = JSON.parse(localStorage.getItem('LoggedInUser'));

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

    var resultData;
    var Quetions;
    var userInfo = JSON.parse(localStorage.getItem('LoggedInUser'));
    //console.log(userInfo);
    // Fetching score from localstorage 
    $('.total-question').text(localStorage.getItem('totalQuetions'));
    $('.total-attempt').text(localStorage.getItem('totalAttempt'));
    $('.total-correct').text(localStorage.getItem('totalCorrect'));
    $('.total-wrong').text(localStorage.getItem('totalWrong'));
    $('.percentage').text(parseInt(localStorage.getItem('percentage')).toFixed(2) + ' %');
    $('.total-score').text(localStorage.getItem('totalCorrect') + ' / ' + localStorage.getItem('totalQuetions'));

    //console.log(localStorage.getItem('percentage'));


    // Getting result data from json to generate analysis.
    let url = 'http://localhost:3000/results';
    $.ajax({
        url: url,
        type: "get",
        async: false,
        success: function (data) {
            resultData = data;
        },
        error: function () {
            alert('Json-server is not running to fetch results');
        }
    });

    // Getting last test index.
    var index;
    for (var i = 0; i < resultData.length; i++) {

        if (resultData[i].userid == userInfo.userId) {

            index = i;
            console.log(index);
        }
    }

    let url2 = 'http://localhost:3000/' + localStorage.getItem('subject');
    $.ajax({
        url: url2,
        type: "get",
        async: false,
        success: function (data) {
            Quetions = data;
        },
        error: function () {
            alert('Json-server is not running or quetions not availabel');
        }
    });

    // Analysis Table
    for (var i = 0; i < Quetions.length; i++) {

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.append(Quetions[i].question);


        var td2 = document.createElement('td');
        td2.append(Quetions[i].option1);
        if (Quetions[i].option1 == Quetions[i].answer) {
            td2.style.cssText = 'background-color: #baeba7';
        }
        if (Quetions[i].option1 != Quetions[i].answer && Quetions[i].option1 == JSON.parse(resultData[index].responses)[i]) {
            td2.style.cssText = 'background-color: #db6363';
        }

        var td3 = document.createElement('td');
        td3.append(Quetions[i].option2);
        if (Quetions[i].option2 == Quetions[i].answer) {
            td3.style.cssText = 'background-color: #baeba7';
        }
        if (Quetions[i].option2 != Quetions[i].answer && Quetions[i].option2 == JSON.parse(resultData[index].responses)[i]) {

            td3.style.cssText = 'background-color: #db6363';
        }
        var td4 = document.createElement('td');
        td4.append(Quetions[i].option3);
        if (Quetions[i].option3 == Quetions[i].answer) {
            td4.style.cssText = 'background-color: #baeba7';
        }
        if (Quetions[i].option3 != Quetions[i].answer && Quetions[i].option3 == JSON.parse(resultData[index].responses)[i]) {

            td4.style.cssText = 'background-color: #db6363';
        }
        var td5 = document.createElement('td');
        td5.append(Quetions[i].option4);
        if (Quetions[i].option4 == Quetions[i].answer) {
            td5.style.cssText = 'background-color: #baeba7';
        }
        if (Quetions[i].option4 != Quetions[i].answer && Quetions[i].option4 == JSON.parse(resultData[index].responses)[i]) {

            td5.style.cssText = 'background-color: #db6363';
        }

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);


        $('#show tr:last').after(tr);

    }

    $('#btnDash').click(function () {
        window.location.href = "../dashboard/dashboard.html";
    })
    $('#btnHome').click(function () {
        window.location.href = "../../index.html";
    })
});



