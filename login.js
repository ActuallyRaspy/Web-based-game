function customLoginHandler() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Hårdkodad kontroll för användaren "hacker"
  if (username === "hacker" && password === "123") {
    // Hantera inloggning lokalt för "hacker"
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("startContainer").style.display = "block";
    return false;  // Förhindra att formuläret skickas till servern
  }

  // För andra användare: hash lösenordet innan det skickas
  const hashedPassword = CryptoJS.SHA256(password).toString();

  // Fyll det dolda fältet med det hashade lösenordet
  document.getElementById("hashedPassword").value = hashedPassword;

  // Töm det vanliga lösenordsfältet så att användaren inte ser den långa hash-strängen
  document.getElementById("password").value = "";

  // Tillåt formuläret att skicka POST-begäran till servern
  return true;
}

