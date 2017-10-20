<template lang="pug">
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
        PropertyMap
      .main__tile
        TileHeader(title="Open orders")
        Orders
      .main__tile
        BuySell
      .main__tile
        BuySell
      .main__tile
        BuySell
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
import Tile from './Tile';
import TileHeader from './TileHeader';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import BuySell from './BuySell';
import Orders from './Orders';
import PropertyMap from './PropertyMap';

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
  methods: {
    ...mapMutations('misc', {
      updateScreenType: 'updateScreenType',
    }),
    ...mapActions('localization', {
      setLang: 'setLang',
    }),
  },
  created() {
    this.setLang();
    this.updateScreenType();

    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.updateScreenType();
      }, 66);
    });
  },
  components: {
    TheHeader,
    TheFooter,
    Tile,
    Sidebar,
    TheHeader,
    Toolbar,
    BuySell,
    Orders,
    TileHeader,
    PropertyMap,
  },
};
</script>

<style lang="scss">
@import "~normalize.css/normalize";
@import "~sass/defaults";
@import "~sass/fonts";
@import "~sass/overrides";
@import "~sass/global";
@import '~variables';

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
    border: 1px solid #182235;
    background-color: $color_primary_1;
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
