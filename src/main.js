import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase';

Vue.config.productionTip = false;
let app = "";

const firebaseConfig = {
  apiKey: "AIzaSyBSM54goPBiIb0o1PieYe-i52PQ0DhY_o0",
  authDomain: "throwawaytest-flk.firebaseapp.com",
  databaseURL: "https://throwawaytest-flk.firebaseio.com",
  projectId: "throwawaytest-flk",
  storageBucket: "throwawaytest-flk.appspot.com",
  messagingSenderId: "215353839468",
  appId: "1:215353839468:web:6d0a265d6f3599a32aad49"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
