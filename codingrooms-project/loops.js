/* Function to run whichever loop we picked */
var questions = parseInt(localStorage.getItem("questions"));
var max = parseInt(localStorage.getItem("max"));
var min = parseInt(localStorage.getItem("min"));
var errors = [];
var questionNum = 1;
var x;
var y;
var interface;
var answer;
var question;
var problem;
var submit;
var nextQuestion;
function startLoop() {
    let startButton = document.getElementById("start");
    startButton.remove();
    //forLoop();
    uiLoops();
}

function forLoop() {
    for (let question = 1; question <= questions; question++) {
        let error = askQuestion();
        if (error[0] > 0) {
            error.splice(0, 1);
            errors.push(error);
        }
    }
}



function askQuestion() {
    let error = [0, 0, 0];
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    let y = Math.floor(Math.random() * (max - min + 1)) + min;
    let product = x * y;
    let answer = prompt(x + " X " + y + " = ?");
    if (answer == product) alert("Correct!");
    else if (answer == "q") {
        //break;
    } // added to let us stop the madness
    else {
        alert("Incorrect! " + x + " X " + y + " = " + product);
        error = [1, x, y];
    }
    return error;
}

function uiLoops() {
    x = Math.floor(Math.random() * (max - min + 1)) + min;
    y = Math.floor(Math.random() * (max - min + 1)) + min;
    interface = document.getElementById("interface");
    interface.innerHTML = "";
    interface.setAttribute("class", "border");
    question = document.createElement("p");
    question.innerText = "Question " + questionNum + " of " + questions + ":";
    interface.appendChild(question);
    problem = document.createElement("p");
    problem.id = "problem";
    problem.innerText = x+" x "+y+" =";
    interface.appendChild(problem);
    answer = document.createElement("input");
    problem.appendChild(answer);
    submit = document.createElement("button");
    submit.id = "submit";
    submit.innerText = "Submit Answer";
    interface.appendChild(submit);
    submit.setAttribute("onclick", "getAnswer()");
}

function getAnswer() {
    questionNum++;
    answer.remove();
    submit.remove();
    problem.remove();
    if (answer.value != x * y) {
        question.innerText = "Incorrect, " + x + " x " + y + " = " + x * y;
        errors.push([x, y]);
        nextQuestion = setInterval(next, 2500, 0);
    } else {
        question.innerText = "Correct";
        nextQuestion = setInterval(next, 1000, 0);
    }
}

function next() {
    nextQuestion = clearInterval(nextQuestion);
    if (questionNum <= questions) {
        uiLoops();
    }
    else {
        interface.setAttribute("class",null);
        interface.innerHTML = "all questions complete";
        localStorage.setItem("errors",errors);
        document.location = 'stats.html';
    }
}