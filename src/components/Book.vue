<template lang='pug'>
div
  BookHeader(:ask="ask")
  Padding
    table.book
      tbody.book__body
        tr.book__row(v-for="order in orderBook")
          td.book__cell(:class="`book__cell--${(ask) ? 'ask' : 'bid'}`") {{order[0]}}
          td.book__cell {{order[1].toFixed(4)}}
          td.book__cell {{(order[0]*order[1]).toFixed(4)}}
</template>

<script>
import {mapState} from 'vuex';
import BookHeader from './BookHeader';
import Padding from './Padding';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState('trade', {
      book: (state) => state.book,
    }),
    orderBook() {
      return (this.ask) ? this.book.asks : this.book.bids;
    },
  },
  mounted() {
  },
  props: {
    ask: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  components: {
    BookHeader,
    Padding,
  },
};
</script>

<style lang="scss">
@import "~variables";
.book {
  width: 100%;
  &__cell {
    width: 33.333%;
    &--ask {
      color: $color_red;
    }
    &--bid {
      color: $color_green;
    }
  }
}
</style>
