<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username"> <!-- Define in parent component --> </slot>
      <div class="time">
        <slot name="karma"></slot>
        <slot name="time"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   info: Object,
  // },
}
</script>

<style scoped>
.user-container{
  display:flex;
  align-items:center;
}
.fa-user{
  font-size: 2.5rem;
  padding: 20px;
}
.time{
  font-size: 0.8rem;
}
</style>