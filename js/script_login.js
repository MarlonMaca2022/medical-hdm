const userer = "Myuser@yahoo.es";
const password = "12345";
const formlogin = document.getElementById("loginForm");

function login() {
    let inputUser = document.getElementById("email").value;
    let inputPassword = document.getElementById("pass").value;

    if (inputUser === userer && inputPassword === password) {
        alert("Login successful!");
        window.location.href = "preguntas.html"; // Redirect to home page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

formlogin.addEventListener("submit", function(event) {
    console.log("Form submitted");
    event.preventDefault(); // Prevent form from submitting normally
    login();
});

