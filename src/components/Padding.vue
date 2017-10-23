<template lang='pug'>
div(:class="classes")
  slot
</template>

<script>
export default {
  computed: {
    classes() {
      if (!this.top && !this.right && !this.bottom && !this.left) {
        return [
          this.$style.top,
          this.$style.right,
          this.$style.bottom,
          this.$style.left,
        ];
      } else {
        return [
          this.$style.padding,
          {[this.$style.top]: this.top},
          {[this.$style.right]: this.right},
          {[this.$style.bottom]: this.bottom},
          {[this.$style.left]: this.left},
        ];
      }
    },
  },
  created() {
    if (this.top || this.right || this.bottom || this.left) {
      this.top = (this.top) ? true : false;
      this.right = (this.right) ? true : false;
      this.bottom = (this.bottom) ? true : false;
      this.left = (this.left) ? true : false;
    }
  },
  props: {
    top: {
      type: Boolean,
      default: false,
      required: false,
    },
    right: {
      type: Boolean,
      default: false,
      required: false,
    },
    left: {
      type: Boolean,
      default: false,
      required: false,
    },
    bottom: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style lang="scss" module>
$padding: 28px;
.top {
  padding-top: $padding;
}
.right {
  padding-right: $padding;
}
.bottom {
  padding-bottom: $padding;
}
.left {
  padding-left: $padding;
}
</style>
