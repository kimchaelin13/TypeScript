// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}
sum(10);

// 함수의 옵셔널 파라미터(?)
// '?'을 쓰면 선택적으로 쓸수있다. 필요에 따라서 생략가능하다는 뜻
function log(a: string, b?: string) {

}
log('hello world');
log('hello ts', 'abc');