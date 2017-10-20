<template lang="pug">
.theHeader
  .theHeader__block
    .theHeader__text Your current pair:
    .theHeader__currency ETH
    Icon.theHeader__exchange(id="exchange")
    .theHeader__dropdown
      select.theHeader__select
        option.theHeader__option ATL
        option.theHeader__option ATLXXX
        option.theHeader__option ATLYYY
        option.theHeader__option ATLZZZ
      Icon.theHeader__selectIcon(id="triangle-down")
    .theHeader__price 0.018260
    .theHeader__change
      span (
      Icon.theHeader__triangle(id="triangle-red")
      span 1.73%)
  .theHeader__block
    .theHeader__balanceText TRADE BALANCE:
    .theHeader__currency ETH
    .theHeader__balance 0.2873403
    Icon.theHeader__deposit(id='deposit')
    .theHeader__separator |
    .theHeader__currency ATL
    .theHeader__balance 1.0526064
    Icon.theHeader__deposit(id='deposit')
    button.theHeader__transferSafe Transfer to safe balance
  .theHeader__block
    Icon.theHeader__info(id="info")
</template>

<script>
import Icon from './Icon';

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
  .theHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 12px 28px;
    line-height: 22px;
    width: 100%;
    color: #fff;

    &__block {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__text {
      font-size: 12px;
      margin-right: 17px;
    }
    &__currency {
      font-weight: bold;
    }
    &__exchange {
      $size: 15px;
      height: $size;
      width: $size;
      transform: rotate(90deg);
      margin: 0 10px;
    }
    &__dropdown {
      position: relative;
    }
    &__select {
      appearance: none;
      background-color: transparent;
      color: #fff;
      font-weight: bold;
      width: 80px;
    }
    &__option {
      color: #000;
    }
    &__selectIcon{
      width: 12px;
      height: 6px;
      fill: #fff;
      margin-left: 10px;
      position: absolute;
      right: 5px;
      margin-top: -13px;
      z-index: -1;
    }
    &__price{
      margin-left: 18px;
      color: #32f7bd;
      font-size: 14px;
      font-weight: 700;
    }
    &__change {
      display: flex;
      align-items: center;
      color: #f33a3a;
      margin-left: 5px;
      font-size: 14px;
    }
    &__triangle {
      $size: 7px;
      height: $size;
      width: $size;
      fill: red;
      margin: 0 3px;
    }
    &__balanceText {
      font-size: 12px;
      font-weight: bold;
      margin-right: 18px;
    }
    &__balance {
      margin: 0 11px;
      font-size: 22px;
      font-weight: 300;
    }
    &__deposit {
      $size: 14px;
      height: $size;
      width: $size;
      &:hover {
        cursor: pointer;
      }
    }
    &__separator {
      margin: 0 11px;
    }
    &__transferSafe {
      font-size: 12px;
      margin-left: 26px;
      border-color: #e9bd24;
      color: #e9bd24;
      background-color: transparent;
    }
    &__info {
      $size: 16px;
      height: $size;
      width: $size;
      fill: #ffffff;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
