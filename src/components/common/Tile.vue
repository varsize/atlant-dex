<template lang='pug'>
.tile(:class="{'tile--padding': padding}")
  Header(v-if="title", :title="title")
  slot
</template>

<script>
import Icon from './Icon';
import Header from './Header';

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
    Header,
  },
};
</script>

<style lang="scss" scoped>
@import "~variables";
.tile {
  border: 1px solid #182235;
  background-color: cyan;
  &--padding {
    $padding: 26px;
    padding: $padding;
  }
}
</style>
