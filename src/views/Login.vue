<template>
  <div>
    <HeroImage altText="My Kitties" headerImage="catheader2" />
    <main class="login">
      <h2>Log In</h2>
      <p>Login for extra kitties</p>
      <LoginBox />
      <p>
        <router-link to="/signup">Sign Up for a new account to look at kitties</router-link>
      </p>
    </main>
  </div>
</template>

<script>
/* eslint-disable no-console */
import LoginBox from "@/components/LoginBox.vue";
import HeroImage from "@/components/HeroImage.vue";

export default {
  name: "Login",
  components: {
    LoginBox,
    HeroImage
  }
};
</script>

 <style lang="scss">
.login {
  button {
    padding: 1em 2em;
  }
  a {
    display: block;
    margin-top: 1em;
    color: rgb(119, 58, 15);
  }
  form {
    flex-wrap: wrap;
    max-width: 500px;
    > span {
      width: 100%;
      display: block;
      margin: 0 0 0.5em 0;
    }
    label {
      color: $almost_black;
      top: 1em;
      left: 0.5em;
      width: 100%;
    }
    #mySign {
      display: none;
    }
    input {
      margin: 0.2em 0;
      width: 95%;
      border: 0.2em solid gray;
      color: $almost_black;
      &:valid {
        // Hides the label
        background: white;
      }
    }
  }
}
</style> 



