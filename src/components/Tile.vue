<template lang='pug'>
.tile(:class="{'tile--padding': padding}")
  slot
</template>

<script>
export default {
  props: {
    padding: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~variables";
.tile {
  border: 1px solid #182235;
  background-color: $color_primary_1;
  &--padding {
    $padding: 26px;
    padding: $padding;
  }
}
</style>
