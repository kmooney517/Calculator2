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

//Response to being clicked
var display0 = function(){
  answer.textContent = answer.textContent + '0';
};
var display1 = function (){
  answer.textContent = answer.textContent + '1';
};
var display2 = function(){
  answer.textContent = answer.textContent + '2';
};
var display3 = function (){
  answer.textContent = answer.textContent +'3';
};
var display4 = function(){  
  answer.textContent = answer.textContent + '4';
};
var display5 = function (){
  answer.textContent = answer.textContent + '5';
};
var display6 = function(){
  answer.textContent = answer.textContent + '6';
};
var display7 = function (){
  answer.textContent = answer.textContent + '7';
};
var display8 = function(){
  answer.textContent = answer.textContent + '8';
};
var display9 = function (){
  answer.textContent = answer.textContent + '9';
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


