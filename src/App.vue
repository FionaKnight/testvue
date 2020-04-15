<template>
  <div id="app">
    <CatHeader>{{ $route.meta.header_text }}</CatHeader>
    <Navigation />
    <router-view/>
    <CatFooter />
  </div>
</template>


<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import CatFooter from '@/components/CatFooter.vue'
import CatHeader from '@/components/CatHeader.vue'

export default {
  name: 'App',
  components: {
    CatHeader,
    Navigation,
    CatFooter,
  },
  watch: {
      '$route':{
        handler: (to) => {
          document.title = to.meta.title || 'Your Website'
          document.querySelector("meta[name='description']").setAttribute("content",to.meta.description)
        },
         immediate: true
      }
    }
}
</script>


<style lang="scss">
/*font face declarations*/
@font-face {
    font-family: 'Roboto';
    src: url('/img/fonts/Roboto-Regular.woff2') format('woff2'), 
                url('/img/fonts/Roboto-Regular.woff') format('woff'),
                url('/img/fonts/Roboto-Regular.ttf') format('truetype'),
                url('/img/fonts/Roboto-Regular.eot') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
}
 
@font-face {
    font-family: 'Raleway';
    src: url('/img/fonts/Raleway-Regular.woff2') format('woff2'), 
    url('/img/fonts/Raleway-Regular.woff') format('woff'),
    url('/img/fonts/Raleway-Regular.ttf') format('truetype'),
    url('/img/fonts/Raleway-Regular.eot') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
}
 
body {
background-color:rgb(243, 240, 240);
}
 
h1, h2{
    font-family:'Raleway','Roboto', Helvetica, Arial, sans-serif;
    margin: .3em 0;
    font-size:1.3em;
}
 
#app {
font-family: 'Roboto', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
min-width:320px;
max-width:1200px;
width:100%;
margin:0 auto;
background: #f2f2f2;
}

main {
padding:1em;
margin:0;
}
 
</style>
