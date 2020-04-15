<template>
  <div>
    <HeroImage altText="Blog Kitties" headerImage="catheader3" />
    <main>
      <h2>Our Blog</h2>
      <GetArticles myData="/blog.json" />
    </main>
  </div>
</template>

<script>
import HeroImage from "@/components/HeroImage.vue";
import GetArticles from "@/components/GetArticles.vue";
export default {
  name: "Blog",
  components: {
    HeroImage,
    GetArticles
  }
};
</script>





