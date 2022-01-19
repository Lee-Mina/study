'use strict'
/*
function ShowError(){
    alert ('에러가 발생했습니다.')
}
ShowError()

//함수
 //함수를 정의 하는방법
 //function name(param1, param2){body... return;} 
 //one function === one thing 
 //function is objenct in JS
function log(message) {
     console.log(message);
 }
log('Hello');

//2.Parmeters(매개변수)
//premitive parmeters: passed by value
//object paramters: passed by reference
function changeName(obj){
    obj.name='coder';
}
const ellie={name:'ellie'};
changeName(ellie);
console.log(ellie);

//3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by $(from}`);
}
showMessage('Hi')
*/

// 함수

// 정의
function print(msg) {
    console.log(msg);
}
print("Hello");

function plus(a, b) {
    return a + b;
}
const plusedValue = plus(1, 2);
console.log(plusedValue)

function sum(...all) {
    return all.reduce((acc, con) => {
        return acc + con;
    }, 0)
}
console.log(sum(1, 2, 3, 4, 100, 300409492949))

// 5개의 매개변수를 뺄셈해주는 함수를 만들어라.
function minus(a, b, c, d, e){
    return a - b - c -d - e;
}
const minusedValue = minus(4, 3, 2, 1, 4);
console.log(minusedValue);

// 2개의 매개변수를 나눠주는 함수를 만드시오.
function divide(a, b) {
    return a / b;
}
const divideValue = divide(1,2);
console.log(divideValue);

const multiply = (a, b) => {
    return a * b
};
console.log(multiply(2, 3))

const Calculator = {
    plus: (...all) => {
        return all.reduce((acc, con) => {
            return acc + con;
        }, 0)
    },
    minus: (...all) => {
        return all.reduce((acc, con) => {
            return acc - con;
        }, 0)
    },
    divide: (...all) => {
        return all.reduce((acc, con) => {
            return acc / con;
        }, 0)
    },
    multiply: (...all) => {
        return all.reduce((acc, con) => {
            return acc * con;
        }, 0)
    },
}

console.log( Calculator.minus(1, 2, 3, 4) )

