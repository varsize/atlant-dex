<template lang="pug">
svg(:class="baseClass")
  use(:xlink:href="`#${id}`")
</template>

<script>
export default {
  computed: {
    baseClass() {
      const main = 'svgIcon';
      const modifier = (this.id) ? ` ${main}--${this.id}` : '';
      return `${main}${modifier}`;
    },
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
      default: '',
    },
  },
};
</script>

<style lang="scss" module>
.svgIcon{
  width: 16px;
  height: 16px;
  display: block;
  fill: inherit;
}
</style>
