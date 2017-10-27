<template lang="pug">
button.button(
  v-bind="$attrs" v-on="$listeners",
  :class="[`button--${color}`, {'button--full': full}, {'button--outline': outline}, {'button--rounded': rounded}, {'button--caps': caps}]",
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
    caps: {
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
$ROOT: "button";
.#{$ROOT} {
  $padding: 10px;
  height: 28px;
  padding-left: $padding;
  padding-right: $padding;
  color: $color_daintree;
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: inherit;
  }
  &--yellow {
    $color1: #f3de54;
    $color2: darken(desaturate(adjust-hue($color1, -13), 11.89), 8.04);
    $darken_hover: 5%;
    $darken_active: 10%;
    border-color: $color1;
    background-image: linear-gradient(180deg, $color1 0, $color2 100%);
    &:hover {
      background-image: linear-gradient(180deg, darken($color1, $darken_hover) 0, darken($color2, $darken_hover) 100%);
    }
    &:active {
      background-image: linear-gradient(180deg, darken($color1, $darken_active) 0, darken($color2, $darken_active) 100%);
    }
    &.#{$ROOT}--outline {
      color: $color_yellow;
      &:hover {
        background-image: none;
        color: darken($color_yellow, $darken_hover * 2);
      }
      &:active {
        background-image: none;
        color: darken($color_yellow, $darken_active * 2);
      }
    }
  }
  &--sulu {
    $color1: $color_sulu;
    $color2: darken(desaturate(adjust-hue($color1, -13), 11.89), 8.04);
    $darken_hover: 5%;
    $darken_active: 10%;
    border-color: $color_sulu;
    background-image: linear-gradient(180deg, $color1 0, $color2 100%);
    &:hover {
      background-image: linear-gradient(180deg, darken($color1, $darken_hover) 0, darken($color2, $darken_hover) 100%);
    }
    &:active {
      background-image: linear-gradient(180deg, darken($color1, $darken_active) 0, darken($color2, $darken_active) 100%);
    }
    &.#{$ROOT}--outline {
      color: $color_sulu;
      &:hover {
        background-image: none;
        color: darken($color_sulu, $darken_hover * 2);
      }
      &:active {
        background-image: none;
        color: darken($color_sulu, $darken_active * 2);
      }
    }
  }
  &--full {
    width: 100%;
  }
  &--caps {
    text-transform: uppercase;
  }
  &--rounded {
    border-radius: 2px;
  }
  &--outline {
    background-image: none;
    background-color: transparent;
    border-style: solid;
    border-width: 1px;
  }
}
</style>
