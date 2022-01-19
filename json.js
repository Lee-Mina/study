// JSON
// JavaScript Object Notification

// 1.Object to JSON
// JSON.stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);

const rabbit = {
  name: "tori",
  colot: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(
      `${name} can jump!`
    ); /*함수는 json에 포함되지 않기 때문에 출력이 안된다. 오직 obj만!*/
  },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json); //해당하는 property만 출력

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2.JSON to Object
//parse (json) json을 obj로 변환시킴
console.clear(); //와 이거 신기하다 콘솔로그 다지워짐
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
obj.jump;

//토끼에는 birthDate라는 Object가 있었는데 이것은date라는 obj이다.
//그래서 getDate라는 데이트안에 API를 쓸수있음
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
