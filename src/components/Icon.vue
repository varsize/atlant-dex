<template lang="pug">
svg.svgIcon
  use(:xlink:href="`#${id}`")
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.svgIcon{
  $size: 16px;
  width: $size;
  height: $size;
}
</style>
