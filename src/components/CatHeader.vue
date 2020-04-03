<template>
  <header>
    <h1>
      <slot></slot>
    </h1>
    <LoginBox/>
  </header>
</template>
 
<style lang="scss" scoped>
header {
  background: #3d453e;
  padding: 1em;
  color: $theme_colour;
}
</style>

<script>
/* eslint-disable no-console */
import LoginBox from '@/components/LoginBox.vue';
export default {
name: 'CatHeader',
components: {
LoginBox
}
}
</script>




