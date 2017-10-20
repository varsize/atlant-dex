<template lang='pug'>
.address
  canvas.address__qr(:class='"address__qr"+id', v-show="isActive")
  .address__main(:class="mainClass")
    Icon.address__icon(id='qr')
    .address__crypto {{address}}
  .address__details(v-show="isActive")
    .address__actions
      .address__export Export
      .address__withdraw Withdraw
      .address__remove Remove
    .address__separate -
    .address__balances
      .address__balanceText SAFE BALANCE:
      .address__balanceRow
        .address__currency ETH
        .address__balance 5.869506517
      .address__balanceRow
        .address__currency USD
        .address__balance 0
    .address__separate -
    .address__transferRow
      Icon.address__transferIcon(id="transfer")
      .address__transferText Transfer to trade balance
</template>

<script>
import Qrious from 'qrious';
import Icon from './Icon';

export default {
  computed: {
    mainClass() {
      return 'address__main' + (this.isActive ? '--active' : '');
    },
  },
  methods: {
    createQR(text) {
      new Qrious({
        element: document.querySelector('.address__qr' + this.id),
        background: '#03354f',
        foreground: '#fff',
        value: text,
        size: 111,
      });
    },
  },
  mounted() {
    this.createQR(this.address);
  },
  props: {
    isActive: {
      type: Boolean,
      required: false,
      default: false,
    },
    address: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang='scss' scoped>
@import '~variables';
.address{
  display: flex;
  flex-direction: column;
  align-items: center;
  &__qr{
    margin-bottom: 20px;
  }
  &__main{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    fill: #9b9b9b;
    &--active {
      fill: #7ed321;
    }
    &:hover {
      fill: #7ed321;
      cursor: pointer;
      font-weight: bold;
    }
  }
  &__icon{
    $size: 18px;
    width: $size;
    height: $size;
    margin-right: 10px;
  }
  &__crypto {
    max-width: 177px;
    word-wrap: break-word;
  }
  &__details{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    padding-left: 28px;
    width: 100%;
  }
  &__actions{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
    * {
      margin-right: 21px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  &__export {
    color: #e9bd24;
  }
  &__remove {
    color: #f36565;
  }
  &__separate {
    width: 100%;
  }
  &__balances {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  &__balanceText {
    margin-top: 16px;
    font-weight: bold;
  }
  &__balanceRow {
    display: flex;
    font-size: 16px;
    font-weight: 300;
    margin-top: 16px;
    &:last-of-type{
      margin-bottom: 16px;
    }
  }
  &__currency {
    margin-right: 18px;
  }
  &__balance {
    color: #31edd7;
  }
  &__transferRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 16px;
    color: #e9bd24;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  &__transferIcon {
    height: 21px;
    width: 29px;
    margin-right: 14px;
  }
}
</style>
