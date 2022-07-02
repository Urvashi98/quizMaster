var total_user = 0;

$(document).ready(function () {


    var login = localStorage.getItem("loggedIn"); 
  
    if(login == 'true'){ 

        $.get("http://localhost:3001/users",
            function (data, textStatus, jqXHR) {
                
                    for(var i=0; i< data.length; i++){
                       
                        $('#userList').append(`<tr id="row${data[i].id}"> 
                        <td id="id${data[i].id}"> ${data[i].id}</td>
                        <td id="id${data[i].email}"> ${data[i].email}</td>
                        <td id="name${data[i].password}">${data[i].password}</td> 
                        <td id="name${data[i].phone}">${data[i].phone}</td>
                        <td> <i id="${data[i].id}" class="fas fa-trash-alt delete ml-4"  phone=${data[i].phone}></i> </td> 
                        <td><!--<button id="${data[i].id}" class="btn btn-danger deleteFirebase" phone=${data[i].phone}>Delete Firebase</button>--></td> 
                        <tr/> `);
                        total_user ++;
                    
                    }
                console.log(total_user);

                $('#total_users').text(total_user);
            }
    );

    /* DELETE USER */
    $('#userList').on("click",".delete",null,function(){
        var id = $(this).attr("id");    //delete from user json
        // var phone = $(this).attr("phone");  //to delete from firebase db
        deleteData(id);
        // deletefromFirebase(phone);
    
   });

  /*  $('.firebase').on("click",".deleteFirebase",null,function(){
        console.log("Fitrebase");
        var phone = $(this).attr("phone");  //to delete from firebase db
        deletefromFirebase(phone);
    }); */

    let status;
    function confirmBox(){
        status = confirm("Are you sure?");
    }

   function deleteData(id){
    confirmBox()
    if(status == true){
            $.ajax(
                {
                type:'DELETE',

                url: `http://localhost:3001/users/${id}`,

                success: function(data){
                    alert("Deleted succesfully");
                },
                error:function(){
                    console.log("error");
                }
                }
            );
        }
        else{
            console.log("In else!");
        }
    }

  /*    function deletefromFirebase(phone){
         confirmBox();

         if(status == true){
            console.log(typeof(phone));
            let parsePhone = parseInt(phone);
            console.log("ParsePhoen:",parsePhone);

            var adaRef = firebase.database().ref('users/'+parsePhone);
            adaRef.remove()
            .then(function() {
                console.log("Remove succeeded.")
                alert("Deleted Successfully from Firebase!");
            })
            .catch(function(error) {
                console.log("Remove failed: " + error.message)
            })
        }
     } */

    }
    else{
            window.location.href = "index.html";
    }

});