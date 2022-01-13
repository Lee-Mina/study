"use strict";
//setTimeout / setInterval
//setTimeout = 일정시간이 지난 후 함수를 실행
//setInterval = 일정 시간 간격으로 함수를 반복
function fn() {
  console.log(3);
}

setTimeout(fn, 3000); //이함수는 3초 후에 로그를 찍어줌
//저기안에 3000은 3초를 의미한다. 저코드는 아래와같이 사용가능
setTimeout(function () {
  console.log(3);
}, 3000);

function showName(name) {
  console.log(name);
}
setTimeout(showName, 3000, "Mike");
//(함수, 시간, 인수(name에 들어갈거))

//clearTimeout 예정된 작업을 없앤다.
const tId = function showName(name) {
  console.log(name);
};
setTimeout(showName, 3000, "Mike");
clearTimeout(tId);
//3초가 지나기전에 아래 코드가 먼저실행 되기때문에 아무일도 일어나지 않는다.

//setInterval : 일정 시간 간격으로 함수를 반복
function showName(name) {
  console.log(name);
}
const tId = setInterval(showName, 3000, "Mike");
//Mike가 3초만에 찍힘
// 이것을 중단하려면 clearInterval을 찍으면됨

//delay = 0? 딜레이 /0초로 찍어도 바로 나오지 않음
let num = 0;
function showTime() {
  console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
  if (num > 5) {
    clearInterval(tId);
  }
}
setInterval(showTime, 1000);
