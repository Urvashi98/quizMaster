
function logout() {
  console.log("In logout!");
  firebase.auth().signOut().then(() => {
    localStorage.removeItem('LoggedInUser');
    localStorage.removeItem('NewUser');
    alert("Logout");                            // Sign-out successful.
    window.location.href = "../index.html";
  })
    .catch((error) => {
      // An error happened.
    });
}
