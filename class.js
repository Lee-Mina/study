"use strict";
const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  };
};
const mike = new User("mike", 30);

class User2 {
  constructor(name, age) {
    //showName처럼 정의된 메소드는 유저2 프로토타입에 저장된다
    this.name = name;
    this.age = age;
  } //constructor는 객체를 만들어주는 생성자 메세지
  showName() {
    console.log(this.name);
  }
}
const tom = new User2("Tom", 19);
//Mike는 ShowName이 객체로 이루어져있고,
//Tom은 프로토타입내부에 showName이 있음

//extends 상속
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP!");
  }
}

//car를 상속해서 bmw를 만들어보겠습니다.
class Bmw extends Car {
  park() {
    console.log("PARK");
  }
}
const z4 = new Bmw("blue");
//z4.drive()를 실행하면 일단 z4객체에서 찾는다.
// 없으니까 prototype으로 가서 찾아보고 없으니까 prototype으로 가서
//찾아본다.

//Class 메소드 오버라이딩
//만일 bmw내부에 car에서 정한 메소드가 동일한 메소드가 들어가게 된다면

class Bmw extends Car {
  park() {
    console.log("PARK");
  }
  stop() {
    console.log("OFF");
  }
}
const z4 = new Bmw("blue");
//동일한 이름의 메서드를 정하면 덮어씌워진다.

//메소드 오버라이딩
//부모의 메서드를 사용하면서 확장하고싶다면 어떻게 해야할까
//그럴때는 super라는 키워드를 사용하면된다.
class Bmw extends Car {
  park() {
    console.log("PARK");
  }
  stop() {
    super.stop();
    console.log("OFF");
  }
}
const z4 = new Bmw("blue");

//오버라이딩
//생성자 오버라이딩
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP!");
  }
}
class Bmw extends Car {
  constructor() {
    this.navigation = 1;
  }
  park() {
    console.log("PARK");
  }
}
const z4 = new Bmw("blue");
//에러남 ? constructor에서 this를 사용하기 전에
//super constructor를 생성해야함
//즉 부모 생성자를 반드시 먼저 생성하여야함 this를 이(빈) 객체를 가르키게 된다.
//class constructor는 빈객체로 만들어지고
//반면 extends를 사용해 만든 자식 class는 빈객체가 만들어지고
//this에 할당하는 이 작업을 건너뛴다.
//그래서 항상 super()로 부모 class의 constructor을 실행해줘야한다.

//class 머라는지 하나도 모르겠어
