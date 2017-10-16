<template lang='pug'>
.sidebar
  .sidebar__item.sidebar__logo ATLANT DEX
  .sidebar__content
    .sidebar__main
      .sidebar__item.sidebar__header WALLETS:
      CryptoAddress.sidebar__item()
      CryptoAddress.sidebar__item(:isActive="true")
      CryptoAddress.sidebar__item(:isActive="false")
      CryptoAddress.sidebar__item(:isActive="false")
      .sidebar__item.sidebar__buttons Create or Import
    .sidebar__item.sidebar__theme Light theme Dark theme
</template>

<script>
import CryptoAddress from 'components/common/CryptoAddress';

export default {
  components: {
    CryptoAddress,
  },
};

</script>

<style lang="scss">
  .sidebar {
    &__item {
      padding: 25px;
      border-bottom: 1px solid #032537;
      border-right: 1px solid #032537;
      font-size: 12px;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__header {
      font-weight: 700;
    }
  }
</style>
