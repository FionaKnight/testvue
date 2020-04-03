import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias:'/home',
    name: 'Home',
    component: Home, 
    meta: {
      header_text: 'Puurrrfect Day',
      title: 'Home page',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      header_text: 'Meowwwvlous!',
      title: 'About page',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      header_text: 'Bloggies',
      title: 'Blog page',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
    },
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/news',
    name: 'News',
    meta: {
      header_text: ' Meeewsss - BBC Cats (via. news API)',
      title: 'News page',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
    },
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      header_text: 'Login to our cats',
      title: 'Login page',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    meta: {
      header_text: 'Sign Up to our cats',
      title: 'Sign Up Page',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/mycats',
    name: 'MyCats',
    meta: {
      header_text: 'Secured My Kitties!',
      title: 'Members only kitty page',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
      requiresAuth:true
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "mycats" */ '../views/MyCats.vue')
  },
  
  {
    path: '/loginbox',
    name: 'LoginBox',
    meta: {
      header_text: 'Test Login',
      title: 'Test Login',
      description: 'This page is a test page for learning about Vue CLI. Its subject is cats'
     
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "loginbox" */ '../components/LoginBox.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/* eslint-disable no-console */
 router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
console.log(currentUser);
  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next();
  else next();
}); 


export default router
