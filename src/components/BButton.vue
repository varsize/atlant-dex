<template lang="pug">
button.button(
  v-bind="$attrs" v-on="$listeners",
  :class="[`button--${color}`, {'button--full': full}, {'button--outline': outline}, {'button--rounded': rounded}]",
  :disabled="isLoading(loader)"
)
  span.button__content
    slot
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters('loader', {
      isLoading: 'isLoading',
    }),
  },
  props: {
    color: {
      type: String,
      required: false,
      default: 'green',
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    outline: {
      type: Boolean,
      required: false,
      default: false,
    },
    full: {
      type: Boolean,
      required: false,
      default: false,
    },
    loader: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang='scss'>
@import '~variables';
.button {
  $padding: 10px;
  height: 28px;
  padding-left: $padding;
  padding-right: $padding;
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color_daintree;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
  &--yellow {
    $color1: #f3de54;
    $color2: #e3a83b;
    $darken_hover: 5%;
    $darken_active: 10%;
    background-image: linear-gradient(180deg, $color1 0, $color2 100%);
    &:hover {
      background-image: linear-gradient(180deg, darken($color1, $darken_hover) 0, darken($color2, $darken_hover) 100%);
    }
    &:active {
      background-image: linear-gradient(180deg, darken($color1, $darken_active) 0, darken($color2, $darken_active) 100%);
    }
    &:disabled {
    }
  }
  &--full {
    width: 100%;
  }
  &--rounded {
    border-radius: 2px;
  }
}
</style>
