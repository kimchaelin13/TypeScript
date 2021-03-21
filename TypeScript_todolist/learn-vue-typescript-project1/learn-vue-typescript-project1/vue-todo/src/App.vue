<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <!-- 아래에서 올라온 input emit이벤트를 받아 updateTodoText 메소드 실행-->
      <!-- 투두인풋에서 add라는 이벤트가 올라옴 -->
      <TodoInput
        :item="todoText"
        @input="updateTodoText"
        @add="addTodoItem"
      ></TodoInput>
      <div>
        <ul>
          <TodoListItem
            v-for="(todoItem, index) in todoItems"
            :key="index"
            :index="index"
            :todoItem="todoItem"
            @toggle="toggleTodoItemComplete"
            @remove="removeTodoItem"
          ></TodoListItem>
          <!-- <li>아이템 1</li>
          <li>아이템 2</li>
          <li>아이템 3</li> -->
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

// Storage key를 key값, todoItem 배열을 value에 저장할거다
// 스토리지키를 이용해서 들오고 온다고 보면 됨
const STORAGE_KEY = "vue-todo-ts-v1";
// localStorage api 이용(key(상수):value(배열직렬화))
// STORAGE_KEY값으로 조회, 추가
// storage는 로컬 스토리지를 가리킴
const storage = {
  // todoItem 저장
  save(todoItems: Todo[]) {
    // stringify : 배열을 받아서 문자열로 바꾸고 그 문자열로 바꾼것을 그대로 setItem에 그대로 넣게된다
    const parsed = JSON.stringify(todoItems);
    //setItem은 배열을 계속 업데이트할거야, value값을 계속 갱신 => 첫번째 인자인 키는 스토리지키, 두번째 인자는 배열
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  // todo 조회
  // fetch의 결과값이 뭔지 정의해줘야됨(Todo배열)
  // 스토리지에서 꺼내온 데이터의 구조는 투두배열이다! fetch의 반환타입은 투두배열
  // 이렇게 하면 a,b의 타입을 정의하지않아도 추론가능
  fetch(): Todo[] {
    
    // storage_key로 조회, 스토리지키 없는 겅우, 빈배열([])을 string으로 ("[]")처리해줌 -> 어차피 JSON.parse에 의해 object로 반환되는데 type때문에  에러가나니 그냥 ""붙여줌
    //  todoItems에 저장하고 있다면 배열을 저장함
    const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
    // 배열로 된것이 json으로 간주되고 object로 반환됨
    // JSON.parse의 todoItems안의 key value는 모두 ""(큰따옴표)로 돼있어야됨
    const result = JSON.parse(todoItems);
    return result;
  }
};
// Todo 객체를 위한 타입 지정
// export를 해야 다른 파일에서도 Todo를 쓸 수 있다
export interface Todo {
  title: string;
  done: boolean;
}

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  // vda : data()속성 자동완성
  data() {
    return {
      todoText: "",
      // todoItems에 들어오는 값은 Todo들이 객체로 들어온다고 타입단언
      // 위쪽에 정의한 인터페이스가 들어오는게 => todoItems
      todoItems: [] as Todo[]
    };
  },
  methods: {
    // Input에서 올라온 값이 value(string)로 들어옴
    // event.target.value (InputElement라는 속성은 String이다)
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      // 이건 그냥 보여주기위해서 적음 나중엔 바로 push안에 적으면 됨
      const todo: Todo = {
        title: value,
        done: false // 아직완료되지 않았으니까 false
      };
      // localStorage에 배열로 저장할 것이기 떄문에 todo를 배열에 넣은 뒤, 저장
      this.todoItems.push(todo);
      storage.save(this.todoItems);
      // localStorage.setItem(value, value);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
    // items 조회, 페치
    fetchTodoItems() {
      // this.todoItems = 1;
      // storage의 fetch로 배열을 가져옴
      // storage.fetch()의 타입을 알기 때문에 a,b의 type을 따로 지정해주지 않아도 됨(타입추론)
      this.todoItems = storage.fetch().sort((a, b) => {
        // sort api 
        // 정렬할 대상은 title(유니코드순)
        // a가 b보다 작을 때 -1
        if (a.title < b.title) {
          return -1;
        }
        // a가 b보다 크면 1
        if (a.title > b.title) {
          return 1;
        }
        // 아니면 0
        return 0;
      });
      // return "hi";
    },
    // index를 emit으로 보냄
    removeTodoItem(index: number) {
      console.log("remove", index);
      // index에서 1개를 지우겠다
      this.todoItems.splice(index, 1);
      // 배열이 삭제됐으니 업데이트(다시 저장해줌)
      storage.save(this.todoItems);
    },
    // emit으로 todoItem과 index가 넘어옴
    toggleTodoItemComplete(todoItem: Todo, index: number) {
      this.todoItems.splice(index, 1, {
        // index에 1개를 todoItem에서 done만 toggle(... : spread operator)
        //투두아이템으로 넘어오는걸 다 풀어서 넣어주고, done만 바꿔주기
        ...todoItem,
        done: !todoItem.done
      });
      // (배열업데아트하고=수정)했으니 저장
      storage.save(this.todoItems);
    }
  },
  created() {
    this.fetchTodoItems();
  }
});
</script>

<style scoped></style>
