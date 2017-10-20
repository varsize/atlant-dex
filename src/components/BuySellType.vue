<template lang='pug'>
.buySellType
  Radio(name="type", value="market", label="Market", :onChange="onChange", checked)
  Radio(name="type", value="limit", label="Limit", :onChange="onChange")
</template>

<script>
import Icon from './Icon';
import Radio from './Radio';

export default {
  data() {
    return {
      type: '',
    };
  },
  computed: {
  },
  methods: {
    onChange(value) {
      this.type = value;
    },
  },
  components: {
    Icon,
    Radio,
  },
};

</script>

<style lang='scss'>
@import "~variables";
.buySellType {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &__wrapper {
    display: flex;
    flex-direction: row;
    color: #9b9b9b;
    stroke: $color_yellow;
    &--active {
      stroke: none;
      fill: $color_green;
      color: $color_green;
    }
  }
  &__type {
    font-size: 12px;
    font-weight: bold;
    margin-left: 10px;
    color: inherit;
  }
  &__radio {
    $size: 12px;
    width: $size;
    height: $size;
    fill: inherit;
    stroke: inherit;
    cursor: pointer;
  }
}
</style>
