//: number 반횐타입까지 정의
function add(a: number, b: number): number {
  return a + b;
}
var result = add(10, 20);
// result.toLocaleString();

// result: 넘버. '.'을 찍었을때 넘버가 사용할수있는 api 자동완성 제공
result.toLocaleString();

// add(10, '20');
