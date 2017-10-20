<template lang='pug'>
.propertyMap
  .propertyMap__data GOVNO
</template>

<script>
import Icon from './Icon';

export default {
  data() {
    return {
      locationMap: {},
      marker: {},
      coordinates: {
        lat: 55.748260,
        lng: 37.540829,
      },
    };
  },
  mounted() {
    const element = document.querySelector('.propertyMap');
    const options = {
      zoom: 12,
      center: this.coordinates,
      scrollwheel: false,
      fullscreenControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      panControl: false,
      navigationControl: false,
      streetViewControl: false,
      styles: [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [
          {
            invert_lightness: true,
          },
          {
            saturation: 10,
          },
          {
            lightness: 30,
          },
          {
            gamma: 0.5,
          },
          {
            hue: '#435158',
          },
        ],
      },
    ],
    };
    this.locationMap = new google.maps.Map(element, options);
    const image = {
      url: 'src/assets/images/pointer.png',
      anchor: new google.maps.Point(15, 40),
    };
    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.locationMap,
      icon: image,
      animation: google.maps.Animation.DROP,
    });
  },
  components: {
    Icon,
  },
};
</script>

<style lang='scss'>
@import '~variables';
.propertyMap {
  height: 100%;
  position: relative;
  &__data {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99999999;
    background-color: red;
  }
}
</style>
