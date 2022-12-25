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
  <div class="todo-container">
    <div class="todo-input">
      <input type="text" placeholder="Add a new task" required v-model.trim="content">
      <input type="datetime-local" placeholder="dd.mm.yyyy" required v-model.trim="date">
      <button @click="addTodo()">Create <img src="@/assets/icons/plus-icon.svg" alt="plus icon"></button>
    </div>
  </div>
  <ul class="todo-error" :class="{ visible :error.length }">
    <li v-for="(err,i) in error" :key="i">
      {{ err }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.todo {
  &-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    width: 100%;
    -webkit-transform: translateY(10.7rem);
        -ms-transform: translateY(10.7rem);
            transform: translateY(10.7rem);
  }

  &-input {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    gap: 1rem;
    width: 100%;
    max-width: 70rem;
    margin: 0 3rem;

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
      max-height: 5.2rem;


      &[type="datetime-local"]:invalid::-webkit-datetime-edit-day-field,
      &[type="datetime-local"]:invalid::-webkit-datetime-edit-month-field,
      &[type="datetime-local"]:invalid::-webkit-datetime-edit-year-field {
        color: #999;
      }

      &[type="datetime-local"] {
        font-family: 'Inter', sans-serif;
      }

      &:last-of-type {
        text-align: center;
        width: 40%;
      }

      &::-webkit-input-placeholder {
        color: #808080;
        font-family: 'Inter', sans-serif;
      }

      &::-moz-placeholder {
        color: #808080;
        font-family: 'Inter', sans-serif;
      }

      &:-ms-input-placeholder {
        color: #808080;
        font-family: 'Inter', sans-serif;
      }

      &::-ms-input-placeholder {
        color: #808080;
        font-family: 'Inter', sans-serif;
      }

      &::placeholder {
        color: #808080;
        font-family: 'Inter', sans-serif;
      }
    }

    button {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
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

    @media only screen and (max-width: 34.375em) {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;

      input, input:last-of-type, button {
        width: 100%;
      }

      input::-webkit-input-placeholder {
        text-align: center;
      }

      input::-moz-placeholder {
        text-align: center;
      }

      input:-ms-input-placeholder {
        text-align: center;
      }

      input::-ms-input-placeholder {
        text-align: center;
      }

      input::placeholder {
        text-align: center;
      }
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
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
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
        -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
                transform: translateY(-50%);
      }

      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }

    @media only screen and (max-width: 34.375em) {
      -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
              transform: translateX(-50%);
      left: 50%;
      width: 60vw;
      top: 38%;
    }
  }
}
</style>