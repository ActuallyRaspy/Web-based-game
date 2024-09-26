function login() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const hashedPassword = CryptoJS.SHA256(password).toString();
  console.log("Entered Hashed Password: ", hashedPassword);

  const correctHashedPassword = CryptoJS.SHA256("123").toString();
  console.log("Expected Hashed Password: ", correctHashedPassword);
  
  if (username == "hacker" && hashedPassword == correctHashedPassword) {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("startContainer").style.display = "block";

  } else {
    alert("Incorrect username or password.");
  }
}