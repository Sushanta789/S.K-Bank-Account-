function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function register() {
  let username = document.getElementById("regUser").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPass").value;
  
  if (username && email && password) {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Registration successful! You can now log in.");
    showLogin();
  } else {
    alert("Please fill in all fields");
  }
}

function login() {
  let username = document.getElementById("loginUser").value;
  let password = document.getElementById("loginPass").value;
  
  let storedUsername = localStorage.getItem("username");
  let storedPassword = localStorage.getItem("password");
  
  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Try again!");
  }
}
