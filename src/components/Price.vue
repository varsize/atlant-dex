<template lang="pug">
.price
  .price__value 0.018260
  .price__change (#[Icon.price__icon(id="triangle-red")] #[span 1.73%])
</template>

<script>
import Icon from './Icon';

export default {
  data() {
    return {

    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
@import "~variables";
.price {
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  &__value {
    color: $color_turquoise;
    margin-right: 4px;
  }
  &__change {
    display: flex;
    align-items: center;
    color: $color_red;
  }
  &__icon {
    $size: 8px;
    width: $size;
    height: $size;
    fill: $color_red;
    margin-right: 5px;
  }
}
</style>
