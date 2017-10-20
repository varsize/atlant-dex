<template lang='pug'>
.propertyMap
</template>

<script>
import Icon from 'components/common/Icon';

export default {
  data() {
    return {
      locationMap: {},
      marker: {},
      coordinates: {
        lat: 40.667621,
        lng: -73.963189,
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
    // const image = {
    //   path:
    //   'M25.35,0A25.38,25.38,0,0,0,0,25.35C0,42.7,22.69,68.17,23.65,69.24a2.28,
    // 2.28,0,0,0,3.4,0C28,68.17,50.7,42.7,50.7,25.35A25.38,25.38,0,0,0,25.35,0Zm0,
    // 38.11A12.75,12.75,0,1,1,38.11,25.35,12.77,12.77,0,0,1,25.35,38.11Z',
    //   strokeOpacity: 0,
    //   strokeWeight: 1,
    //   fillColor: '#00a0ff',
    //   fillOpacity: 1,
    //   rotation: 0,
    //   scale: 1,
    //   anchor: new google.maps.Point(25, 67),
    // };
    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.locationMap,
      // icon: image,
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
  &__icon{
    $size: 40px;
    height: $size;
    width: $size;
  }
}
</style>
