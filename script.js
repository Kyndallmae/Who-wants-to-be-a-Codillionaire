
var timeLeft = 30;
var timerInterval;
var timerEl = document.querySelector(".timer");
var questionSection = document.querySelector("#questionSection");
var feedbackSection = document.querySelector("#feedbackSection");
var score = 0;
var count = 0;
var questions = [{
    question: "1. What data type is 1234?", 
    answer: "3. Number",
    options: ["1. String", "2. Boolean", "3. Number", "4. Undefined"]
},
{
    question: "2. What data type is 'Hello World!'", 
    answer: "1. String",
    options: ["1. String", "2. Boolean", "3. Number", "4. Undefined"]
},
{
    question: "3. What data type is true/false?", 
    answer: "4. Boolean",
    options: ["1. String", "2. Boolean", "3. Number", "4. Undefined"]
},
{
    question: "4. What data type is empty?", 
    answer: "4. Undefined",
    options: ["1. String", "2. Boolean", "3. Number", "4. Undefined"]
}]

document.querySelector(".buttonB").addEventListener("click", startGame);
timerEl.textContent = timeLeft + " seconds left.";


function startGame() {
    score = 0
    console.log("time left", timeLeft)
    timerInterval = setInterval(interval, 1000);
    showQuestion()  
}

function showQuestion() {
    questionSection.innerHTML = ""
    var question = document.createElement("h2");
    question.textContent = questions[count].question
    questionSection.appendChild(question)
    for (var i = 0; i < questions[count].options.length; i++) {
        console.log("string test")
        var button = document.createElement("button");  
        button.textContent = questions[count].options[i]
        button.value = questions[count].options[i]
        button.addEventListener("click", function(event) {
            console.log(event.target.value)
           
            
            checkScore(event.target.value);
            
        })
        questionSection.appendChild(button)
    }
    
}

function checkScore(answer) {
    if (answer === questions[count].answer) {
        feedbackSection.textContent = "correct"
        score++
    }
    else {
        feedbackSection.textContent = "incorrect"
        timeLeft-=5;
        timerEl.textContent = timeLeft + " seconds left.";
    }
    count++
    if (count === questions.length) {
        return stopGame()
    } 
    setTimeout(function(){
        feedbackSection.innerHTML = " " 
        showQuestion();
    }, 2000)

}

function stopGame() {
    clearInterval(timerInterval);
    console.log("TIME IS UP!");
    alert("Time is up!");
}

function interval() {
    if (timeLeft > 0) {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds left.";
        console.log("time left", timeLeft);
        return;
    }
    
    stopGame();
}




