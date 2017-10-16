<template lang='pug'>
.header(:class="{'header--center': center}")
    Icon.header__flag(id="flag")
    .header__title {{title}}
</template>

<script>
import Icon from 'components/common/Icon';

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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  &--center {
    justify-content: center;
  }
}
</style>
