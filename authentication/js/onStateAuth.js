firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            var userId = firebase.auth().currentUser.uid;     // User is signed in.
                if(userId != null){
                    localStorage.setItem('LoggedInUser', JSON.stringify({userId:userId,email: user.email}));
                    localStorage.setItem("NewUser",user.email);
                    
                    //  Hiding the login icon and showing the Dashboard
                    $('#dashboard').show();
                    $('#myInput').show();
                    $('#login_icon').hide();
                    $('#useremail').text('Hi, ' + user.email);
                    $('#logout').css({display: 'block'});
                }   
        } else {
            // No user is signed in
            }
        }); 