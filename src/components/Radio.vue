<template lang='pug'>
label.radio
  input.radio__input(:id="`radio${_uid}`", type="radio", :name="name", @change="change")
  .radio__icon
  .radio__text(v-if="label") {{label}}
</template>

<script>
import Icon from './Icon';

export default {
  model: {
    prop: 'cModel',
    event: 'change',
  },
  methods: {
    change() {
      console.log('test2?');
      this.$emit('change', this.value);
    },
  },
  mounted() {
    if (this.checked) {
      this.change();
      document.querySelector(`#radio${this._uid}`).checked = true;
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
    cValue: {
      type: [String, Number],
      default: '',
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
  },
  components: {
    Icon,
  },
};

</script>

<style lang='scss' scoped>
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
