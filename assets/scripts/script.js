// WittDtjr Questions //
// Copy and Paste Templates depend on how many questions I want to added in //
// Arrays //
//    const questions = [
//      {
//      question: "",
//      choices: ["a. ", "b. ", "c. ", "d. "],
//      answer: 
//      },
//    ]
// 10 Questions // 

const questions = [
    {
        // Question 1 //
        question: "Which one does not belong to Brake Pads Combo?",
        choices: ["A. Brake Grease", "B. Brake Caliper", "C. Brake Rotors", "D. Brake Caliper Tools"],
        answer: "D. Brake Caliper Tools"
    },
    {   
        // Question 2 //
        question: "Which one does not belong to Oil Filter Combo?",
        choices: ["A. Oil Filter Wrench", "B. Air Filter", "C. Fuel Filter", "D. Oil Drain Plugs"],
        answer: "D. Oil Drain Plugs"
    },
    {   
        // Question 3 //
        question: "Which one does not belong to Air Filter Combo?",
        choices: ["A. Transmission Filter", "B. Oil Filter", "C. Cabin Air Filter", "D. Fuel Filter"],
        answer: "A. Transmission Filter"
    },
    {   
        // Question 4 //
        question: "Which one does not belong to A/C Compressor Combo?",
        choices: ["A. A/C Accumulator", "B. A/C Drive Belt", "C. A/C Freons", "D. A/C Filter Drier"],
        answer: "C. A/C Freons"
    },
    {   
        // Question 5 //
        question: "Which one does not belong to Wiper Blades Combo?",
        choices: ["A. Rear Wiper Blade", "B. Windshield Washer Fluid", "C. De-Icer Fluids", "D. Rain-X Fogs Remover"],
        answer: "D. Rain-X Fogs Remover"
    },
    {   
        // Question 6 //
        question: "Which one does not belong to Brake Calipers Combo?",
        choices: ["A. Brake Pads", "B. Brake Hardware", "C. Wheel Cylinder", "D. Brake Fluid"],
        answer: "D. Brake Fluid"
    },
    {   
        // Question 7 //
        question: "Which one does not belong to Radiator Combo?",
        choices: ["A. AntiFreezes", "B. Radiator Cap", "C. Coolant Recovery Tank", "D. Thermostats"],
        answer: "C. Coolant Recovery Tank"
    },
    {
        // Question 8 //
        question: "Which one does not belong to Spark Plugs Combo?",
        choices: ["A. Ignition Coils", "B. Wireset", "C. Distributor Caps", "D. Distributor Rotors"],
        answer: "A. Ignition Coils"
    },
    {   
        // Question 9 //
        question: "What is the most missed opportunities on WittDtjr ScoreBoard?",
        choices: ["A. Oil Filters", "B. Batteries", "C. Wiper Blades", "D. Radiator"],
        answer: "A. Oil Filters"
    },
    {   
        // Question 10 //
        question: "Which one does not belong to Batteries Combo?",
        choices: ["A. Battery Installation Kit (BT-1K)", "B. Battery Greases (BTP-1)", "C. Battery Washer (BWB-1)", "D. DiElectric Grease (CP-1A)"],
        answer: "D. DiElectric Grease (CP-1A)"
    }   
];

// getElementById //

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

/* Adding timer */

var totalTime = 181;
function newQuiz() {
    questionIndex = 0;
    totalTime = 180;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};
/* nextQuestion to move onto next */

function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        
        correctAns++;
        
        answerCheck.textContent = "Correct!";
    } else {
        // Reducing down 5 seconds from quiz if answered wrong //
        totalTime -= 5;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++; 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }


function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    // Final Scores //
    finalScore.textContent = correctAns;
}


function storeHighScores(event) {
    event.preventDefault();


    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";   

    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    

    showHighScores();
}

// showHighScores() function //
var i = 0;
function showHighScores() {

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // Local Storage, Checking HS //
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

// addEventListener("click",) //

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute("style", "font-family: 'Times Roman', serif; font-style: italic;");

});

