<template lang='pug'>
.sidebar
  .sidebar__item
    Icon.sidebar__logo(id="logo")
  .sidebar__content
    .sidebar__main
      .sidebar__item.sidebar__header WALLETS:
      CryptoAddress.sidebar__item(v-for="(account, index) in accounts",
      :isActive="account.isActive", :address="account.address", :id="index",
      :key="account.address", @click.native='setActive(account)')
      .sidebar__item.sidebar__buttons
        button.sidebar__create Create new
        span or
        button.sidebar__import Import
    .sidebar__item.sidebar__copyright Copyright &#169; Atlant, 2017
</template>

<script>
import CryptoAddress from 'components/common/CryptoAddress';
import Icon from 'components/common/Icon';

export default {
  data() {
    return {
      accounts: [
        {
          address: '14rMGBspAtEv4oNdbKsKYAT7tbSgUstzBs',
          isActive: false,
        },
        {
          address: '14rMGBspAtEv4oNdbKsKYAT7tbSgUstzBt',
          isActive: true,
        },
        {
          address: '14rMGBspAtEv4oNdbKsKYAT7tbSgUstzBu',
          isActive: false,
        },
        {
          address: '14rMGBspAtEv4oNdbKsKYAT7tbSgUstzBv',
          isActive: false,
        },
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
  },
};

</script>

<style lang="scss">
  .sidebar {
    &__item {
      padding: 40px 25px;
      border-bottom: 1px solid #032537;
      border-right: 1px solid #032537;
      font-size: 12px;
    }
    &__logo {
      width: 164px;
      height: 15px;
      fill: #fff;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__header {
      font-weight: 700;
    }
    &__buttons {
      font-weight: bold;
    }
    &__create {
      background-image: linear-gradient(180deg, #fae045 0%, #f0650a 100%);
      color: #022a41;
      margin-right: 10px;
    }
    &__import {
      color: #b8e986;
      background-color: transparent;
      margin-left: 10px;
    }
    &__copyright {
      font-size: 8px;
    }
  }
</style>
