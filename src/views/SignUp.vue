<template>
  <div>
    <HeroImage altText="My Kitties" headerImage="catheader2" />
    <main class="sign-up">
      <h2>Sign Up</h2>
      <p>Create an account to look at kitties</p>
      <form>
        <div>
          <input type="email" v-model="email" id="myEmail" name="myEmail" required />
          <label for="myEmail">Email</label>
        </div>
        <div>
          <input type="password" v-model="password" id="myPassword" name="myPassword" required />
          <label for="myPassword">Password</label>
        </div>
        <button @click="signUp">Sign Up</button>
      </form>
      <p>
        <router-link to="/login">Login if you already have an account</router-link>
      </p>
    </main>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
a {
  display: block;
  margin-top: 1em;
  color: rgb(119, 58, 15);
}
form {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;
  > div {
    position: relative;
    width: 100%;
    margin: 0 0 0.5em 0;
  }
  button {
    display: inline-block;
    border: none;
    margin: 0 0.1em;
    background-color: scale-color($theme_colour, $lightness: -30%);
    color: $almost_black;
    cursor: pointer;
    text-decoration: none;
    font-family: sans-serif;
    text-align: center;
    padding: 1em 2em;
    transition: background 250ms ease-in-out, transform 150ms ease;
    &:hover {
      background: scale-color($theme_colour, $lightness: -60%);
    }
  }
  label {
    position: absolute;
    color: $almost_black;
    top: 1em;
    left: 0.5em;
  }
  input {
    height: 50px;
    width: 95%;
    max-width: 500px;
    margin: 0.2em 0;
    border: 0.2em solid gray;
    background: none;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    outline: 0;
    color: $almost_black;
    &:valid {
      // Hides the label
      background: white;
    }
    &:focus {
      border-color: scale-color($theme_colour, $lightness: -30%);
    }
    &:focus + label {
      background: scale-color($theme_colour, $lightness: -30%);
      color: $almost_black;
      font-size: 80%;
      padding: 0.1em 0.5em;
      z-index: 2;
      width: 90%;
      top: 100%;
      margin-top: -16px;
      -webkit-animation: 0.3s both slideInDown;
      animation: 0.3s both slideInDown;
    }
  }
}
// animation from https://daneden.github.io/animate.css/
@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>

 <script>
/* eslint-disable no-unused-vars */
import firebase from "firebase";
import HeroImage from "@/components/HeroImage.vue";

export default {
  name: "signUp",
  components: {
    HeroImage
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      event.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("mycats");
          },
          err => {
            alert("Sorry you could not sign up" + err.message);
          }
        );
    }
  }
};
</script>