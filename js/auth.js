const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Login UI submitted (backend not connected)");
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Signup UI submitted (backend not connected)");
  });
}
