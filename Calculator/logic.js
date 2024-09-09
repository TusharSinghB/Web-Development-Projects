const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const double_zero = document.querySelector("#double_zero");
const point = document.querySelector("#point");

const add = document.querySelector("#Addition");
const minus = document.querySelector("#Subtraction");
const divide = document.querySelector("#Division");
const cross = document.querySelector("#Multiplication");
const total = document.querySelector("#calculate");
const clear = document.querySelector("#clear");

const display = document.querySelector("#display");
let current_value = "";
let control = false;

update();

function update() {
  one.onclick = () => increment("1");
  two.onclick = () => increment("2");
  three.onclick = () => increment("3");
  four.onclick = () => increment("4");
  five.onclick = () => increment("5");
  six.onclick = () => increment("6");
  seven.onclick = () => increment("7");
  eight.onclick = () => increment("8");
  nine.onclick = () => increment("9");
  zero.onclick = () => increment("0");
  add.onclick = () => incrementOp("+");
  minus.onclick = () => incrementOp("-");
  divide.onclick = () => incrementOp("/");
  cross.onclick = () => incrementOp("*");
  point.onclick = () => incrementOp(".");
  total.onclick = () => calculate();
  clear.onclick = () => cleared();

  double_zero.onclick = double_0;
}
function addition() {}
function increment(number) {
  current_value += number;
  display.innerHTML = current_value;
  control = true;
}
function incrementOp(number) {
  if (control) {
    current_value += number;
    display.innerHTML = current_value;
    control = false;
  }
}
function double_0() {
  increment(0);
  increment(0);
}

function calculate() {
  let result = eval(current_value);
  display.innerHTML = result;
  current_value = result;
}
function cleared() {
  current_value = "";
  display.innerHTML = current_value;
  control = false;
}
