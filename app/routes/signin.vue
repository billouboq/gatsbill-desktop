<template>
   <div class="signin">
      <h3>Signin</h3>
      <router-link to="/signup">Go to signup</router-link>
      <router-link to="/">Go to App</router-link>
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <button @click="submit">Submit</button>
   </div>
</template>

<script>
   import {setToken} from '../services/auth'
   import {server} from '../config/config'

   export default {
      data() {
         return {
            username: '',
            password: ''
         }
      },
      methods: {
         submit: function () {
            if (this.username && this.password) {
               this.$http.post(`${server}/signin`, {
                  username: this.username,
                  password: this.password
               }).then((response) => {
                  setToken(response.body.token);
                  this.$router.push('/');
               }, (err) => {
                  console.log(err);
               });
            }
         }
      }
   }
</script>
