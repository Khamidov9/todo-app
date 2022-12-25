<template>
  <div class="home">
    <h1>Welcome To-Do App</h1>
    <div>
      <img src="@/assets/icons/github.svg" alt="github-icon">
      <router-link to="/todo">Let's Go</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 3rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
  }

  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 3rem;

    a {
      font-size: 1.6rem;
      font-weight: 400;
      padding: 1rem 2rem;
      background-color: #808080;
      color: #000;
      border-radius: 5px;
    }

    img {
      cursor: pointer;
    }
  }
}
</style>