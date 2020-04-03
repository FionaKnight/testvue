<template>
<div>
<main>
<h2>Our Blog</h2>
<GetArticles myData="/blog.json"/>
</main>
</div>
</template>

<script>
import GetArticles from '@/components/GetArticles.vue'
export default {
name: 'Blog',
components: {
GetArticles
}
}
</script>





