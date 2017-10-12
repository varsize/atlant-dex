<template lang="pug">
div
  TheHeader
  router-view
  TheFooter
</template>

<script>
import TheHeader from 'components/global/TheHeader';
import TheFooter from 'components/global/TheFooter';
import {mapMutations, mapActions} from 'vuex';

export default {
  methods: {
    ...mapMutations('misc', {
      updateScreenType: 'updateScreenType',
    }),
    ...mapActions('localization', {
      setLang: 'setLang',
    }),
  },
  created() {
    this.setLang();
    this.updateScreenType();

    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.updateScreenType();
      }, 66);
    });
  },
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
  @import "~normalize.css/normalize";
  @import "~sass/defaults";

	@import "~dragula/dist/dragula";

  @import "~bootstrap/scss/_functions";
  @import "~bootstrap/scss/_variables";
  @import "~bootstrap/scss/_mixins";
  @import "~bootstrap/scss/_grid";
  @import "~bootstrap/scss/utilities/_flex";
  @import "~bootstrap/scss/utilities/_display";
  @import "~bootstrap/scss/utilities/_spacing";
  @import "~noty/lib/noty";

  @import "~sass/fonts";
  @import "~sass/overrides";
  @import "~sass/global";
</style>
