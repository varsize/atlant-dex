<template lang="pug">
header.header
  .header__block.header__block--pair
    Pair
  .header__block.header__block--price
    Price
  .header__block
    .header__balance Trade balance:
    Balance(currency="ETH")
    .header__separator |
    Balance(currency="ATL")
    button.header__transferSafe Transfer to safe balance
  .header__block
    Icon.header__info(id="info")
</template>

<script>
import Icon from './Icon';
import Pair from './Pair';
import Price from './Price';
import Balance from './Balance';

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
    Balance,
  },
};
</script>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
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
    &__balance {
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 22px;
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
