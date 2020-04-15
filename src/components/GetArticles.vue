
<template>
<div id="articleContainer">
<ArticleItem class="container" v-for="(article, index) in myJson.articles" :key="index" :article="article"></ArticleItem>
</div>
</template>
<script>
/* eslint-disable no-console */
import ArticleItem from '@/components/ArticleItem.vue';
export default {
name: 'GetArticles',
props:["myData"],
components: {
ArticleItem
},
data(){
return{
myJson:[]
}
}, 
created(){
    // Fetch Data
    this.fetchData();
},
methods: {
  fetchData() {
    fetch(this.myData)
        .then(stream => stream.json())
        .then(data => this.myJson = data)
        .catch(error => console.log(error))
  }
   }
}
</script>

<style>
    #articleContainer
    {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; 
    }
</style>
