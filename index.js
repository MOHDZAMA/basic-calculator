const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

buttons.addEventListener("click", (e) => {
  if (e.target.value == "AC") {
    display.value = "";
  } else if (e.target.value == "DEL") {
    let val = display.value;
    display.value = val.substring(0, val.length - 1);
  } else {
    display.value += e.target.value;
  }
});
//Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //If output has '%', replace with '/100' before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //If DEL button is clicked, remove the last character from the output.
    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
};
