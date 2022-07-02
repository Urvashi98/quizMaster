firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        var userId = firebase.auth().currentUser.uid;     // User is signed in.
            if(userId != null){

            }   
    } else {
        // No user is signed in
        window.location.href = "../index.html";
        }
    }); 