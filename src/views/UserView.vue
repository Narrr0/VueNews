<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="karma">{{ "karma " + userInfo.karma + ",  " }}</span>
      <span slot="time">{{ "joined " + userInfo.created }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import EndSpinnerMixin from "../mixins/EndSpinnerMixin";

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  mixins: [EndSpinnerMixin],
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", username);
  },
};
</script>

<style></style>
