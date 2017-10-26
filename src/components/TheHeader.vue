<template lang="pug">
header.header
  .header__group
    .header__block.header__block--pair
      Pair
    .header__block
      Price
  .header__group
    .header__block
      .header__balance Trade balance:
      Balance(currency="ETH")
      .header__separator |
      Balance(currency="ATL")
      button.header__transfer Transfer to safe balance
  .header__group
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
    justify-content: space-between;
    padding: 12px 28px;
    width: 100%;
    color: #fff;
    &__group {
      display: flex;
      align-items: center;
    }
    &__block {
      display: flex;
      align-items: center;
      &--pair {
        margin-right: 18px;
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
    &__transfer {
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
      fill: #fff;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
