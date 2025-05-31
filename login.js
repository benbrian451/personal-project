 
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
    } else {
      alert(`Welcome back to DashHorizon Motors, ${email}!`);
    
    }
  });

  
  const passwordField = document.getElementById("password");
  const toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.textContent = "Show Password";
  toggleBtn.style.marginTop = "5px";

  passwordField.parentElement.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    const isHidden = passwordField.type === "password";
    passwordField.type = isHidden ? "text" : "password";
    toggleBtn.textContent = isHidden
  })