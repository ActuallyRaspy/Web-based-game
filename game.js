let score = 0;
let time = 10;
let currentQuestion = 0;
let timerInterval;

const questions = [
    { 
        question: "Vad står HTML för?", 
        answers: ["HyperText Markup Language", "HyperLink Markup Language", "HyperTool Markup Language", "HyperTag Markup Language"], 
        correct: 0 
    },
    { 
        question: "Vilket HTML-element används för att skapa en länk?", 
        answers: ["<link>", "<href>", "<a>", "<l>"], 
        correct: 2 
    },
    { 
        question: "Vilket attribut används för att öppna en länk i ett nytt fönster/flik?", 
        answers: ['target="_self"', 'target="_blank"', 'href="_new"', 'window="_blank"'], 
        correct: 1 
    },
    { 
        question: "Vilket av följande är inte en CSS-färgmodell?", 
        answers: ["RGB", "CMYK", "HSL", "HEX"], 
        correct: 1 
    },
    { 
        question: "Hur refererar man till en klass i CSS?", 
        answers: [".classname", "#classname", "classname", "%classname%"], 
        correct: 0 
    },
    { 
        question: "Vilket CSS-attribut används för att ändra textens färg?", 
        answers: ["background-color", "text-style", "font-color", "color"], 
        correct: 3 
    },
    { 
        question: "Vilket JavaScript-kommando används för att skriva ut något i webbläsarens konsol?", 
        answers: ["print()", "console.log()", "echo()", "write.console()"], 
        correct: 1 
    },
    { 
        question: "Vilken typ av data returnerar document.getElementById() i JavaScript?", 
        answers: ["En sträng", "Ett HTML-element", "Ett objekt", "En array"], 
        correct: 1 
    },
    { 
        question: "Vad används addEventListener() till i JavaScript?", 
        answers: ["För att skapa HTML-element", "För att bifoga en event-hanterare till ett element", "För att lägga till en ny stil till ett element", "För att ladda ett JavaScript-bibliotek"], 
        correct: 1 
    },
    { 
        question: "Vad står CSS för?", 
        answers: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Scripts", "Cascading Script Styles"], 
        correct: 1 
    }
];

function startGameLogic() {
    score = 0;
    currentQuestion = 0;
    time = 30;
    document.getElementById('score').textContent = score;
    document.getElementById('time').textContent = time;

    document.querySelector('.answerOptions').style.display = "flex";
    document.getElementById('restartButton').style.display = "block";
    document.getElementById('exit-btn').style.display = "block";

    loadQuestion();
    clearInterval(timerInterval);
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(function() {
        if (time > 0) {
            time--;
            document.getElementById('time').textContent = time;
        } else {
            endGame();
        }
    }, 1000);
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const questionObj = questions[currentQuestion];
        document.getElementById('question').textContent = questionObj.question;
        const answerButtons = document.querySelectorAll('.answer-btn');
        answerButtons.forEach((btn, index) => {
            btn.textContent = questionObj.answers[index];
        });
    } else {
        endGame();
    }
}

function selectAnswer(answerIndex) {
    const correctAnswer = questions[currentQuestion].correct;
    const answerButtons = document.querySelectorAll('.answer-btn');
    

    answerButtons.forEach(btn => btn.disabled = true);

    if (answerIndex === correctAnswer) {
        answerButtons[answerIndex].classList.add('correct');
        console.log('Correct answer selected:', answerIndex);
        score++;
        document.getElementById('score').textContent = score;
    } else {
        answerButtons[answerIndex].classList.add('wrong');
        answerButtons[correctAnswer].classList.add('correct'); 
        console.log('Wrong answer selected:', answerIndex);
    }

    setTimeout(() => {
      currentQuestion++;
      loadQuestion();
      answerButtons.forEach(btn => {
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
          
      });
  }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    document.getElementById('question').textContent = "Game Over!";
    document.getElementById('question').classList.add('game-over');
    document.querySelector('.answerOptions').style.display = "none";
    alert("Game over! Your score is " + score);

    let scores = JSON.parse(localStorage.getItem('scores')) || [];

    scores.push(score);

    localStorage.setItem('scores', JSON.stringify(scores));

    document.getElementById('restartButton').style.display = "block";
    document.getElementById('exit-btn').style.display = "block";
  }

function showScoreboard() {
    document.getElementById("scoreboardContainer").style.display = "block";
    document.getElementById("startContainer").style.display = "none";

    let scores = JSON.parse(localStorage.getItem('scores')) || [];

    scores.sort((a, b) => b - a);
    let topScores = scores.slice(0, 5);

    let scoreListHTML = topScores.map(score => `<li>Your score: ${score} points</li>`).join('');
    document.querySelector('.scoreboardContent ul').innerHTML = scoreListHTML;
}
