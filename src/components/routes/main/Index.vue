<template lang='pug'>
.main
  .main__sidebar(:class='sidebarClass')
    Sidebar
  .main__toolbar
    Toolbar
  .main__content
    .main__header
      TheHeader
    .main__tiles
      BuySell
      Tile(title="history of trades")
        div sssssssssssssss
      Tile(title="buy" padding)
        div sssssssssssssss
      Tile(title='')
        div MAKE AN ORDER
      div CHART
</template>

<script>
import Tile from 'components/common/Tile';
import Sidebar from 'components/routes/main/Sidebar';
import TheHeader from 'components/global/TheHeader';
import Toolbar from 'components/routes/main/Toolbar';
import BuySell from 'components/routes/main/BuySell';

import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState('misc', {
      showSidebar: 'showSidebar',
    }),
    sidebarClass() {
      return 'main__sidebar' + (this.showSidebar ? '--show' : '');
    },
  },
  components: {
    Tile,
    Sidebar,
    TheHeader,
    Toolbar,
    BuySell,
  },
};
</script>

<style lang="scss">
  @import "~gridstack/dist/gridstack";
  .main {
    display: flex;
    width: 100%;
    &__sidebar {
      width: 0;
      min-width: 0;
      overflow: hidden;
      transition: 0.5s;
      &--show{
        min-width: 287px;
        width: 287px;
      }
    }
    &__toolbar {
      width: 64px;
    }
    &__content {
      width: 100%;
    }
  }
</style>
