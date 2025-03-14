console.log("Login JS loaded");

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (userName === "admin" && password === "admin") {
    alert("Login successful");
    window.location.href = "index.html";
  }
  else {
    alert("Invalid credentials");
  }
});
