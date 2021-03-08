// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언, str이라는 변수는 문자타입으로 간주하겠다, 대부분 let 사용
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
// array 타입 대문자로,
let arr: Array<number> = [1,2,3];

let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10]

//배열 literal, 배열이 들어올건데 넘버만 들어옴
let items: number[] = [1,2,3];

// TS 튜플(첫번째 위치는 스트링, 두번째 위치는 숫자를 넣겠다)
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100
// };
//객체 더 자세하게 정의할 수 있음
let person: { name: string, age: number } = {
  name: 'thor',
  age: 1000
}

// TS 진위값
let show: boolean = true;