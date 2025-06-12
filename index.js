//Event handler for when digits are pressed
let newline = true;
let vaule1;
let currentOperator;
function digitBtnPressed(button) {
  if (newline) {
    document.getElementById("inputBox").value = button;
    newline = false;
  } else {
    let currentValue = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = currentValue + button;
  }
}
// Event Handler when AC button is pressed
function btnACPressed() {
  document.getElementById("inputBox").value = "0";
  newline = true;
}
function operatorBtnPressed(operator) {
  currentOperator = operator;
  value1 = parseInt(document.getElementById("inputBox").value);
  newline = true;
}
function calculateResult() {
  let value2 = parseInt(document.getElementById("inputBox").value);
  let finalTotal;

  switch (currentOperator) {
    case "+":
      finalTotal = value1 + value2;
      break;
    case "-":
      finalTotal = value1 - value2;
      break;
    case "x":
      finalTotal = value1 * value2;
      break;
    case "/":
      finalTotal = value1 / value2;
      break;
    default:
      finalTotal = "Error";
  }
  document.getElementById("inputBox").value = finalTotal;
  value1 = 0;
  newline = true;
}
