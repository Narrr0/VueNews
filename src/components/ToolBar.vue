<template>
  <div class="header">
      <div class="menu"><router-link to="/news">News</router-link></div> |
      <div class="menu"><router-link to="/ask">Ask</router-link></div> |
      <div class="menu"><router-link to="/jobs">Jobs</router-link></div> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  color: white;
  background-color:lightsalmon;
  display: flex;
  padding: 8px;
}
.header .router-link-active{
  color:cornflowerblue;
}
.header a{
  color:white;
}
.menu{
  width:60px;
  display:flex;
  justify-content: center;
}
</style>