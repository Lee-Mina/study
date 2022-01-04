// 유용한 10가지 배열 함수들. Array APIs 총정리

//1.join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
// 1.주어진 단어를 string으로 변환해라
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

/*다음 예제에서는 3개의 요소를 가진 배열 a를 만들고, 
기본 구분자, 쉼표와 공백, 더하기 기호, 빈 문자열의 
네 가지 구분자를 사용해 배열을 연결합니다.
*/
var a = ['바람', '비', '불'];
var myVar1 = a.join();      // myVar1에 '바람,비,불'을 대입
var myVar2 = a.join(', ');  // myVar2에 '바람, 비, 불'을 대입
var myVar3 = a.join(' + '); // myVar3에 '바람 + 비 + 불'을 대입
var myVar4 = a.join('');    // myVar4에 '바람비불'을 대입


//2.split 
//2. 주어지는 string을 array로 변환하는 문제
{
    const fruits = '토마토, 바나나, 키위, 체리';
    const result = fruits.split(", ");
    console.log(result);
}//split 은 두가지의 파라미터를 받는다. 
/*string을 전달된 seperate를 이용하여 여러가지 문자열로 잘게 나누어준다.
타입은 string 이거나 regexp 를 &&우리가 retrun받을 사이즈를 지정하는것도 가능하다.

consle.log(fruits)*/