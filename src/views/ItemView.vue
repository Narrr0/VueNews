<template>
  <div>
    <section>
      <!-- User Info -->
      <user-profile :info="question">
        <router-link slot="username" :to="`/user/${question.user}`">{{ question.user }}</router-link>
        <div slot="time">{{ 'posted ' + question.time_ago }}</div>
      </user-profile>
    </section>
    <section>
      <h3>{{ question.title }}</h3>
    </section>
    <section>
      <!-- Question -->
      <div class="content" v-html="question.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    question(){
      return this.$store.state.asking;
    }
  },
  created(){
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ASKING',itemId);
  }
}
</script>

<style scoped>
.user-container{
  display:flex;
  align-items:center;
}
.fa-user{
  font-size: 2rem;
  padding: 10px;
}
.time{
  font-size: 0.8rem;
}
.title{
  padding-right: 20px;
}
h3{
  padding: 20px;
}
.content{
  padding: 0px 20px;
}
</style>