<template>
  <div>
    <header>
      <h1>Vue Todo with TypeScript</h1>
    </header>
    <main>
      <TodoInput
      :item="todoText" 
      @input="updateTodoText" 
      @add="addTodoItem"
      ></TodoInput>
      <div>
        <ul>
          <TodoListItem></TodoListItem>
          <!-- <li>아이템1</li>
          <li>아이템2</li>
          <li>아이템3</li> -->
        </ul>
      </div>

    </main>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoListItem from './components/TodoListItem.vue'

const STORAGE_KEY = "vue-todo-ts-v1"
const storage = {
  save(todoItems:any[]) {
    const parsed = JSON.stringify(todoItems)
    localStorage.setItem(STORAGE_KEY,parsed)
  },
}



export default Vue.extend({
  components: { TodoInput, TodoListItem },
  //app.vue에서 데이터속성을 투두텍스트라고 정의하고 투두텍스트를 그대로 프롭스로 내려줌
  //아이템이라고 하는 프롭스를 TodoInput에서 프롭스로 정의하고, 아이템을 그대로 받아서 input의 value로 연결함
  data() {
    return {
      todoText:"",
      todoItems: [] as any
    }
  },
  methods: {
    updateTodoText(value:string) {
      this.todoText=value
    },
    addTodoItem() {
      const value = this.todoText
      this.todoItems.push(value)
      storage.save(value)
      localStorage.setItem(value,value);
      this.initTodoText()
    },
    initTodoText() {
      this.todoText=""
    },
    
  }

  
})
</script>