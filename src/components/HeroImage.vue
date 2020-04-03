<template>
    <picture>
        <source media="(min-width: 601px)" :srcset="`img/appimages/${headerImage}.webp`" type="image/webp">      
        <source media="(min-width: 1px)" :srcset="`img/appimages/${headerImage}_small.webp 1x, img/appimages/${headerImage}.webp 2x`" type="image/webp">
        <source media="(min-width: 601px)" :srcset="`img/appimages/${headerImage}.jpg`">      
        <img id="mainImg" :src="`img/appimages/${headerImage}.jpg`" :srcset="`img/appimages/${headerImage}_small.jpg 1x, img/appimages/${headerImage}.jpg 2x`" :alt="altText">
     </picture>
</template>
 
<script>
export default {
  name: 'HeroImage',
  props: {
    headerImage: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    }
  }
}
</script>
 
<style scoped>
#mainImg {
    width:100%;
    height: auto;
}
</style>
