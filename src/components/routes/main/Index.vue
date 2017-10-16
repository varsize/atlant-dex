<template lang='pug'>
div
  .row
    .col-3
      Sidebar
    .col-2
      Tile(title="history of trades")
        div sssssssssssssss
      Tile(title="buy" padding)
        div sssssssssssssss
    .col-7
      div CHART
</template>

<script>

import Tile from 'components/common/Tile';
import Sidebar from 'components/routes/main/Sidebar';

export default {
  components: {
    Tile,
    Sidebar,
  },
};

</script>

<style lang="scss">
  .content{
    &__box{
      border: 1px solid black;
    }
  }
</style>
