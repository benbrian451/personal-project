 
  function login() {
  const emailInput = document.getElementById("emailInput");
  const passwordField = document.getElementById("passwordField");
  const messageDiv = document.getElementById("message");

  const email = emailInput.value;
  const password = passwordField.value;

  const validEmail = "admin@gmail.com";
  const validPassword = "1234";

  messageDiv.classList.remove('fade-out'); 
  messageDiv.style.opacity = 1; 

  if (email === "" || password === "") {
    messageDiv.textContent = "Please enter both email and password.";
    return;
  }

  if (email === validEmail && password === validPassword) {
    messageDiv.style.color = "green";
    messageDiv.textContent = "Login successful!";
    setTimeout(() => {
      messageDiv.classList.add('fade-out');
    }, 2000); 
  } else {
    messageDiv.style.color = "red";
    messageDiv.textContent = "Invalid credentials. Try again.";
    setTimeout(() => {
      messageDiv.classList.add('fade-out');
    }, 2000);
  }}