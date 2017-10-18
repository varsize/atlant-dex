<template lang='pug'>
.buySell
  .buySell__header
    Icon.buySell__flag(id="flag")
    .buySell__tab(@click="isBuy = true", :class="{'buySell__tab--active': isBuy}") Buy
    .buySell__tab(@click="isBuy = false", :class="{'buySell__tab--active': !isBuy}") Sell
  .buySell__main
    .buySell__types
      .buySell__typeWrapper
        Icon.buySell__radio(id='circle')
        .buySell__type MARKET
      .buySell__typeWrapper
        Icon.buySell__radio.buySell__radio--active(id='circle-active')
        .buySell__type.buySell__type--active LIMIT
    .buySell__label Amount to buy
    input.buySell__input
    .buySell__label Total
    input.buySell__input
    .buySell__label Price
    input.buySell__input
    button.buySell__button PLACE ORDER
    div.buySell__note Do not forget to top up the trade balance
</template>

<script>
import Icon from 'components/common/Icon';

export default {
  data() {
    return {
      isBuy: true,
    };
  },
  computed: {
  },
  methods: {
  },
  components: {
    Icon,
  },
};

</script>

<style lang='scss'>
  .buySell {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__header{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding-top: 24px;
      border-bottom: 1px solid #182235;
    }
    &__flag{
      width: 7px;
      height: 10px;
      margin-right: 8px;
    }
    &__tab{
      padding: 4px 15px;
      font-weight: bold;
      font-size: 12px;
      text-transform: uppercase;
      line-height: 100%;
      position: relative;
      cursor: pointer;
      &:first-of-type {
        margin-right: 15px;
      }
      &--active{
        color: #7ed321;
        border: 1px solid #182235;
        border-bottom: 0;
        &::after {
          content: "";
          width: 10px;
          height: 1px;
          background-color: #03354f;
          display: block;
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
        }
      }
    }
    &__main {
      padding: 34px;
    }
    &__types{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 30px;
    }
    &__typeWrapper{
      display: flex;
      flex-direction: row;
    }
    &__type{
      font-size: 12px;
      font-weight: bold;
      color: #9b9b9b;
      margin-left: 10px;
      &--active{
        color: #7ed321;
      }
    }
    &__radio{
      $size: 12px;
      width: $size;
      height: $size;
    }
    &__label{
      width: 100%;
      margin-bottom: 6px;
      margin-top: 12px;
      font-size: 12px;
    }
    &__input {
      width: 100%;
    }
    &__button{
      margin-top: 34px;
      width: 100%;
      font-size: 12px;
      color: #02334d;
      background-image: linear-gradient(180deg, #fae045 0%, #f0650a 100%);
      border: none;
      font-weight: 700;
    }
    &__note{
      margin-top: 38px;
      font-size: 9px;
      font-weight: 300;
      text-align: center;
      list-style: none;
      &::before{
        content: "• ";
        color: #f3ad28;
      }
    }
  }
</style>
