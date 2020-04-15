<template>
  <header>
    <h1>
      <slot></slot>
    </h1>
    <LoginBox />
  </header>
</template>
 
<style lang="scss" scoped>
header {
  background: #3d453e;
  color: $theme_colour;
  display: flex;
  flex-wrap: wrap;
  padding: 0.75em;
  justify-content: space-between;
  @media only screen and (min-width: 850px) {
    align-items: center;
  }
}
h1 {
  font-size: 1.5em;
  @media only screen and (min-width: 850px) {
    margin: 0;
  }
}
</style>

<script>
/* eslint-disable no-console */
import LoginBox from "@/components/LoginBox.vue";
export default {
  name: "CatHeader",
  components: {
    LoginBox
  }
};
</script>