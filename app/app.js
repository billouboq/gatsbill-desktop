import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import socket from './services/socket'
import {auth} from './services/auth'

// import vue componenets
import App from './routes/app.vue'
import Signin from './routes/signin.vue'
import Signup from './routes/signup.vue'

// init all the things
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(socket.install);

// config routes
const router = new VueRouter({
   base: __dirname,
   linkActiveClass: 'active-link',
   routes: [
     { path: '/', beforeEnter: auth, component: App},
     { path: '/signin', component: Signin },
     { path: '/signup', component: Signup }
   ]
});

// mount a root Vue instance
new Vue({
   router,
}).$mount('#app');
