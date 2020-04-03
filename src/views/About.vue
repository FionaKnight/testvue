<template>
<div>
   <HeroImage altText="About Kitties" headerImage="catheader2" />
<main>
  <h2>About Us</h2>
<BingMaps bingKey="AgSgw5qgRJZwMIdvzNw8tcIMsR6iQyOW-EdM62TzStd3HLE30oJdA0jn0JwtIlBS"/>
</main>
</div>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue'
import BingMaps from '@/components/BingMaps.vue'

export default {
  name: 'About',
  components: {
    HeroImage,
    BingMaps
  }
}
</script>