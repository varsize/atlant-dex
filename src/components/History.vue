<template lang='pug'>
table.history
  tbody.history__body
    tr.history__row(v-for="i in 23")
      td.history__cell(:class="`history__cell--${(i % 2) ? 'buy' : 'sell'}`") 2.000000
      td.history__cell {{0.010.toFixed(3)}}
      td.history__cell {{0.016.toFixed(3)}}
</template>

<script>
export default {
  data() {
    return {
    };
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
