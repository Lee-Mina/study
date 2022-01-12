"use strict";
const pr = new Promise((resolve, reject) => {
  //code               성공,     실패
});
//resolve는 성공했을때 실행되는 함수
//reject는 실패했을때 실행되는 함수
//이렇게 완료된 이후 실행되는 함수를 callback함수라고 한다.

new promise(); //가 반환하는 promise 객체는
//state와 result를 property로 갖는다.
//state는 초기에 pending(대기)이었다가 resolve가 호출되면
//성공하면 fulfilled(이행됨)이 된다.
//이때 result는 resolve함수를 전달된 값이다.
//만약 reject가 호출되면 즉 실패하면 rejected가 된다.(거부됨)
//이때 result는 error가 된다.

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});

//실패시
// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("error.."));
//   }, 3000);
// });

pr.then(
  function (result) {}, //이행되었을때 실행
  function (err) {} //거부되었을때 실행
);

//전체를 작성하면 이런 모습이된다.
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});

pr.then(
  function (result) {
    console.log(result + "가지러 가자.");
  },
  function (err) {
    console.log("다시 주문해주세요..");
  }
);
//then이후에 사용할수있는것이 catch와 finally이다.
//catch는 reject일때만 사용된다.
pr.then(
  function (result) {},
  function (err) {}
);
//이것은 아래와 같이 바꿔줄수있다.
pr.then(function (result) {}).catch(function (err) {});

//finally는 성공하든 실패하든 항상 이행이 되는 함수
pr.then(function (result) {})
  .catch(function (err) {})
  .finally(function () {
    console.log("---주문끝---");
  });
//로딩화면을 없앨때 유용하다.

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("OK");
    reject(new Error("OK"));
  }, 1000);
});

console.log("시작");
pr.then((result) => {
  console.log(result);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("끝");
  });

//또다른예제
const f1 = (callback) => {
  setTimeout(function () {
    console.log("1번 주문 완료");
    callback();
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(function () {
    console.log("2번 주문 완료");
    callback();
  }, 2000);
};

const f3 = (callback) => {
  setTimeout(function () {
    console.log("3번 주문완료");
    callback();
  }, 3000);
};

console.log("시작");
f1(function () {
  f2(function () {
    f3(function () {
      console.log("끝");
    });
  });
});
//이렇게 뎁스가 깊어지면서 콜백을 호출하는것을 콜백지옥이라고 부른다.
//이부분을 promise를 써서표현을 해보자

const f1 = () => {
  return new promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

//f1은 promise를 반환하고 resolve함수를 실행하면서 옮겨준값을
//2번에 옮겨주면된다.
console.log("시작");
f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => f3(res))
  .catch(console.log)
  .finally(() => {
    console.log("끝");
  });
//이렇게 연결연결 되는것이 promise체인이라고한다.
//

//promise.all
promise.all([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd("x");
});
//promise.all은 하나의 정보라도 누락되면 안보여주는 화면에 사용한다.

//promise.race
//all은 모든작업이 끝날때까지 기다리지만
//race는 말그대로 경주이다. : 하나라도 일찍완료되면 끝낸다.

// promise.race([f1(), f2(), f3()]).then((res) => {
//   console.log(res);
//   console.timeEnd("x");
// });

//async await을 사용하면 promise에 체인형으로 표현하는것보다
//가독성이 좋아진다.
async function getName() {
  return "Mike";
}
console.log(getName());

async function showName() {
  const result = await getName("Mike");
  console.log(result);
}
console.log("시작");
showName();
//await 함수옆에는 promise가 가고 그 promise가 ~때까지 기다린다.
