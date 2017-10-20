<template lang='pug'>
label.radio
  input.radio__input(type="radio", :value="value", :name="name", @change="change", ref="input")
  .radio__icon
  .radio__text(v-if="label") {{label}}
</template>

<script>
import Icon from './Icon';

export default {
  methods: {
    change(e) {
      this.onChange(e.target.value);
    },
  },
  mounted() {
    if (this.checked) {
      const el = document.querySelector('.radio__input');
      el.checked = true;
      this.onChange(el.value);
    }
  },
  props: {
    name: {
      type: [String, Number],
      default: '',
      required: true,
    },
    value: {
      type: [String, Number],
      default: '',
      required: false,
    },
    label: {
      type: [String, Number],
      default: '',
      required: false,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
    onChange: {
      type: Function,
      default: () => {},
      required: false,
    },
  },
  components: {
    Icon,
  },
};

</script>

<style lang='scss'>
@import "~variables";
$ROOT: "radio";
.#{$ROOT} {
  display: flex;
  align-items: center;
  &__input {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    &:checked {
      & + .#{$ROOT}__icon {
        border-color: $color_green;
        background-color: $color_green;
      }
    }
  }
  &__icon {
    $size: 12px;
    width: $size;
    height: $size;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    border-color: $color_yellow;
  }
  &__text {
    font-size: 12px;
    font-weight: bold;
    margin-left: 10px;
    color: inherit;
    text-transform: uppercase;
  }
}
</style>
