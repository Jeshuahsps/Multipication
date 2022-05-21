var x; y; interface; question; answerBox; button;




function newQuestion(){
	document.body.innerHTML = "";
	interface = document.createElement("div");
	interface.id = "interface";
	document.body.appendChild(interface);
	question = document.createElement("p");
	question.innerText = "testing =";
	question.id = "question";
	interface.appendChild(question);
	answerBox = document.createElement("input");
	answerBox.id = "answer";
	button = document.createElement("button");
	button.id = "button";
	button.innerText = "answer";
	button.setAttribute("onclick","check()");
	interface.appendChild(button);
	x = Math.floor(Math.random()*8)+3;
	y = Math.floor(Math.random()*8)+3;
	question.innerText = x+" x "+y+" = ";
	question.appendChild(answerBox);
}

function check(){
	let response = answerBox.value;
	interface.innerHTML = "";
	if (response == x*y) {
		question.innerText = "correct";
		interface.appendChild(question);
		setTimeout(checked,2000);
	}else{
		question.innerText = "incorrect, "+x+" x "+y+" = "+(x*y);
		interface.appendChild(question);
		setTimeout(checked,3000);
	}
}

function checked(){
	newQuestion();
}