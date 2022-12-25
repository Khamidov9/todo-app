<script setup>
import {useTodoStore} from "@/store/todo.js";
import {watch, ref} from 'vue';

const store = useTodoStore()

let createdItems = ref(0);
let completedItems = ref(0);
let items = ref([]);

createdItems.value = store.todoSize;
completedItems.value = store.todoCompletedSize;
items.value = store.todos;
const toggleStatus = (id) => {
  store.markTodo(id);
}

const deleteTodo = (id) => {
  store.deleteTodo(id);
}

watch(
    () => store.todoSize,
    (newValue) => {
      createdItems.value = newValue;
    },
    {deep: true}
)
watch(
    () => store.todoCompletedSize,
    (newValue) => {
      completedItems.value = newValue
    },
    {deep: true}
)
</script>

<template>
  <section class="todo">
    <div class="todo-header">
      <div class="todo-stat">
        <p>Created</p>
        <p><span>{{ createdItems }}</span></p>
      </div>
      <div class="todo-stat">
        <p>Completed</p>
        <p><span>{{ completedItems }} of {{ createdItems }}</span></p>
      </div>
    </div>
    <div class="todo-items" v-if="createdItems > 0">
      <div class="todo-item" v-for="(item, idx) in items" :key="idx" :class="{ mark: item.status }">
        <label :for="idx">
          <input type="checkbox" :checked="item.status" :id="idx" @click="toggleStatus(item.id)">
        </label>
        <div>
          <p class="todo-content">{{ item.content }}</p>
          <p class="todo-deadline">{{ item.deadline }}</p>
        </div>
        <img src="@/assets/icons/trash.svg" alt="trash icon" @click="deleteTodo(item.id)">
      </div>
    </div>
    <div class="todo-empty" v-else>
      <img src="@/assets/icons/clipboard.svg" alt="clipboard-icon">
      <h2>You have no tasks registered yet</h2>
      <p>Create tasks and organize your To-Dos</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
%flexBetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

%flexCenterY {
  display: flex;
  align-items: center;
}

%flexCenterX {
  display: flex;
  justify-content: center;
}

.todo {
  max-width: 70rem;
  margin: 9rem auto 0;

  &-header {
    @extend %flexBetween;
    margin-bottom: 2.4rem;
  }

  &-stat {
    @extend %flexCenterY;
    gap: 8px;

    &:first-child {
      p:first-child {
        color: #4EA8DE;
      }
    }

    &:last-child {
      p:first-child {
        color: #8284FA;
      }
    }

    p {
      &:first-child {
        font-weight: 700;
        font-size: 1.4rem;
      }

      &:last-child {
        background: #333333;
        border-radius: 1rem;
        padding: 2px 8px;

        span {
          font-weight: 700;
          font-size: 1.2rem;
          color: #D9D9D9;
        }
      }
    }
  }

  &-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 2.4rem;
  }

  &-item {
    background: #262626;
    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 1.6rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    transition: all 0.2s;

    &.mark {
      border: 1px solid transparent;

      label {
        border: 2px solid transparent;
        background: #5E60CE;

        &::before {
          width: 4px;
          height: 2px;
          transform: rotate(40deg);
          top: 7px;
          left: 2px;
        }

        &::after {
          width: 8px;
          height: 2px;
          transform: rotate(135deg);
          right: 1px;
          bottom: 5px;
        }
      }

      .todo-content {
        color: #808080;
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
      transition: all 0.2s;

      &::before, &::after {
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
      display: flex;
      align-items: flex-start;
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
    transition: all 0.2s;
  }

  &-deadline {
    padding: 0.7rem 1rem;
    background-color: #5E60CE;
    border-radius: 5px;
    color: #fff;
  }

  &-empty {
    border-top: 1px solid #333333;
    border-radius: 8px;
    color: #808080;
    font-size: 1.6rem;
    text-align: center;
    padding: 6.4rem 0;

    img {
      margin-bottom: 1.6rem;
    }

    h2 {
      font-weight: 700;
      line-height: 140%;
    }

    p {
      font-weight: 400;
      line-height: 140%;

    }
  }
}
</style>