<template lang="pug">
.pair
  .pair__label Your current pair:
  .pair__currency ETH
  Icon.pair__exchange(id="exchange")
  Dropdown.pair__dropdown(:options="currencies" v-model="selected")
</template>

<script>
import {mapMutations} from 'vuex';
import Icon from './Icon';
import Dropdown from './Dropdown';

export default {
  data() {
    return {
      selected: '',
      currencies: [
        'ATL',
        'ATLE',
        'ATLF',
        'ATLG',
      ],
    };
  },
  methods: {
    ...mapMutations('trade', {
      setCurrency: 'setCurrency',
    }),
  },
  components: {
    Icon,
    Dropdown,
  },
};
</script>

<style lang="scss">
.pair {
  display: flex;
  align-items: center;
  width: 100%;
  &__label {
    font-size: 12px;
    margin-right: 17px;
    flex-shrink: 0;
  }
  &__dropdown {
    min-width: 64px;
  }
  &__currency {
    font-weight: bold;
    font-size: 16px;
  }
  &__exchange {
    $size: 15px;
    height: $size;
    width: $size;
    transform: rotate(90deg);
    margin: 0 10px;
    fill: #e9bd24;
  }
}
</style>
