<template lang="pug">
svg.svgIcon(v-on="$listeners")
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
