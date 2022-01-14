"use strict";
//나머지 매개변수는 (...)으로 표시
function showName(name) {
  console.log(name);
} //(name)들어간 곳에 개수 제한 없다.
showName("Mike"); //'Mike'
showName("Mike", "Tom"); // ?

showName(); //undefined
//함수에 인수를 받는방법 arguments, 나머지 매개변수

// arguments
// 함수로 넘어 온 모든 인수에 접근
// 함수내에서 이용 가능한 지역 변수
// length / index
// Array 형태의 객체
// 배열의 내장 메서드 없음 (forEach, map)

//나머지 매개변수
//정해지지 않은 매개변수를 배열로 나타날수있게한다.
function showName(...names) {
  console.log(names);
}
showName(); //[]
showName("Mike"); //['Mike']
showName("Mike", "Tom"); //['Mike', Tom]

/*
나머지 매개변수
전달 받은 모둔 수를 더해야함 */
function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => (result += num));
  console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/*
나머지 매개변수
user 객체를 만들어 주는 생성자 함수를 만들겁니다. */

function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
} //나머지 매개변수는 항상 마지막에 있어야함
const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);

//전개구문 : 배열
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = [...arr1, ...arr2];
// console.log(result); //[1,2,3,5,6]

// result = [0, ...arr1, ...arr2, 7, 8, 9];

//전개구문 : 객체
let user = { name: "Mike" };
let mike = { ...user, age: 30 };
console.log(mike); //{name: "Mike", age: 30}

// 전개 구문 : 복제
let arr = [1, 2, 3];
let arr2 = [...arr];

let user = { name: "Mike", age: 30 };
let user2 = { ...user };

user2.name = "Tom";

console.log(user.name); //'Mike'
console.log(user2.name); //'Tom'

/*
전개 구문
arr1을 [4,5,6,1,2,3]으로*/
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr2.reverse().forEach((num) => {
  arr1.unshift(num);
}); //reverse를 안하면 결과값이 [6,5,4,1,2,3]으로 나옴
console.log(arr1); //

let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = Object.assign({}, user, info, {
  skills: [],
}); //이런것을 아래처럼 변환시킬수있음.
user = {
  ...user,
  ...info,
  skills: [...fe, ...lang],
};

console.log(user);
/*
{"name" : "Mike",
"age" : 30,
"skills" :[
    "JS",
    "React",
    "Korean",
    "English"
]
}*/
