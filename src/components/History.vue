<template lang='pug'>
table.history
  tbody.history__body
    tr.history__row(v-for='trade in lastTrades')
      td.history__cell(:class="`history__cell--${(trade[3]) ? 'sell' : 'buy'}`") {{trade[0]}}
      td.history__cell {{trade[1].toFixed(4)}}
      td.history__cell {{(trade[0]*trade[1]).toFixed(4)}}
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState('trade', {
      lastTrades: (state) => state.trades,
    }),
  },
  methods: {
    ...mapActions('trade', {
      loadDesktop: 'loadDesktop',
    }),
  },
  mounted() {
    this.loadDesktop();
  },
};
</script>

<style lang="scss">
@import "~variables";
.history {
  width: 100%;
  &__cell {
    width: 33.333%;
    &--buy {
      color: $color_green;
    }
    &--sell {
      color: $color_red;
    }
  }
}
</style>
