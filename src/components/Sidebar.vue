<template lang='pug'>
.sidebar
  .sidebar__item.sidebar__item--logo
    Icon.sidebar__logo(id="logo")
    span.sidebar__demo DEMO
  .sidebar__item.sidebar__item--header Wallets
  .sidebar__item(v-for="(account, index) in accounts")
    CryptoAddress(
      :isActive="account.isActive",
      :address="account.address", :id="index",
      :key="account.address",
      @click.native='setActive(account)'
    )
  .sidebar__item
    .sidebar__buttons
      BButton(color="yellow" rounded @click="openInDemo") Create new
      b or
      BButton(color="sulu" rounded outline @click="openInDemo") Import
  .sidebar__item.sidebar__item--copyright Copyright &#169; Atlant, 2017
</template>

<script>
import Icon from './Icon';
import BButton from './BButton';
import CryptoAddress from './CryptoAddress';

export default {
  data() {
    return {
      accounts: [
        {
          address: 'demowallet',
          isActive: true,
        },
        // {
        //   address: '14rMGBspAtEv4oNdbKsKYAT7tbSgUstzBt',
        //   isActive: true,
        // },
        // {
        //   address: '14rMGBspAtEv4oNdbKsKYAT7tbSgUstzBu',
        //   isActive: false,
        // },
        // {
        //   address: '14rMGBspAtEv4oNdbKsKYAT7tbSgUstzBv',
        //   isActive: false,
        // },
      ],
    };
  },
  methods: {
    setActive(account) {
      for (let i = 0; i < this.accounts.length; i++) {
        this.accounts[i].isActive = false;
      }
      account.isActive = true;
    },
  },
  components: {
    CryptoAddress,
    Icon,
    BButton,
  },
};

</script>

<style lang="scss">
  .sidebar {
    width: 287px;
    &__item {
      padding: 26px;
      border-bottom: 1px solid #032537;
      border-right: 1px solid #032537;
      font-size: 12px;
      &--logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        font-weight: bold;
        color: red;
      }
      &--header {
        font-weight: 700;
      }
      &--copyright {
        font-size: 8px;
      }
    }
    &__demo {
      margin-top: 5px;
    }
    &__logo {
      width: 164px;
      height: 16px;
      fill: #fff;
    }
    &__buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 75%;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
