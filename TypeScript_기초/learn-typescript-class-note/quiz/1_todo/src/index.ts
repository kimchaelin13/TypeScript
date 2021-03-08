
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

//인터페이스 정의
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

//todoItems : 할일 목록
let todoItems: Todo[];

// api

//f\fetchTodoItems 반환값은 배열
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

// void: 반환값이 없다고 명시적으로 나타냄
function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}


//filter : 특정 조건에 맞는 결과 리턴
function showCompleted(): object[] {
  return todoItems.filter(item => item.done);
  // return todoItems.filter(function(item) {
  //   if (item.done) {
  //     return item;`
  //   }
  // });
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '아이템 4',
    done: false,
  };
  addTodo(item1);
  addTodo({
    id: 5,
    title: '아이템 5',
    done: false,
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
