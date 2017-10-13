<template lang='pug'>
.container
  .row.mb-5.mt-5
    .col
      div.content__box content left
    .col
      div.content__box content right
      div.content__box content right 2
</template>

<script>

export default {
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
