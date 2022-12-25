<template>
  <div class="todo-empty">
    <img src="@/assets/icons/clipboard.svg" alt="clipboard-icon">
    <h2>You have no tasks registered yet</h2>
    <p>Create tasks and organize your To-Dos</p>
  </div>
</template>

<style lang="scss" scoped>
.todo-empty {
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
</style>