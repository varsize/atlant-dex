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
      .main__tile.main__tile--history
        BuySell
      .main__tile.main__tile--book
        BuySell
      .main__tile.main__tile--orders.main__tile--padding
        TileHeader(title="Open orders")
        .main__orders
          Orders
        .main__ordersSep
        TileHeader(title="Completed orders")
        .main__orders
          Orders
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
  $tilePadding: 32px;
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
  &__orders {
    margin-left: -$tilePadding;
  }
  &__ordersSep {
    $margin: 18px;
    width: 100%;
    margin-top: $margin;
    margin-bottom: $margin + 8;
    border: 1px solid #032537;
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
    &--history {
      flex-basis: 20%;
    }
    &--book {
      flex-basis: 40%;
    }
    &--orders {
      flex-basis: 40%;
    }
    &--padding {
      padding: $tilePadding;
    }
  }
}
</style>
