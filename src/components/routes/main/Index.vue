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
      .main__tile.main__tile--buysell
        BuySell
      .main__tile.main__tile--chart
        BuySell
      .main__tile.main__tile--map
        BuySell
      .main__tile
        BuySell
      .main__tile
        BuySell
      .main__tile
        BuySell
      .main__tile
        BuySell
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
      if (this.showSidebar) {
        return 'main__sidebar--show';
      }
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
    &__tiles {
      display: flex;
      flex-wrap: wrap;
    }
    &__tile {
      flex-grow: 1;
      &--buysell {
        flex-basis: 20%;
      }
      &--chart {
        flex-basis: 40%;
      }
      &--map {
        flex-basis: 40%;
      }
    }
  }
</style>
