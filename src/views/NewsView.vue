<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import EndSpinnerMixin from '../mixins/EndSpinnerMixin.js';

export default {
  components: { 
    ListItem,
  },
  mixins: [EndSpinnerMixin],
}
</script>

<style>

</style>