<template lang="pug">
Modal.inDemo(name="inDemo")
  Icon.inDemo__icon(id="info")
  .inDemo__text ATLANT DEX exchange is currently in demo, live trading to be enabled once released
</template>

<script>
import Icon from 'components/Icon';
import Modal from 'components/modals/Modal';

export default {
  components: {
    Icon,
    Modal,
  },
};
</script>

<style lang="scss">
@import "~variables";
.inDemo {
  &__icon {
    $size: 128px;
    width: $size;
    height: $size;
    fill: $color_yellow;
  }
  &__text {
    font-size: 18px;
    margin-top: 64px;
    text-align: center;
  }
}
</style>
