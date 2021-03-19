//-- FUNCTION EXPRESSION ASSIGNMENT

"use strict"

//QUESTION FOUR ...GCD

let greatestCommonDivisor=function gcd(number1, number2){

    if(number2==0) {return number1;}

    else {
      let ramainder = number1 % number2; 
      return gcd(number2, ramainder);
    }
}

console.log(greatestCommonDivisor(18, 12));

//QUESTION FIVE and SIX ...LCM from GCD function

let leastCommonMultiple = function lcm(a, b){
    let result= Math.abs(a*b)/greatestCommonDivisor(a, b);
    return result;
}

console.log(leastCommonMultiple(12, 18));





//QUESTION SEVEN ...compute function and with operand call back function;
const compute = function compute(add, a , b) {
    return add(a,b);
}

let add = function add(a, b) 
{ return a + b };

console.log(compute(add, 2, 3));


  //Refactor to pass add logic as an anonymous function

const compute1 = function compute(add, a , b) {
return add1(a,b);
}

let add1 = function(a, b) 
        { return a + b };

console.log(compute(add1, 3, 4));

  //Refactor to pass add logic as an arrow function. 

  let add2 = (a, b) => a + b;
  console.log(add2(4, 5));
