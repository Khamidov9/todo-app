<script setup>
import {useTodoStore} from "@/store/todo.js";
import {v4 as uuidv4} from 'uuid';
import {ref} from 'vue'

const store = useTodoStore()
const date = ref('');
const content = ref('');
const error = ref([]);

const addTodo = () => {
  error.value.length = 0;
  if (content.value.length === 0) {
    error.value.push('Content can not be empty')
  }
  if (date.value.length === 0) {
    error.value.push('Please specify deadline date')
  }
  if (new Date(date.value).getTime() < new Date().getTime()) {
    error.value.push('Deadline can not be set to the past')
    return;
  }

  if (error.value.length > 0) {
    const popup = document.querySelector('.todo-error');
    setTimeout(() => {
      popup.classList.add('hide')
      error.value.length = 0;
    }, 3000)
  }

  if (content.value.length > 0 && error.value.length === 0) {
    store.addTodo({
      deadline: date.value,
      content: content.value,
      id: uuidv4(),
      status: false
    })
    date.value = '';
    content.value = '';
  }
}
</script>

<template>
  <div class="todo-input">
    <input type="text" placeholder="Add a new task" required v-model.trim="content">
    <input type="date" placeholder="Deadline" required v-model.trim="date">
    <button @click="addTodo()">Create <img src="@/assets/icons/plus-icon.svg" alt="plus icon"></button>
  </div>
  <ul class="todo-error" :class="{ visible :error.length }">
    <li v-for="(err,i) in error" :key="i">
      {{ err }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.todo {
  &-input {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);

    max-width: 70rem;

    input {
      max-width: 60rem;
      padding: 1.6rem;
      background: #262626;
      border: 1px solid #0D0D0D;
      border-radius: 8px;
      color: #F2F2F2;
      outline: none;
      font-size: 1.6rem;
      font-weight: 400;
      width: 60%;


      &[type=date]:invalid::-webkit-datetime-edit-day-field, &[type=date]:invalid::-webkit-datetime-edit-month-field, &[type=date]:invalid::-webkit-datetime-edit-year-field {
        color: #999;
      }

      &:last-of-type {
        text-align: center;
        width: 40%;
      }

      &::-webkit-datetime-edit {
        font-family: 'Inter', sans-serif;
      }

      &::placeholder {
        color: #808080;
        font-family: 'Inter', sans-serif;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      cursor: pointer;
      outline: none;
      border: none;
      font-weight: 700;
      background: #1E6F9F;
      border-radius: 8px;
      color: #F2F2F2;
      font-size: 1.4rem;
      padding: 1.6rem;
    }
  }

  &-error {
    display: none;
    position: absolute;
    right: 1%;
    top: 8%;
    color: #fff;
    background: #8284FA;
    padding: 1rem 2rem;
    border-radius: 10px;
    transition: all 0.5s;

    &.visible {
      display: block;
      opacity: 1;
    }

    &.hide {
      opacity: 0;
    }

    li {
      position: relative;
      font-size: 1.6rem;

      &::before {
        position: absolute;
        content: '';
        width: 5px;
        height: 5px;
        background: #fff;
        border-radius: 50%;
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
      }

      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>