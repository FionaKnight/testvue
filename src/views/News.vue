<template>
<div>
    <HeroImage altText="Investigative Kitties" headerImage="catheader4" />
<main>
<h2>BBC Cat News (Powered by NewsAPI.org)</h2>
<GetArticles myData="https://newsapi.org/v2/everything?domains=bbc.co.uk&q=(cat OR kitten OR kitty)&apiKey=e21df577f40b406481745cde8e075679"/>
</main>
</div>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue'
import GetArticles from '@/components/GetArticles.vue' 
export default {
  name: 'News',
  components: {
    HeroImage,
GetArticles
  }
}
</script>