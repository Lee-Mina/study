//class는 object뽑는 기계다

//옛날문법
function 기계() {
  this.q = "consume"; //새로 생성되는 object에 {q:'consume'}추가해주셈
  this.w = "snowball";
} //기계로부터 생성되는 object (멋진말로 instance)
var nunu = new 기계();
var garen = new 기계();
//아래처럼 오브젝트 설명? 여러개 안써도 됨

function 기계(구멍) {
  this.q = "구멍";
  this.w = "snowball";
}
var nunu = new 기계(얌);

//요즘 문법
class Hero {
  constructor() {
    this.q = "구멍";
    this.w = "snowball";
  }
}
/*
var nunu = {
  q: "consume",
  w: "snowball",
};

var garen = {
  q: "strike",
  w: "courage",
};
*/
