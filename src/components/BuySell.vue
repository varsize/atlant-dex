<template lang='pug'>
.buySell
  .buySell__header
    Icon.buySell__flag(id="flag")
    .buySell__tab(@click="isBuy = true", :class="{'buySell__tab--active': isBuy}") Buy
    .buySell__tab(@click="isBuy = false", :class="{'buySell__tab--active': !isBuy}") Sell
  .buySell__main
    .buySell__types
      Radio(:name="`type${_uid}`", value="market", label="Market", v-model="type", checked)
      Radio(:name="`type${_uid}`", value="limit", label="Limit", v-model="type")
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
import Icon from './Icon';
import Radio from './Radio';

export default {
  data() {
    return {
      type: '',
      isBuy: false,
    };
  },
  components: {
    Icon,
    Radio,
  },
};

</script>

<style lang='scss'>
@import "~variables";
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
    fill: $color_yellow;
  }
  &__types {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
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
    font-family: 'Roboto';
    margin-top: 34px;
    width: 100%;
    font-size: 12px;
    color: #02334d;
    background: linear-gradient(to bottom,#1e5799 0,#f3de54 0,#e3a83b 100%);
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
