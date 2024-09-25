
function startGame() {
  window.location.href = "game.html";
}

function showHighScores(){
  window.location.href = "highscores.html";
}

function logOut(){
  if (confirm("Are you sure you want to log out?")) 
    window.location.href = "login.html";
}
