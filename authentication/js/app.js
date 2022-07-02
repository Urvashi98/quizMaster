
// signup
function signUp(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phoneNumber = document.getElementById("phone").value;

    if(phoneNumber.length == 10){

        // Creates the new user in firebase
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            alert("Signed Up");
              postDataToUserJson(email,md5(password),phoneNumber);             // invokes the post to json
            })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    } 
    else{

    }  

    insert();      // invokes the insert()  
}

//post to user json
function postDataToUserJson(email,password,phoneNumber){

    if(!email && !password && !phoneNumber){
        alert("Not got email");
    }

    else{
        var data={
             "email":email,
             "password":password,
             "phone":phoneNumber
         };

        const Http = new XMLHttpRequest();
        const url='http://localhost:3001/users';
        Http.open("POST", url);
        Http.setRequestHeader("Content-Type", "application/json"); 
        Http.send(JSON.stringify(data));

        Http.onreadystatechange = (e) => {
            window.location.href="login.html";
        }
    }
}
// login
function loginData(event){

    event.preventDefault();
    getemail = document.getElementById("email").value;
    getPwd = document.getElementById("password").value;

    if(getemail != "" && getPwd != ""){
        // Logins with user credentials
       firebase.auth().signInWithEmailAndPassword(getemail, getPwd)
                    .then((user) => {
                            localStorage.setItem("NewUser",getemail);
                            alert('you can attempt quiz now!');
                            window.location.href = "../../index.html";
                        })
                        .catch((error) => {
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            alert("something went wrong!");
                    });
        }
        else{
            alert("Please enter your credentials");
        }

}

// Forget Password functionality
function forgetPassword(){
    
    let auth = firebase.auth();
    let forgetEmail = document.getElementById("email").value;

    if(forgetEmail){

        // Reset password functionality from firebase
        auth.sendPasswordResetEmail(forgetEmail).then(function() {
            
          })
          .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
          });
          alert("Sent successfully");
    }
    else{
        alert("Please Enter Email to reset the Password!");
    }
}

// fetches the values from the textboxes
let getName,getPhone;
let getemail,getPwd;

function ready(){
    getName = document.getElementById("username").value;
    getPhone = document.getElementById("phone").value;
}

// Inserting the data into the Firebase.
function insert(){

    ready();                                                            // invokes the ready() 
    let convertoInt = parseInt(getPhone);

    if(getPhone.length == 10){

        // inserts the data into the firebase.
        firebase.database().ref('users/'+ convertoInt).set({
            NameOfUser:getName,
            Phone:getPhone,
        });
    }
    else{
    }
}