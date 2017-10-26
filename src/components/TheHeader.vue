<template lang="pug">
header.header
  .header__block.header__block--pair
    Pair
  .header__block.header__block--price
    Price
  .header__block
    .header__balanceText TRADE BALANCE:
    .header__currency ETH
    .header__balance 0.2873403
    Icon.header__deposit(id='deposit')
    .header__separator |
    .header__currency ATL
    .header__balance 1.0526064
    Icon.header__deposit(id='deposit')
    button.header__transferSafe Transfer to safe balance
  .header__block
    Icon.header__info(id="info")
</template>

<script>
import Icon from './Icon';
import Pair from './Pair';
import Price from './Price';

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    Icon,
    Pair,
    Price,
  },
};
</script>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    padding: 12px 28px;
    width: 100%;
    color: #fff;
    &__block {
      display: flex;
      align-items: center;
      &--pair {
        flex-basis: 16%;
        margin-right: 18px;
      }
      &--price {
        margin-right: 70px;
      }
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
      fill: #7ed321;
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
