<template lang='pug'>
table.orders
  tbody.orders__body
    tr.orders__row(v-for="i in 25")
      td.orders__cell {{(getType(i)) ? 'Buy' : 'Sell'}}
        td.orders__square(:class="{'orders__square--buy': getType(i),'orders__square--sell': !getType(i)}")
        td.orders__type
      td.orders__cell {{getItem(i).eth}}
      td.orders__cell {{getItem(i).atl}}
      td.orders__cell {{getItem(i).atl}}
      td.orders__cell {{getItem(i).date}}
  tfoot.orders__header
    tr
      th.orders__title Type
      th.orders__title ETH
      th.orders__title ETH
      th.orders__title ETH/ETH
      th.orders__title Date
</template>

<script>
import Icon from 'components/common/Icon';

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
      return this.getItem(index).type;
    },
  },
  components: {
    Icon,
  },
};

</script>

<style lang='scss'>
.orders {
  width: 100%;
  &__cell {
  }
  &__type {
    text-transform: uppercase;
  }
  &__square  {
    $size: 8px;
    width: $size;
    height: $size;
    &--buy {
      background-color: #7ed321;
    }
    &--sell {
      background-color: #f33a3a;
    }
  }
}
</style>
