<template>
   <div class="signup">
      <h1>Signin</h1>
      <div class="form">
         <input type="text" v-model="username">
         <input type="email" v-model="email">
         <input type="password" v-model="password">
         <input type="password" v-model="confirmpassword">
         <button @click="submit">Submit</button>
      </div>
   </div>
</template>

<script>
   import {server} from '../config/config'

   export default {
      data() {
         return {
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
         }
      },
      methods: {
         submit: function () {
            if (this.username && this.password && this.email && this.confirmpassword) {
               this.$http.post(`${server}/signup`, {
                  username: this.username,
                  email: this.email,
                  password: this.password,
                  confirmpassword: this.confirmpassword,
               }).then((response) => {
               // success callback
               }, (response) => {
               // error callback
               });
            }
         }
      }
   }
</script>
