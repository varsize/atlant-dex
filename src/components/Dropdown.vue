<template lang="pug">
.dropdown
  select.dropdown__select(@change="select($event.target.value)")
    option.dropdown__option(v-for="option in options", :value="option") {{option}}
  Icon.dropdown__triangle(id="triangle-down")
</template>

<script>
import Icon from './Icon';

export default {
  model: {
    event: 'change',
  },
  methods: {
    select(val) {
      this.$emit('change', val);
    },
  },
  created() {
    this.select(this.options[0]);
  },
  props: {
    options: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
.dropdown {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  &__select {
    width: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    appearance: none;
    background-color: transparent;
  }
  &__option {
    color: #000;
  }
  &__triangle {
    width: 12px;
    height: 6px;
    fill: #fff;
    position: absolute;
    right: 0;
    pointer-events: none;
  }
}
</style>
