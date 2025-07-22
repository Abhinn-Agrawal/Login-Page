const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const showLogin = document.getElementById("showLogin");
const showSignup = document.getElementById("showSignup");

let users = [];

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    const signupError = document.getElementById("signupError");

    if (users.some(user => user.username === username)) {
        signupError.textContent = "Username already exists.";
    } else {
        users.push({ username, password });
        alert("Sign up successful! You can now log in.");
        signupForm.reset(); 
        signupError.textContent = ""; 
    }
});

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const loginError = document.getElementById("loginError");

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert("Login successful!");
        loginForm.reset(); 
        loginError.textContent = "";
    } else {
        loginError.textContent = "Invalid username or password.";
    }
});

showLogin.addEventListener("click", function() {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

showSignup.addEventListener("click", function() {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
});
