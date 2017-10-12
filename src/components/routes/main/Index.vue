<template lang='pug'>
.container
  .row.mb-5.mt-5
    .col#left
      div.content__box content left
    .col#right
      div.content__box content right
      div.content__box content right 2
</template>

<script>

import dragula from 'dragula';

export default {
  methods: {
  },
  mounted() {
    dragula([document.querySelector('#left'), document.querySelector('#right')]);
  },
  components: {
  },
};

</script>

<style lang="scss">
  #right, #left {
    border: 1px solid black;
  },
  .content{
    &__box{
      border: 1px solid black;
    }
  }
</style>
