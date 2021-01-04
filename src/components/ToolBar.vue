<template>
  <div class="header">
    <img class="logo" src="@/assets/logo.png" />
    <div class="menu"><router-link to="/news">News</router-link></div>
    |
    <div class="menu"><router-link to="/ask">Ask</router-link></div>
    |
    <div class="menu"><router-link to="/jobs">Jobs</router-link></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: white;
  background-color: lightsalmon;
  display: flex;
  padding: 8px;
}
.header .router-link-active {
  color: cornflowerblue;
}
.header a {
  color: white;
}
.menu {
  width: 60px;
  display: flex;
  justify-content: center;
}

.logo {
  width: 25px;
  height: 25px;
  padding: 0px 5px;
}
</style>
