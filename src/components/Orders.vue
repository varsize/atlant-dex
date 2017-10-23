<template lang='pug'>
table.orders
  tbody.orders__body
    tr.orders__row(v-for="i in 7")
      td.orders__cell
        .orders__typeWrapper
          .orders__square(:class="{'orders__square--buy': getType(i), 'orders__square--sell': !getType(i)}")
          .orders__type {{(getType(i)) ? 'Buy' : 'Sell'}}
      td.orders__cell {{getItem(i).eth.toFixed(3)}}
      td.orders__cell {{getItem(i).atl.toFixed(3)}}
      td.orders__cell {{getItem(i).atl.toFixed(3)}}
      td.orders__cell {{getItem(i).date}}
      td.orders__cell
        Icon.orders__trash(id="trash")
  tfoot.orders__header
    tr
      th.orders__title Type
      th.orders__title ETH
      th.orders__title ETH
      th.orders__title ETH/ETH
      th.orders__title Date
      th.orders__title
</template>

<script>
import Icon from './Icon';

export default {
  data() {
    return {
      items: [
        {
          buy: true,
          eth: 7.000,
          atl: 7.272,
          date: '12.12.2017',
        },
        {
          buy: false,
          eth: 0.526,
          atl: 1.500,
          date: '31.11.2017',
        },
      ],
    };
  },
  methods: {
    getItem(index) {
      return this.items[index % 2];
    },
    getType(index) {
      return this.getItem(index).buy;
    },
  },
  components: {
    Icon,
  },
};

</script>

<style lang='scss'>
@import "~variables";
.orders {
  width: 100%;
  &__cell {
    padding-bottom: 4px;
  }
  &__title {
    text-align: left;
    text-transform: uppercase;
    color: lighten(desaturate(adjust-hue($color_blue, 9), 47.23), 11.96);
  }
  &__typeWrapper {
    display: flex;
    align-items: center;
  }
  &__type {
    text-transform: uppercase;
  }
  &__square  {
    $size: 8px;
    width: $size;
    height: $size;
    border-radius: 1px;
    margin-right: 16px;
    &--buy {
      background-color: #7ed321;
    }
    &--sell {
      background-color: #f33a3a;
    }
  }
  &__trash {
    width: 7px;
    height: 9px;
    fill: $color_yellow;
  }
}
</style>
