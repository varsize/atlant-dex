<template lang='pug'>
.main
  .main__sidebar
      Sidebar
  .main__toolbar
  .main__content
    .main__header
      TheHeader
    .main__tiles
      .grid-stack
        .grid-stack-item(
          data-gs-x="0",
          data-gs-y="0",
          data-gs-width="2",
          data-gs-height="2",
          )
          Tile(title="history of trades")
            div sssssssssssssss
        .grid-stack-item(
          data-gs-x="0",
          data-gs-y="0",
          data-gs-width="2",
          data-gs-height="2",
          )
          Tile(title="buy" padding)
            div sssssssssssssss
</template>

<script>
import Tile from 'components/common/Tile';
import Sidebar from 'components/routes/main/Sidebar';
import TheHeader from 'components/global/TheHeader';
import $ from 'jquery';
import 'gridstack';

export default {
  mounted() {
    $('.grid-stack').gridstack();
  },
  components: {
    Tile,
    Sidebar,
    TheHeader,
  },
};
</script>

<style lang="scss">
  @import "~gridstack/dist/gridstack";
  .main {
    display: flex;
    &__sidebar {
      max-width: 287px;
      border: 1px solid black;
    }
    &__toolbar {
      width: 64px;
      background-color: red;
    }
    &__content {
      width: 100%;
    }
  }
</style>
