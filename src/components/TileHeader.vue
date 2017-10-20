<template lang='pug'>
.tileHeader(:class="{'header--center': center}")
  .tileHeader__wrapper
    Icon.tileHeader__flag(id="flag")
    .tileHeader__title {{title}}
</template>

<script>
import Icon from './Icon';

export default {
  props: {
    title: {
      type: String,
      default: '',
      required: false,
    },
    center: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "~variables";
.tileHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  &__title {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
  &__flag {
    width: 7px;
    height: 10px;
    margin-right: 15px;
    fill: $color_yellow;
  }
  &__wrapper {
    display: flex;
  }
  &--center {
    justify-content: center;
  }
}
</style>
