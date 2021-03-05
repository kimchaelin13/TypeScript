interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용,세호라는 변수는 유저라는 인터페이스를 갖는다
//=> 세호라는 변수는 유저라는 인터페이스 속성을 그대로 써줘야함
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용,User 인터페이스만 갖겠다
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: '캡틴',
  age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
//sum이라는 함수에 대한 규칙 정의가능, 함수의 규칙은 인터페이션 SumFunction 인터페이스 규칙을 따른다
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  //정규표현식 생성자 예약어
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  //오른쪽 정규표현식이 와야함 그래서 'css'가 아닌 아래처럼 정의해야함
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
// obj['cssFile'] = 'a'

Object.keys(obj).forEach(function(value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var captain: Developer = {
  language: 'ts',
  age: 100,
  name: '캡틴'
}