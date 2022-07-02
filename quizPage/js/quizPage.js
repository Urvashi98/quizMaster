var i = -1;
var Quetions;
var quetionsAttempted = []
var responses = [];
var correctAnswers = [];
var marks = 0;
var minutes;
var seconds;
var w;


$(document).ready(function () {

    // getting username of logged in user.
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

    $('#login_icon').click(function () {
        $("#signup_button").toggle();
        $("#login_button").toggle();
    });

    $('.username').text(userInfo.email);
    // Fetching quetions data from json-server.
    let url = 'http://localhost:3000/' + localStorage.getItem('subject');
    $.ajax({
        url: url,
        type: "get",
        async: false,
        success: function (data) {
            Quetions = data;
        },
        error: function () {
            alert('Json-server is not running or quetions not availabel');
        }
    });
    //console.log(Quetions);

    //Timer
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("../timer/timer.js");
        }
        w.onmessage = function (event) {
            if (event.data.minutes == '00' & event.data.seconds == '00') {
                $('#submit').click();
            }
            document.getElementById("time").innerHTML = event.data.minutes + ':' + event.data.seconds;
            minutes = event.data.minutes;
            seconds = event.data.seconds;
            //console.log(event.data.seconds)
        };
    } else {
        alert("Sorry, your browser does not support Web Workers to run the timer...");
    }


    //Attaching Quiz topic on heading
    $('.topic').text(localStorage.getItem('subject') + ' Quiz');

    //event to save the answer clicked by user
    $("input[type='radio']").click(function () {

        var ans = $('input[name="btnradio"]:checked').val();
        //console.log($('input[name="btnradio"]:checked').val());
        if (ans) {
            console.log(ans + ' ' + i);
            responses[i] = ans;
        }

    });
    //console.log(Quetions.length);

    // Appending total number of questions info to label.
    $('#totalQues').text(Quetions.length);

    fetchNextQues();

    function fetchNextQues() {

        //console.log(Quetions[i].question);


        // Getting response of previous question.
        console.log(Quetions.length);
        if (i < Quetions.length - 1) {

            //To reset previous quetion checked answer (radio button).
            $("input[name='btnradio']").prop('checked', false);

            i++;

            //Disabling prev button on quetion-1.
            if (i == 0) {
                $("button[id='prev']").attr('disabled', 'disabled');
            }
            else {
                $("button[id='prev']").attr('disabled', false);
            }

            //Disabling next button last question.
            if (i == Quetions.length - 1) {
                $("button[id='next']").attr('disabled', 'disabled');
                $("button[id='submit']").attr('disabled', false);

            }
            else {
                $("button[id='next']").attr('disabled', false);
                $("button[id='submit']").attr('disabled', 'disabled');
            }



            // Attaching next question to innerhtml 
            $('#question').text(Quetions[i].question);
            console.log(Quetions[i].question);

            // Adding Image for quetions

            if (Quetions[i].img != "../admin/images/") {
                $('#quesImg').attr("src", Quetions[i].img);
                console.log(Quetions[i].img);
                $('#quesImg').css({ display: 'block' })
            }
            else {
                $('#quesImg').css({ display: 'none' })

            }

            // Attaching options to innerhtml 
            $('#btnradio1').val(Quetions[i].option1);
            $('#ops1').text('1. ' + Quetions[i].option1);

            $('#btnradio2').val(Quetions[i].option2);
            $('#ops2').text('2. ' + Quetions[i].option2);

            $('#btnradio3').val(Quetions[i].option3);
            $('#ops3').text('3. ' + Quetions[i].option3);

            $('#btnradio4').val(Quetions[i].option4);
            $('#ops4').text('4. ' + Quetions[i].option4);

            $('#currQus').text(i + 1);

            //Restoring the already clicked answer of next question on next button click.
            if (responses[i]) {
                $(`input[name="btnradio"][value="${responses[i]}"]`).prop('checked', true);
            }
        }


    }

    function fetchPrevQues() {

        //console.log(Quetions[i].question);

        if (i > 0) {

            i--;

            //Disabling prev button on question-1.
            if (i == 0) {
                $("button[id='prev']").attr('disabled', 'disabled');
            }
            else {
                $("button[id='prev']").attr('disabled', false);
            }

            //Disabling next button last question.
            if (i == Quetions.length - 1) {
                $("button[id='next']").attr('disabled', 'disabled');
                $("button[id='submit']").attr('disabled', false);

            }
            else {
                $("button[id='next']").attr('disabled', false);
                $("button[id='submit']").attr('disabled', 'disabled');
            }

            // Attaching question to innerhtml 
            $('#question').text(Quetions[i].question);


            // Adding Image for quetions
            if (Quetions[i].img != "../admin/images/") {
                $('#quesImg').attr("src", Quetions[i].img);
                console.log(Quetions[i].img);
                $('#quesImg').css({ display: 'block' })
            }
            else {
                $('#quesImg').css({ display: 'none' })

            }

            // Attaching options to innerhtml 
            $('#btnradio1').val(Quetions[i].option1);
            $('#ops1').text('1. ' + Quetions[i].option1);

            $('#btnradio2').val(Quetions[i].option2);
            $('#ops2').text('2. ' + Quetions[i].option2);

            $('#btnradio3').val(Quetions[i].option3);
            $('#ops3').text('3. ' + Quetions[i].option3);

            $('#btnradio4').val(Quetions[i].option4);
            $('#ops4').text('4. ' + Quetions[i].option4);


            $('#currQus').text(i + 1);

            //Restoring the already clicked answer of previous question on prev button click.
            $(`input[name="btnradio"][value="${responses[i]}"]`).prop('checked', true);

        }
    }

    $('#next').click(function () {
        fetchNextQues();
    })

    $('#prev').click(function () {
        fetchPrevQues();
    })


    // getting result
    $('#submit').click(function () {

        //Stop the timer;
        w.terminate();
        w = undefined;

        // loop for checking correct responses submitted by user.
        for (var i = 0; i < Quetions.length; i++) {
            quetionsAttempted.push(Quetions[i].question);
            correctAnswers.push(Quetions[i].answer);
            if (responses[i] == Quetions[i].answer) {
                marks++;
            }
        }

        // Storing result to localStorage (result page can fetch it -- on result.js).
        var wrong = Quetions.length - marks;
        var per = marks / Quetions.length * 100;


        localStorage.setItem('totalQuetions', Quetions.length);
        localStorage.setItem('totalAttempt', responses.length);
        localStorage.setItem('totalCorrect', marks);
        localStorage.setItem('totalWrong', wrong);
        localStorage.setItem('percentage', per);

        //Getting date and time;
        var datetime = new Date();
        var time = datetime.toTimeString().split(" ")[0]
        var date = datetime.getDate() + '/' + (parseInt(datetime.getMonth()) + 1) + '/' + datetime.getFullYear();
        //saving score to db.json
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/results",
            dataType: "json",
            async: false,
            success: function (msg) {
                if (msg) {
                    console.log(msg);
                } else {
                    console.log("Cannot add to list !");
                }
            },

            data: {
                "userid": userInfo.userId,
                "subject": localStorage.getItem('subject'),
                "marksObtained": marks,
                "totalMarks": Quetions.length,
                "timeElapsed": minutes + ':' + seconds,
                "percentage": per,
                "dateTime": date + ' : ' + time,
                "responses": JSON.stringify(responses)
            }
        });
        window.location.href = "../resultPage/result.html";

    })
});