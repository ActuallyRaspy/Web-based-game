function customLoginHandler() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

 
  if (username === "hacker" && password === "123") {
   
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("startContainer").style.display = "block";
    return false;  
  }

  
  const hashedPassword = CryptoJS.SHA256(password).toString();

 
  document.getElementById("hashedPassword").value = hashedPassword;

  
  document.getElementById("password").value = "";

  
  return true;
}

