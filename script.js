var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");
var btn = document.getElementById("loginBtn");
var closeBtns = document.getElementsByClassName("close");
var loginMessage = document.getElementById("loginMessage");
var signupMessage = document.getElementById("signupMessage");

btn.onclick = function() {
    loginModal.style.display = "block";
    signupModal.style.display = "none";
}

for (let span of closeBtns) {
    span.onclick = function() {
        loginModal.style.display = "none";
        signupModal.style.display = "none";
        loginMessage.innerText = "";
        signupMessage.innerText = "";
    }
}

window.onclick = function(event) {
    if (event.target === loginModal || event.target === signupModal) {
        loginModal.style.display = "none";
        signupModal.style.display = "none";
        loginMessage.innerText = "";
        signupMessage.innerText = "";
    }
}

document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "pass") {
        loginMessage.innerText = "Login successful!";
        loginModal.style.display = "none";
    } else {
        loginMessage.innerText = "Invalid username or password.";
    }
}

document.getElementById("signupForm").onsubmit = function(event) {
    event.preventDefault();

    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    signupMessage.innerText = "Account created successfully!";
    signupModal.style.display = "none";
}

document.getElementById("showSignup").onclick = function() {
    loginModal.style.display = "none";
    signupModal.style.display = "block";
    loginMessage.innerText = "";
}

document.getElementById("showLogin").onclick = function() {
    signupModal.style.display = "none";
    loginModal.style.display = "block";
    signupMessage.innerText = "";
}
