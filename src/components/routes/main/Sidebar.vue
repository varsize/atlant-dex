<template lang='pug'>
.sidebar
  .sidebar__item.sidebar__logo ATLANT DEX
  .sidebar__content
    .sidebar__main
      .sidebar__item.sidebar__header WALLETS:
      Address.sidebar__item
      .sidebar__item.sidebar__buttons Create or Import
    .sidebar__item.sidebar__theme Light theme Dark theme
</template>

<script>
import Address from 'components/common/Address';

export default {
  components: {
    Address,
  },
};

</script>

<style lang="scss">
  .sidebar {
    &__item {
      padding: 25px;
      border: 1px solid #032537;
      font-size: 12px;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
</style>
