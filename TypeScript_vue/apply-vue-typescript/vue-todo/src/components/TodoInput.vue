<template>
  <div>
    <label for="todo-input">오늘 할 일:</label>
    <!-- input이벤트 키보드의 인풋이벤트 -->
    <input id="todo-input" type="text" :value="item" @input="handleInput">
    <button click="addTodo" type="button">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    // props:['item'],
    props: {
        item: {
            type:String,
            required:true
        }
    },
    methods: {
        handleInput(event:InputEvent) {
            // event.target.value;
            console.log(event);
            //input 이벤트: 컴포넌트 간의 대화하기 위한 수단
            // if (!event.target) {
            //     return;
            // }
            const eventTarget = event.target as HTMLInputElement;
            this.$emit("input",eventTarget.value);
        },
        addTodo() {
            this.$emit("add")
        }
    }
})
</script>