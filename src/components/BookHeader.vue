<template lang='pug'>
.bookHeader
    Icon.bookHeader__icon(id="arrow", :class="{'bookHeader__icon--ask': ask}")
    .bookHeader__title {{price}}
</template>

<script>
import Icon from './Icon';

export default {
  props: {
    ask: {
      type: Boolean,
      default: false,
      required: false,
    },
    price: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
@import "~variables";
.bookHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  background-color: darken(saturate(adjust-hue($color_blue, 1), 1.16), 3.33);
  &__title {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }
  &__icon {
    width: 11px;
    height: 9px;
    margin-right: 13px;
    fill: $color_green;
    &--ask {
      fill: $color_red;
    }
  }
}
</style>
