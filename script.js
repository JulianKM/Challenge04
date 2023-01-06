var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var opening = document.querySelector("#opening");
var timerEl = document.querySelector("#timer");
var initials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var feedbackEl = document.querySelector("#feedback");
var choicesEl = document.querySelector("#choices");
var answer = document.querySelector("#anser");
var time = 60;
var score = 0;

var questions = [
    {
        question: "what is the short cut for initial start-up html code?",
        answerChoice: ["a) !", "b) ?", "c) @", "d) $"],
        answer: "a"
    },
    {
        question: "which is considered the 'clothes' in coding?",
        answerChoice: ["a) css", "b) java", "c) html", "d) ?"],
        answer: "a"
    },
];

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    timerCount = 60;
}

initials();

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }
    }, 1000);    
}


function questionsEl () {
    if (time <= 0) {
        feedbackEl.textContent = "wrong";
        feedbackEl.color = "red";
} else {
    feedbackEl.textContent = "correct";
    feedbackEl.color = "blue"
}
}