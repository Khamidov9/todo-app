<script setup>
import {useTodoStore} from "@/store/todo.js";

const store = useTodoStore()
defineProps(['item', 'id'])

const toggleStatus = (id) => {
  store.markTodo(id);
}

const deleteTodo = (id) => {
  store.deleteTodo(id);
}
</script>

<template>
  <div class="todo-item" :class="{ mark: item.status }">
    <label :for="id">
      <input type="checkbox" :checked="item.status" :id="id" @click="toggleStatus(item.id)">
    </label>
    <div>
      <p class="todo-content">{{ item.content }}</p>
      <p class="todo-deadline">{{ item.deadline.replace('T', ' ') }}</p>
    </div>
    <img src="@/assets/icons/trash.svg" alt="trash icon" @click="deleteTodo(item.id)">
  </div>
</template>

<style lang="scss" scoped>
.todo {
  &-item {
    background: #262626;
    border: 1px solid #333333;
    -webkit-box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 1.6rem;
    width: 100%;

    display: -webkit-box;

    display: -ms-flexbox;

    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    gap: 12px;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;

    &.mark {
      border: 1px solid transparent;

      label {
        border: 2px solid transparent;
        background: #5E60CE;

        &::before {
          width: 4px;
          height: 2px;
          -webkit-transform: rotate(40deg);
              -ms-transform: rotate(40deg);
                  transform: rotate(40deg);
          top: 7px;
          left: 2px;
        }

        &::after {
          width: 8px;
          height: 2px;
          -webkit-transform: rotate(135deg);
              -ms-transform: rotate(135deg);
                  transform: rotate(135deg);
          right: 1px;
          bottom: 5px;
        }
      }

      .todo-content {
        color: #808080;
        -webkit-text-decoration-line: line-through;
                text-decoration-line: line-through;
      }
    }

    label {
      border: 2px solid #4EA8DE;
      border-radius: 50%;
      width: 1.7rem;
      height: 1.7rem;
      position: relative;
      cursor: pointer;
      -webkit-transition: all 0.2s;
      -o-transition: all 0.2s;
      transition: all 0.2s;

      &::before, &::after {
        -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        background: #fff;

      }

      input {
        visibility: hidden;
      }
    }

    div {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      width: 100%;
    }

    img {
      cursor: pointer;
    }
  }

  &-content {
    color: #F2F2F2;
    font-size: 1.4rem;
    line-height: 140%;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }

  &-deadline {
    padding: 0.7rem 1rem;
    background-color: #5E60CE;
    border-radius: 5px;
    color: #fff;
  }
}
</style>