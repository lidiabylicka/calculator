//1. print pressed value in the 'use me' result box:
const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".result");

let calculating = [];
let valsJoined;

function countMe(button) {
  const val = button.textContent;
  if (val == "clear") {
    calculating = [];
    screen.textContent = ".";
  } else if (val === "=") {
    screen.textContent = eval(valsJoined);
  } else {
    calculating.push(val);
    valsJoined = calculating.join("");
    screen.textContent = valsJoined;
  }
}
buttons.forEach((button) =>
  button.addEventListener("click", () => countMe(button))
);

//EVAL FUNCTION !!!
//onto the bright / dark mode:

const toggle = document.getElementById("toggleBright");
const body = document.querySelector("body");
const calc = document.querySelector(".calcDark");
const sign = document.querySelector(".sign");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
});

toggle.addEventListener("click", function () {
  if (toggle.classList.contains("bi-moon")) {
    buttons.forEach((button) => (button.className = "button"));
    calc.className = "calcDark";
    body.className = "dark";
    screen.className = "result";
    sign.className = "sign";
    clear.className = "clear";
  } else {
    buttons.forEach((button) => (button.className = "buttonBright"));
    calc.className = "calcBright";
    body.className = "bright";
    screen.className = "brightResult";
    sign.className = "signBright";
    clear.className = "clearBright";
  }
});
