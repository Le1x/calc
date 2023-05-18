//let num1 = 254
//let num2 = 542
//document.getElementById("num1-el").textContent = num1
//document.getElementById("num2-el").textContent = num2
//let num1 = parseFloat(document.getElementById("num1-el").value);
//let num2 = parseFloat(document.getElementById("num2-el").value);
let total = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    totaladd = num1 + num2
    total.textContent = totaladd
}
// why did we mention let num 1 and num 2 both outside and inside 
function substract() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
  let num2 = parseFloat(document.getElementById("num2-el").value);
    totalsub = num1 - num2
    total.textContent = totalsub
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
  let num2 = parseFloat(document.getElementById("num2-el").value);
    totaldiv = num1 / num2
    total.textContent = totaldiv
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
  let num2 = parseFloat(document.getElementById("num2-el").value);
    totalmult = num1 * num2
    total.textContent = totalmult
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


