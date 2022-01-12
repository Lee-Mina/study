"use strict";
const car = {
  wheels: 4,
  drive() {
    console.log("drive...");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
};

bmw._proto_ = car;

const x5 = {
  color: "white",
  name: "x5",
};
x5._proto_ = bmw; //x5가 있고 x5은 bmw에 상속함
//상속은 계속 이어질수잇음
//prototype Chain
//x5에 없는것은 상속되어있는 bmw의 정보를 가져오게되고
//x5에 없으면 car에있는 정보를 가져오게 된다.

for (p in x5) {
  console.log(p);
} //이것은 상속된값이 나옴

//Object.values Object.keys 는 상속된값이 안나온다
//hasownproperty는 객체가 가지고있는 상속된값이 표현

 