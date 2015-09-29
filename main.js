//Functions that return Solutions
var sum = function (x, y) {
  return x + y;
};
var difference = function (x, y) {
  return x - y;
};
var product = function (x, y) {
  return x * y;
};
var quotient = function (x, y) {
  return x / y;
};

//Number Inputs
var clear = document.querySelector('#clear');
var zero = document.querySelector('#zero');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
//Operator Inputs
var decimal = document.querySelector('#decimal');
var add = document.querySelector('#add');
var subtract = document.querySelector('#subtract');
var multiply = document.querySelector('#multiply');
var divide = document.querySelector('#divide');
var equal = document.querySelector('#equal');

//Declaration of Variables
var clr, num0, num1, num2, num3, num4, num5, num6, 
 num7, num8, num9, dec, add, sub, mult, div, equ;


//Response to being clicked
var display0 = function(){
  num0 = Number(zero.textContent);
  answer.textContent = num0;
};
var display1 = function (){
  num1 = Number(one.textContent);
  answer.textContent = num1;
};
var display2 = function(){
  num2 = Number(two.textContent);
  answer.textContent = num2;
};
var display3 = function (){
  num3 = Number(three.textContent);
  answer.textContent = num3;
};
var display4 = function(){
  num4 = Number(four.textContent);
  answer.textContent = num4;
};
var display5 = function (){
  num5 = Number(five.textContent);
  answer.textContent = num5;
};
var display6 = function(){
  num6 = Number(six.textContent);
  answer.textContent = num6;
};
var display7 = function (){
  num7 = Number(seven.textContent);
  answer.textContent = num7;
};
var display8 = function(){
  num8 = Number(eight.textContent);
  answer.textContent = num8;
};
var display9 = function (){
  num9 = Number(nine.textContent);
  answer.textContent = num9;
};
var displayDec = function(){
  dec = decimal.textContent;
  answer.textContent = dec;
};
var displayAdd = function (){
  add = add.textContent;
  answer.textContent = add;
};
var displaySub = function(){
  sub = subtract.textContent;
  answer.textContent = sub;
};
var displayMult = function (){
  mult = multiply.textContent;
  answer.textContent = mult;
};
var displayDiv = function(){
  div = divide.textContent;
  answer.textContent = div;
};
var displayEqu = function (){
  equ = equal.textContent;
  answer.textContent = equ;
};


//Click Events
zero.addEventListener('click', display0);
one.addEventListener('click', display1);
two.addEventListener('click', display2);
three.addEventListener('click', display3);
four.addEventListener('click', display4);
five.addEventListener('click', display5);
six.addEventListener('click', display6);
seven.addEventListener('click', display7);
eight.addEventListener('click', display8);
nine.addEventListener('click', display9);
decimal.addEventListener('click', displayDec);
add.addEventListener('click', displayAdd);
subtract.addEventListener('click', displaySub);
multiply.addEventListener('click', displayMult);
divide.addEventListener('click', displayDiv);
equal.addEventListener('click', displayEqu);



