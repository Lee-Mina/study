"use strcit";
// call , apply , bind
//함수에 this값을 지정할수있음
//js는 일반적인 방법외에도 함수 호출 방식과 관계없이 this를 지정할수있음

const mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function showThisName() {
  console.log(this.name);
}

showThisName();
showThisName.call(mike); //mike
showThisName.call(tom); //tom

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 1999, "singer");
console.log(mike);
/*{ name: 'Mike',
birthYear: 1999, occupation: 'singer' }*/
update.call(tom, 1999, "teacher");
console.log(tom);

//apply
// apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같습니다.
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만,
// apply는 매개변수를 배열로 받습니다.

update.apply(mike, [1999, "singer"]);
console.log(mike);

update.apply(tom, [1999, "teacher"]);
console.log(tom);

//bind
//함수의 this값을 영구히 바꿀 수 있습니다.
const mikename = {
  name: "Mike",
};

function update(birthYear, occupaation) {
  this.birthYear = birthYear;
  this.occupation = occupaation;
}
const updateMike = update.bind(mikename);
updateMike(1980, "police");
console.log("Mike");

const user = {
  name: "Mike",
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};
user.showName(); //.앞에있는 것이 this임

let fn = user.showName;

fn.call(user);
fn.apply(user);

let bounFn = fn.bind(user);
boundFn();
