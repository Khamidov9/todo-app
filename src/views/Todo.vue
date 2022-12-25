<script setup>
import TodoList from '@/components/todo/TodoList.vue'
import TodoForm from "@/components/todo/TodoForm.vue";
</script>

<template>
  <header class="header">
    <router-link to="/">
      <img src="@/assets/icons/logo.svg" alt="logo">
    </router-link>
    <TodoForm />
  </header>
  <main class="main">
    <TodoList/>
  </main>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 7.2rem 0 8rem 0;
  background: #0D0D0D;
}

.main {

}
</style>