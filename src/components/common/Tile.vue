<template lang='pug'>
.tile(:class="{'tile--padding': padding}")
  .tile__header
    .tile__headerLeft
      Icon.tile__flag(id="flag")
      .tile__title {{title}}
  slot
</template>

<script>
import Icon from 'components/common/Icon';

export default {
  props: {
    padding: {
      type: Boolean,
      default: true,
      required: false,
    },
    title: {
      type: String,
      default: '',
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
.tile {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__headerLeft {
    display: flex;
    align-items: center;
  }
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
  }
  &--padding {
    $padding: 26px;
    padding: $padding;
  }
}
</style>
