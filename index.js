const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");
// const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

buttons.addEventListener("click", (e) => {
  if (e.target.value == "AC") {
    display.value = "";
  } else if (e.target.value == "DEL") {
    let val = display.value;
    display.value = val.substring(0, val.length - 1);
  } else if (e.target.value == "=") {
    display.value = eval(display.value);
  } else {
    display.value += e.target.value;
  }
});
