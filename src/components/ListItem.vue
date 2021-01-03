<template>
  <div>
    <ul class="item-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <!-- points -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- title -->
        <div>
          <p class="item-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link v-bind:to="`ask/${item.id}`">{{ item.title }}</router-link>
            </template>
          </p>
          <!-- etc -->
          <small class="link-text">
            by
            <router-link 
              v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            <a v-else :href="item.url" class="link-text">{{ item.domain }}</a> 
            {{ item.time_ago }}
          </small>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  computed:{
    listItems(){
      return this.$store.state.list;
    }
  },
}
</script>

<style>
.item-list{
  margin: 0;
  padding: 0;
}
.post{
  list-style:none;
  display:flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
}
.points{
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:lightsalmon;
}
.item-title{
  margin: 0;
}
.link-text{
  color:dimgray;
}
</style>