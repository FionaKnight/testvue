<template>
  <div id="LoginComponent">
    <div class="login" v-if="!authenticated">
      <input type="text" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
      <button @click="login">Login</button>
      <p>You don't have an account ? You can <router-link to="/signup">create one</router-link></p>
    </div>
    <div v-if="authenticated">
      <button @click="logout">Logout</button>
    </div>
    <p>{{message}}</p>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import firebase from "firebase";

export default {
  name: "LoginBox",
  data() {
    return {
      message: "",
      loggedIn: false,
      email: "",
      password: ""
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.loggedIn = true;
        this.message = "Logged In";
      } else {
        this.loggedIn = false;
         this.message = "Logged Out";
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
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
              this.loggedIn = true;
        this.message = "Logged In";
          },
          err => {
        this.loggedIn = false;
         this.message = "Logged Out";
          }
        );
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("logged out");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  padding: 20px;
  cursor: pointer;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 20px;
}

</style>