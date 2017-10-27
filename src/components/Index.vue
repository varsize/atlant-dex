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
        Chart
      .main__tile.main__tile--map
        PropertyMap
      .main__tile.main__tile--history
        Padding
          Padding(bottom)
            TileHeader(title="History of trades" center)
          History
      .main__tile.main__tile--book
        Padding
          TileHeader(title="Order book" center)
        .d-flex.w-100
          .main__tile
            Book
          .main__tile
            Book(ask)
      .main__tile.main__tile--orders
        Padding
          Padding(bottom)
            TileHeader(title="Open orders")
          Orders
          .main__ordersSep
          Padding(bottom)
            TileHeader(title="Completed orders")
          .main__orders
            Orders
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
import Padding from './Padding';
import TileHeader from './TileHeader';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import BuySell from './BuySell';
import Chart from './Chart';
import Orders from './Orders';
import Book from './Book';
import History from './History';
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
    Padding,
    Sidebar,
    TheHeader,
    Toolbar,
    BuySell,
    Orders,
    TileHeader,
    Book,
    History,
    PropertyMap,
    Chart,
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
@import "~sass/bootstrap/flex";
@import "~bootstrap/scss/utilities/sizing";

.main {
  $tilePadding: 32px;
  display: flex;
  width: 1920px;
  margin-left: auto;
  margin-right: auto;
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
    // margin-left: -$tilePadding;
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
    background-color: $color_blue;
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
  }

  @media (max-width: 991px) {
    .main {
    }
  }
}
</style>
