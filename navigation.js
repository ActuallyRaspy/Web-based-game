function showMenu(){
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("startContainer").style.display = "block";
    
  }

  function showScoreboard(){
    document.getElementById("scoreboardContainer").style.display = "block";
    document.getElementById("startContainer").style.display = "none";
  }

  function returnScoreboard(){
    document.getElementById("scoreboardContainer").style.display = "none";
    document.getElementById("startContainer").style.display = "block";
  }

  function showLogin(){
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("startContainer").style.display = "none";
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("scoreboardContainer").style.display = "none";
  }

  function showGame(){
    document.getElementById("gameContainer").style.display = "block";
    document.getElementById("startContainer").style.display = "none";
    document.getElementById("exit-btn").style.display = "block";
  }

  function exitGame(){
    document.getElementById("startContainer").style.display = "block";
    document.getElementById("gameContainer").style.display = "none";
  }