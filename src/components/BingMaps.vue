<template>
  <div id="map" ref="map"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 300px;
}
</style>

<script>
export default {
  name: "BingMaps",
  props: ["lat", "lng", "bingKey"],
  created() {
    const callback =
      this.$props.lat && this.$props.lng
        ? this.usePropsLocation
        : this.useUserLocation;

    this.initialiseMap(callback);
  },
  methods: {
    initialiseMap(callback) {
      window.loadMapScenario = callback;

      let bing =
        "https://www.bing.com/api/maps/mapcontrol?key=" +
        this.$props.bingKey +
        "&callback=loadMapScenario";
      const script = document.createElement("script");
      script.src = bing;
      script.setAttribute("async", true);
      script.setAttribute("defer", true);
      document.head.append(script);
    },
    useUserLocation() {
      if (!navigator.geolocation) {
        this.usePropsLocation();
        return;
      }

      navigator.geolocation.getCurrentPosition(
        this.hasUserLocation,
        this.usePropsLocation
      );
    },
    hasUserLocation(position) {
      const myLat = position.coords.latitude;
      const myLong = position.coords.longitude;
         /*global Microsoft*/
      let map = new Microsoft.Maps.Map(this.$refs.map, {
        center: new Microsoft.Maps.Location(myLat, myLong),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 10
      });
      let pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
      map.entities.push(pushpin);
    },
    usePropsLocation() {
      if (!this.$props.lat || !this.$props.lng) {
        this.$props.lat = "48.858222";
        this.$props.lng = "2.2945";
      }

      let map = new Microsoft.Maps.Map(this.$refs.map, {
        /* No need to set credentials if already passed in URL */
        center: new Microsoft.Maps.Location(this.$props.lat, this.$props.lng),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 10
      });
      let pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
      map.entities.push(pushpin);
    }
  }
};
</script>
