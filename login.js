function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginBox = document.querySelector('.login-box');
    const gameContainer = document.getElementById("game-container");
    const errorMessage = document.getElementById("error-message");

    const hashedPassword = CryptoJS.SHA256(password).toString();
    console.log("Entered Hashed Password: ", hashedPassword);

    const correctHashedPassword = CryptoJS.SHA256("123").toString();
    console.log("Expected Hashed Password: ", correctHashedPassword);
    

    if (username === "hacker" && hashedPassword === correctHashedPassword) {
      loginBox.style.display = "none";

      gameContainer.style.display = "block";
    } else {
      errorMessage.textContent = "Incorrect username or password.";
    }
  }