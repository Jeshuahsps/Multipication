/* This is where we print out the times tables */
var problemFactor;
function tables() {
    let factor = 0;
    let min = localStorage.getItem("min");
    let max = localStorage.getItem("max");
    if (problemFactor == undefined) problemFactor = localStorage.getItem("problemFactor");
    else problemFactor = 0;
    let table = document.getElementById("table");
    if(problemFactor > 0) factor = problemFactor;
    else factor = prompt("Times tables for");

    let tableText = "Table for "+factor+"\n";
    for (let row = min; row <= parseInt(max); row++) {
        tableText += factor + " * " + row + " = " + factor * row + "\n";
    }
    table.innerText = tableText;
    }

//loop
/* for (let row = min; row <= parseInt(max); row++) {
    tableText += factor + " * " + row + " = " + factor * row + "\n";
    }
 */