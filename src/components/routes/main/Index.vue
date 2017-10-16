<template lang='pug'>
.main
  .main__siderbar
      Sidebar
  .main__toolbar
  .main__content
    .main__header
      TheHeader
    .main__tiles
      Tile(title="history of trades")
        div sssssssssssssss
      Tile(title="buy" padding)
        div sssssssssssssss
      div CHART
</template>

<script>
import Tile from 'components/common/Tile';
import Sidebar from 'components/routes/main/Sidebar';
import TheHeader from 'components/global/TheHeader';

export default {
  components: {
    Tile,
    Sidebar,
    TheHeader,
  },
};

</script>

<style lang="scss">
  .main {
    display: flex;
    &__sidebar {
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
