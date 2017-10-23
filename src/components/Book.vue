<template lang='pug'>
div
  BookHeader(:ask="ask")
  Padding
    table.book
      tbody.book__body
        tr.book__row(v-for="i in 19")
          td.book__cell {{7.272.toFixed(3)}}
          td.book__cell {{7.000.toFixed(3)}}
          td.book__cell(:class="`book__cell--${(ask) ? 'ask' : 'bid'}`") 0.926678
</template>

<script>
import BookHeader from './BookHeader';
import Padding from './Padding';

export default {
  data() {
    return {
    };
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
