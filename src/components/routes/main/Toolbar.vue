<template lang='pug'>
.toolbar
  Icon.toolbar__close(v-if='showSidebar', id='cross' @click.native='toggleSidebar')
  Icon.toolbar__close(v-else, id='hamburger' @click.native='toggleSidebar')
</template>

<script>
import Icon from 'components/common/Icon';
import {mapState, mapMutations} from 'vuex';

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
    &__close {
      $size: 20px;
      height: $size;
      width: $size;
      fill: #fff;
      margin-top: 20px;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
