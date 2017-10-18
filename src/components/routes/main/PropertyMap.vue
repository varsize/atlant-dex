<template lang="pug">
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
        lat: 40.742805,
        lng: -73.114570,
      },
    };
  },
  mounted() {
    const element = document.querySelector('.propertyMap');
    const options = {
      zoom: 13,
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
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#747474',
            },
            {
              lightness: '23',
            },
          ],
        },
        {
          featureType: 'poi.attraction',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#f38eb0',
            },
          ],
        },
        {
          featureType: 'poi.government',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ced7db',
            },
          ],
        },
        {
          featureType: 'poi.medical',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ffa5a8',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#c7e5c8',
            },
          ],
        },
        {
          featureType: 'poi.place_of_worship',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#d6cbc7',
            },
          ],
        },
        {
          featureType: 'poi.school',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#c4c9e8',
            },
          ],
        },
        {
          featureType: 'poi.sports_complex',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#b1eaf1',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              lightness: '100',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
            {
              lightness: '100',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ffd4a5',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ffe9d2',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'all',
          stylers: [
            {
              visibility: 'simplified',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'geometry.fill',
          stylers: [
            {
              weight: '3.00',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'geometry.stroke',
          stylers: [
            {
              weight: '0.30',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'on',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#747474',
            },
            {
              lightness: '36',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#e9e5dc',
            },
            {
              lightness: '30',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'on',
            },
            {
              lightness: '100',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [
            {
              color: '#d2e7f7',
            },
          ],
        },
      ],
    };
    this.locationMap = new google.maps.Map(element, options);
    const image = {
      path:
      'M25.35,0A25.38,25.38,0,0,0,0,25.35C0,42.7,22.69,68.17,23.65,69.24a2.28,2.28,0,0,0,3.4,0C28,68.17,50.7,42.7,50.7,25.35A25.38,25.38,0,0,0,25.35,0Zm0,38.11A12.75,12.75,0,1,1,38.11,25.35,12.77,12.77,0,0,1,25.35,38.11Z',
      strokeOpacity: 0,
      strokeWeight: 1,
      fillColor: '#00a0ff',
      fillOpacity: 1,
      rotation: 0,
      scale: 1,
      anchor: new google.maps.Point(25, 67),
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

<style lang="scss">
@import "~variables";
.propertyMap {
  position: relative;
  &__icon{
    $size: 40px;
    height: $size;
    width: $size;
  }
}
</style>
