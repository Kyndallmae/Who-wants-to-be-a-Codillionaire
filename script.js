
var timeLeft = 5;
var timerInterval;
var timerEl = document.querySelector(".timer");

document.querySelector(".buttonB").addEventListener("click", startGame);
timerEl = timeLeft + " seconds left.";

function startGame() {
    console.log("time left", timeLeft)
    timerInterval = setInterval(interval, 1000);
    
}

function stopGame() {
    clearInterval(timerInterval);
    console.log("TIME IS UP!");
    alert("Time is up!");
}

function interval() {
    if (timeLeft > 0) {
        timeLeft--;
        console.log("time left", timeLeft);
        return;
    }
    
    stopGame();
}

var questions = ["1. What data type is 1234?", "2. What data type is 'Hello World!'", "3. What data type is true/false?", "4. What data type is empty?<"];
var answers = ["1. String", "2. Boolean", "3. Number", "4. Undefined"]

