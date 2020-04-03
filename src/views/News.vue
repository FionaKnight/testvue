<template>
<div>
<main>
<h2>BBC Cat News</h2>
<GetArticles myData="https://newsapi.org/v2/everything?domains=bbc.co.uk&qInTitle=(cat OR kitten OR kitty)&apiKey=e21df577f40b406481745cde8e075679"/>
</main>
</div>
</template>

<script>
import GetArticles from '@/components/GetArticles.vue'
export default {
name: 'News',
components: {
GetArticles
}
}
</script>
