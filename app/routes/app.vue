<template>
   <div class="app">
      <div class="left-side">
         <input type="text" v-model="username" @keyup.enter="addFriend">
      </div>
      <div class="center-side">
         <h1>Hello App!</h1>
         <router-link to="/signin">Go to signin</router-link>
         <router-link to="/signup">Go to signup</router-link>
         <screen :messages="messages"></screen>
         <keyboard v-on:message="sendMessage"></keyboard>
      </div>
   </div>
</template>

<script>
import {auth} from '../services/auth';
import keyboard from '../components/keyboard.vue';
import screen from '../components/screen.vue';

export default {
   data() {
      return {
         messages: [],
         username: ''
      }
   },
   created() {
      console.log(this);
      this.$socket.on('message', (message) => {
         this.messages.push(message);
      });
   },
   methods: {
      sendMessage(message) {
         this.messages.push(message);
         this.$socket.emit('message', message);
      },
      addFriend() {
         if (this.username) {
            console.log('emit');
            this.$socket.emit('addFriend', this.username);
         }
      }
   },
   components: {
      keyboard,
      screen
   }
}
</script>
