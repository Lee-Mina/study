//promise에 사용
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

console.log("시작");
async function order() {
  const result1 = await f1();
  const result2 = await f2(result1);
  const result3 = await f3(result2);
  console.log(result3);
  console.log("종료");
}

console.log("시작");
async function order() {
  try {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();

console.log("시작");
async function order() {
  try {
    const result = await Promise.all([f1(), f2(), f3()]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();

// f1()
//   .then((res) => f2(res))
//   .then((res) => f3(res))
//   .then((res) => f3(res))
//   .catch(console.log)
//   .finally(() => {
//     console.log("끝");
//   });
