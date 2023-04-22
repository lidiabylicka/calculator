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

//EVAL FUNCTION IS THA MAN!!!
//onto the bright dark mode

const toggle = document.getElementById("toggleBright");
const body = document.querySelector("body");
const calc = document.getElementsByClassName("calc");
console.log(calc);
toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (toggle.classList == "bi bi-brightness-high-fill") {
    calc.className = "calcBright";
  } else {
    calc.className = "calc";
  }
});
