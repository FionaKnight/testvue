<template>
<div>
  <HeroImage altText="My Kitties" headerImage="catheader" />
<main>
 <h2>This is where you get when you are logged in</h2>
  </main>
  </div>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue'
 
export default {
  name: 'mycats',
  components: {
    HeroImage
  }
}
</script>