<template>
   <div class="app">
       <h1>Hello App!</h1>
       <router-link to="/signin">Go to signin</router-link>
       <router-link to="/signup">Go to signup</router-link>
       <screen :messages="messages"></screen>
       <keyboard v-on:message="sendMessage"></keyboard>
   </div>
</template>

<script>
import socket from '../services/socket';
import keyboard from '../components/keyboard.vue';
import screen from '../components/screen.vue';

export default {
   data() {
      return {
         messages: [],
      }
   },
   created() {
      socket.on('message', (message) => {
         this.messages.push(message);
      });
   },
   methods: {
      sendMessage: function(message) {
         this.messages.push(message);
         socket.emit('message', message);
      }
   },
   components: {
      keyboard,
      screen
   }
}
</script>
