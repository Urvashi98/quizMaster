
$(document).ready(function () {

  userInfo = JSON.parse(localStorage.getItem('LoggedInUser'));
  console.log(userInfo);

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

  $("#signup_button").hide();
  $("#login_button").hide();

  $('#login_icon').click(function () {
    $("#signup_button").toggle();
    $("#login_button").toggle();
  });



  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://localhost:3000/results');
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);

    if (!ourData.length) {
      document.getElementById('historyStat').style.display = 'block';
    }
    else {
      document.getElementById('historyStat').style.display = 'none';
      renderHTML(ourData);

    }

  };
  ourRequest.send();

  var q1, q2, q3, q4, q5;
  var marks = [];
  function renderHTML(data) {

    console.log(userInfo);

    var htmlPass = 0, cssPass = 0, jsPass = 0,nodePass = 0, bootPass = 0, sassPass = 0, boot = 0, sass = 0, node = 0, html = 0, css = 0, js = 0, count=1;
    
    for (var i = 0; i < data.length; i++) {

      if (data[i].userid == userInfo.userId) {

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.append(count++);
        var td2 = document.createElement('td');
        td2.append(data[i].subject);
        var td3 = document.createElement('td');
        td3.append(data[i].marksObtained);
        var td4 = document.createElement('td');
        td4.append(data[i].totalMarks);
        
        var td5 = document.createElement('td');
        let sec = data[i].timeElapsed.split(':');
        let min = 3 - (parseInt(sec[0])+1);
        let sec1 = 60 - (parseInt(sec[1]));
        td5.append(min+':'+sec1);
        
        var td6 = document.createElement('td');
        td6.append(data[i].dateTime);

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);

        marks.push(data[i].marksObtained);
        console.log(data[i].marksObtained);

        document.getElementById('tbody').append(tr);

        if (data[i].subject == 'HTML' || data[i].subject == 'html') {
          html++;
          if (parseInt(data[i].percentage) > 50)
            htmlPass++;
        }
        if (data[i].subject == 'CSS' || data[i].subject == 'css') {
          css++;
          if (parseInt(data[i].percentage) > 50)
            cssPass++;
        }
        if (data[i].subject == 'JS' || data[i].subject == 'js') {
          js++;
          if (parseInt(data[i].percentage) > 50)
            jsPass++;
        }

        if (data[i].subject == 'BOOTSTRAP' || data[i].subject == 'bootstrap') {
          boot++;
          if (parseInt(data[i].percentage) > 50)
            bootPass++;
        }
        if (data[i].subject == 'SASS' || data[i].subject == 'sass') {
          sass++;
          if (parseInt(data[i].percentage) > 50)
            sassPass++;
        }
        if (data[i].subject == 'NODE' || data[i].subject == 'node') {
          node++;
          if (parseInt(data[i].percentage) > 50)
            nodePass++;
        }
      }

    }

    $('.htmlCount').text(html);
    $('.cssCount').text(css);
    $('.jsCount').text(js);


    $('.htmlpass').text(htmlPass);
    $('.csspass').text(cssPass);
    $('.jspass').text(jsPass);


    $('.htmlfail').text(parseInt(html) - parseInt(htmlPass));
    $('.cssfail').text(parseInt(css) - parseInt(cssPass));
    $('.jsfail').text(parseInt(js) - parseInt(jsPass));


    $('.bootCount').text(boot);
    $('.sassCount').text(sass);
    $('.nodeCount').text(node);


    $('.bootpass').text(bootPass);
    $('.sasspass').text(sassPass);
    $('.nodepass').text(nodePass);


    $('.bootfail').text(parseInt(boot) - parseInt(bootPass));
    $('.sassfail').text(parseInt(sass) - parseInt(sassPass));
    $('.nodefail').text(parseInt(node) - parseInt(nodePass));

    console.log(marks);
    q1 = marks[marks.length - 1];
    q2 = marks[marks.length - 2];
    q3 = marks[marks.length - 3];
    q4 = marks[marks.length - 4];
    q5 = marks[marks.length - 5];

    console.log(q1);
    console.log(q2);
    Chart.defaults.global.defaultFontColor='white';
    new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: ["Quiz-1", "Quiz-2", "Quiz-3", "Quiz-4", "Quiz-5"],
        datasets: [
          {
            label: "Quiz result",
            backgroundColor: ["#3aafa9", "#3aafa9", "#3aafa9", "#3aafa9", "#3aafa9"],
            data: [q1, q2, q3, q4, q5]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    min:0,
                    max:5
                }
            }]
        }
        
      }
    });


  }


})