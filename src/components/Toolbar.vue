<template lang='pug'>
.toolbar
  .toolbar__main
    Icon.toolbar__icon.toolbar__close(v-if='showSidebar', id='cross' @click.native='toggleSidebar')
    Icon.toolbar__icon.toolbar__close(v-else, id='hamburger' @click.native='toggleSidebar')
    Icon.toolbar__icon.toolbar__wallet(id='wallet')
    Icon.toolbar__icon.toolbar__alert(id='alert')
  Icon.toolbar__icon.toolbar__settings(id='settings')
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import Icon from './Icon';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState('misc', {
      showSidebar: 'showSidebar',
    }),
  },
  methods: {
    ...mapMutations('misc', {
      toggleSidebar: 'toggleSidebar',
    }),
  },
  components: {
    Icon,
  },
};

</script>

<style lang='scss'>
  .toolbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    &__icon {
      $size: 20px;
      height: $size;
      width: $size;
      fill: #fff;
      margin-top: 20px;
      &:hover {
        cursor: pointer;
        fill: #e9bd24;
      }
    }
    &__close, &__wallet {
      margin-bottom: 35px;
    }
    &__settings {
      margin-bottom: 24px;
    }
  }
</style>
