// Setup is where we change the values of globals

function getStats() {
    let minInput = document.getElementById("min");
    let maxInput = document.getElementById("max");
    let queInput = document.getElementById("questions");
    if (Number.isInteger(parseInt(minInput.value)) && Number.isInteger(parseInt(maxInput.value)) && Number.isInteger(parseInt(queInput.value)) && parseInt(minInput.value) < parseInt(maxInput.value) && parseInt(queInput.value) > 0) {
        let questions = parseInt(document.getElementById("questions").value);
        let min = parseInt(document.getElementById("min").value);
        let max = parseInt(document.getElementById("max").value);
        localStorage.setItem("questions", questions);
        localStorage.setItem("max", max);
        localStorage.setItem("min", min);
        document.location = 'loops.html';
    }
    else alert("Input error");
}