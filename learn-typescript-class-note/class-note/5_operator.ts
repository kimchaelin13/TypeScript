// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

//  | 유니온타입 : 한가지 이상의 타입을 쓰고 싶을때 사용
// 스트링과 넘버가 아닌 타입에 대해서 에러를 발생시킬 수 있음
var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

// 인터섹션(교차) 타입
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   //유니온타입: 공통된 속성만 접근 가능, ts관점에서는 someone에 어떤 값이 들어올지 모르기 때문에 skill이나 age를 타입검증도 없이 써버리게 되면 코드상으로 에러가 충분히 날 수 있다
//   //보장된 속성만 제공함 => 공통 속성
//   someone.name;
//   someone.age;
//   someone.skill;
// }

// & - 인터섹션
// |와 다란건? 디벨로퍼의 속성과 person의 속성을 모두 포함하는 것을 someone 부름
// 
function askSomeone(someone: Developer & Person) {
  //유니온타입: 공통된 속성만 접근 가능, ts관점에서는 someone에 어떤 값이 들어올지 모르기 때문에 skill이나 age를 타입검증도 없이 써버리게 되면 코드상으로 에러가 충분히 날 수 있다
  //보장된 속성만 제공함 => 공통 속성
  someone.name;
  someone.age;
  someone.skill;
}