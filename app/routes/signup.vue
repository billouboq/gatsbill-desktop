<template>
   <div class="signup">
      <h1>Signin</h1>
      <div class="form">
         <input type="text" v-model="username">
         <input type="email" v-model="email">
         <input type="password" v-model="confirmpassword">
         <input type="password" v-model="password">
         <button>Submit</button>
      </div>
   </div>
</template>

<script>
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

         }
      }
   }
</script>
