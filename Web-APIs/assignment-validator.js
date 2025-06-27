function clickMe() {

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    myRightUserName = 'nakamatte';
    myRightPassword = 'deborah';

    if (user === myRightUserName && pass === myRightPassword) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
    } else {
        alert("Invalid username or password. Please try again.");

    }
} 

function myClick(){
    console.log("Button clicked");
     let storedUserName = localStorage.getItem("username");
     console.log(storedUserName);
     let storedPassword = localStorage.getItem("password");
     console.log(storedPassword);
     document.getElementById("store").innerHTML = "Username: " + storedUserName + "<br>Password: " + storedPassword;
}
