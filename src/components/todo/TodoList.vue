<script setup>
import {useTodoStore} from "@/store/todo.js";
import {watch, ref} from 'vue';
import TodoItem from "@/components/todo/TodoItem.vue";
import TodoEmpty from "@/components/todo/TodoEmpty.vue";

const store = useTodoStore()

let createdItems = ref(0);
let completedItems = ref(0);
let items = ref([]);

createdItems.value = store.todoSize;
completedItems.value = store.todoCompletedSize;
items.value = store.todos;

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
      <TodoItem v-for="(item, idx) in items" :key="idx" :item="item" :id="idx" />
    </div>
    <TodoEmpty v-else />
  </section>
</template>

<style lang="scss" scoped>
%flexBetween {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

%flexCenterY {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

%flexCenterX {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    gap: 12px;
    margin-bottom: 2.4rem;
  }
}
</style>