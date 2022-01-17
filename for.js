// 반복문
// 종류 : for, while
// of
const fruits = ["apple", "banana", "grape"];

let allFruit = "";
for (let fruit of fruits) {
    allFruit += fruit + " ";
}
// console.log(typeof allFruit)

//const numbers = [1, 2, 3, 4, 5, "123", true];
//let total = 0;
//for (let number of numbers){
//    total = total + number;
//}
// console.log(total);

// in

// default
//for (let i = 0; i < 5; i++) {
    // console.log(numbers[i]);
//}

// "*****" 문자열을 만드시오
/*

*
***
*****
*******
*********A

*/
// let star = "*";
// for (let i = 0; i < 4; i++){
//     star += "*";
// }
// console.log(star)

let star = '*'
for (let i = 0; i < 5; i++) {
    if (i === 4) {
        console.log(star+'A')
    } else {
        console.log(star)
    }
    star += '**';
}


