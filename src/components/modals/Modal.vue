<template lang="pug">
.modal(v-if="isOpened(name)")
  .modal__overlay(@click="closeModal()")
  .modal__body(:class="[`modal__body--${screenType}`, `modal__body--${name}`]")
    .modal__header
      Icon.modal__logo(id="logo")
    .modal__content
      slot
    .modal__credits Copyright © Atlant, 2017
</template>

<script>
import Icon from 'components/Icon';
import {mapState, mapGetters, mapMutations} from 'vuex';

export default {
  computed: {
    ...mapGetters('modal', {
      isOpened: 'isOpened',
    }),
    ...mapState('misc', {
      screenType: 'screenType',
    }),
  },
  methods: {
    ...mapMutations('modal', {
      close: 'close',
    }),
    closeModal() {
      this.close();
      this.onClose();
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    onClose: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
@import "~variables";
.modal {
  $padding: 44px;
  &__body {
    position: fixed;
    margin: 0 auto;
    padding: $padding;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 50%;
    left: 50%;
    height: 600px;
    width: 552px;
    z-index: 998;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    background-image: linear-gradient(to top, #313b51 0%, #002338 100%);
    box-shadow: 0 25px 20px rgba(0, 0, 0, 0.24);
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  &__overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(61, 70, 83, 0.75);
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__credits {
    font-size: 8px;
    text-align: center;
  }
  &__logo {
    width: 192px;
    height: 28px;
    fill: #fff;
  }
}

// @include media-breakpoint-down(md) {
//   .modal {
//     &__body {
//       width: 95%;
//     }
//     &__content {
//       & > * {
//         width: auto;
//         min-width: auto;
//       }
//     }
//   }
// }
</style>
