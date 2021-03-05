// interface Person {
//   name: string;
//   age: number;  
// }

//타입 => 확장 불가능(m/w, interface => extend 가능)
type Person = {
  name: string;
  age: number;
}

var seho: Person = {
  name: '세호',
  age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
//type썼을때 가독성 더 높아짐 { ... } => Todo
function getTodo(todo: Todo) {

}