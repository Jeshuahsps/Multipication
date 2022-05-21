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
    uiLoops();
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
    problem.innerText = x + " x " + y + " =";
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
        errors.push([x, y, answer.value]);
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
        interface.setAttribute("class", null);
        interface.innerHTML = "";
        localStorage.setItem("errors", errors);
        stats();
    }
}

// Stats Function: Counts the errors and says "You got [errors] out of 10 wrong."
function stats() {
    let highFactor = [0, 0];
    // sample errors array data
    let errorDist = []
    // fill errorDist with zeros
    for (let i = 0; i <= max; i++) {
        errorDist[i] = 0;
    }
    // add error factors to dist
    for (i = 0; i < errors.length; i++) {
        errorDist[errors[i][0]]++;
        errorDist[errors[i][1]]++;
    }
    // find greatest number
    for (let i = max; i > 0; i--) {
        if (errorDist[i] > highFactor[1]) {
            highFactor = [i, errorDist[i]];
        }
    }
    let errorList = "";
    for (let i = 0; i < errors.length; i++) {
        errorList += errors[i][0] + " * " + errors[i][1] + " = " + (errors[i][0] * errors[i][1]) + " (" + errors[i][2] + ")\n";
    }
    let qWrong = document.createElement("p");
    qWrong.innerText = "You got " + errors.length + " out of " + questions + " questions wrong.";
    interface.appendChild(qWrong);
    if (highFactor[0] > 0) {
        localStorage.setItem("problemFactor", highFactor[0]);
        let pFactor = document.createElement("p");
        pFactor.setAttribute("margin-top", "25px");
        pFactor.innerText = "Your biggest problem factor was " + highFactor[0] + ".";
        interface.appendChild(pFactor);
    } else localStorage.setItem("problemFactor", null);
    let start = document.createElement("button");
    start.innerText = "Try again";
    start.id = "tryAgain";
    start.setAttribute("onclick", "document.location=\"setup.html\"");
    interface.appendChild(start);
    let tables = document.createElement("button");
    tables.id = "toTables";
    tables.innerText = "View multiplication tables";
    tables.setAttribute("onclick", "toTables()");
    interface.appendChild(tables);
    if (errors.length > 0) {
        let errorBack = document.createElement("div");
        errorBack.setAttribute("class", "border list");
        document.body.appendChild(errorBack);
        let listLabel = document.createElement("p");
        listLabel.id = "listLabel";
        listLabel.innerText = "These were your problem questions (what you answered):";
        errorBack.appendChild(listLabel);
        let list = document.createElement("p");
        list.id = "list";
        errorBack.appendChild(list);
        list.innerText = errorList;
    }
}

function toTables() {
    document.location = "tables.html";
}