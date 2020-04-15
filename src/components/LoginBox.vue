<template>
  <div id="LoginComponent">
    <div v-if="!authenticated">
      <form>
        <span>
          <input type="email" v-model="email" id="myEmail" name="myEmail" required />
          <label for="myEmail">Email</label>
        </span>
        <span>
          <input type="password" v-model="password" id="myPassword" name="myPassword" required />
          <label for="myPassword">Password</label>
        </span>
        <button @click="login">Login</button>
        <router-link to="/signup" tag="button" id="mySign">SignUp</router-link>
      </form>
    </div>
    <div v-if="authenticated">
      <button @click="logout" class="myLogout">Logout</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
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
  transition: background 250ms ease-in-out, transform 150ms ease;
  &:hover {
    background: scale-color($theme_colour, $lightness: -60%);
  }
  @media screen and (min-width: 600px) {
    padding: 1em 2em;
  }
}
.myLogout {
 padding: 1em;
}
form {
  display: flex;
  width: 100%;
  > span {
    position: relative;
    display: inline-block;
  }
  label {
    position: absolute;
    color: $theme_colour;
    top: 1em;
    left: 0.5em;
  }
  input {
    height: 50px;
    width: 99%;
    max-width: 500px;
    border: 0.1em solid rgb(206, 205, 205);
    background: none;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    outline: 0;
    color: $theme_colour;
    &:valid {
      background-color: #3d453e;
    }
    &:focus {
      border-color: scale-color($theme_colour, $lightness: -30%);
    }
    &:focus + label {
      background: scale-color($theme_colour, $lightness: -30%);
      color: $almost_black;
      font-size: 80%;
      z-index: 2;
      width: 90%;
      top: 100%;
      margin-top: -1em;
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

export default {
  name: "LoginBox",
  data() {
    return {
      loggedIn: false,
      email: "",
      password: ""
    };
  },
  mounted() {
    const ref = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        ref.loggedIn = true;
      } else {
        ref.loggedIn = false;
      }
    });
  },
  computed: {
    authenticated() {
      return this.loggedIn;
    }
  },
  methods: {
    login() {
      event.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.loggedIn = true;
          },
          err => {
            this.loggedIn = false;
            alert("Your user name or password is incorrect - please try again");
          }
        );
    },
    logout() {
      event.preventDefault();
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.loggedIn = false;
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>

