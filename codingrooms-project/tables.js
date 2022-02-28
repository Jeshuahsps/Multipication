/* This is where we print out the times tables */
var min = localStorage.getItem("min");
var max = localStorage.getItem("max");
var problemFactor = localStorage.getItem("problemFactor");

function tables(factor){
    let table = document.getElementById("table");
    if(factor == null){
        factor = prompt("Times tables for ");
    }
    let tableText = "Table for "+factor+ "\n";
    for (let row = min; row <= parseInt(max); row++){
        tableText += factor+ " * " +row+ " = "+ factor*row + "\n";
    }
    //table.innerText = tableText
    alert(tableText);
}