<template lang='pug'>
.buySell
  .buySell__header
    Icon.buySell__flag(id="flag")
    .buySell__option.buySell__option--active Buy
    .buySell__option Sell
  .buySell__main
    .buySell__orderTypes
      .buySell__orderTypeContainer
        Icon.buySell__radio(id='circle')
        .buySell__orderType MARKET
      .buySell__orderTypeContainer
        Icon.buySell__radio.buySell__radio--active(id='circle-active')
        .buySell__orderType.buySell__orderType--active LIMIT
    .buySell__label Amount to buy
    input.buySell__input
    .buySell__label Total
    input.buySell__input
    .buySell__label Price
    input.buySell__input
    button.buySell__button PLACE ORDER
    li.buySell__note Do not forget to top up the trade balance
</template>

<script>
import Icon from 'components/common/Icon';

export default {
  data() {
    return {
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
  @import "~variables";
  .buySell {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #182235;
    width: 250px;
    &__header{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #182235;
      width: 100%;
      padding: 24px 35px 0 35px;
    }
    &__flag{
      width: 7px;
      height: 10px;
      margin-right: 15px;
    }
    &__option{
      margin-right: 15px;
      padding: 10px 15px;
      font-weight: bold;
      &--active{
        color: #7ed321;
        border: 1px solid #182235;
        border-bottom: 1px solid $color_primary_1;
      }
    }
    &__main{
      padding: 0 35px 82px 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__orderTypes{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 40px;
      margin-bottom: 30px;
    }
    &__orderTypeContainer{
      display: flex;
      flex-direction: row;
    }
    &__orderType{
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
      list-style: none;
      &::before{
        content: "• ";
        color: #f3ad28;
      }
    }
  }
</style>
