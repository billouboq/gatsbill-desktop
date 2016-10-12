<template>
   <div class="app">
      <div class="left-side">
         <input type="text" v-model="username" @keyup.enter="addFriend">
         <div v-for="friend in friendList">
            {{friend.username}}
            <div @click="removeFriend(friend.userid)">Remove</div>
            <div @click="acceptFriend(friend.userid)">Accept</div>
         </div>
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
         friendList: [],
         username: '',
      }
   },
   created() {

      this.$socket.emit('getFriends');

      this.$socket.on('getFriends', (response) => {
         if (response.status === 200) {
            this.friendList = response.body;
         }
      });

      this.$socket.on('message', (message) => {
         this.messages.push(message);
      });

      this.$socket.on('askFriend', (response) => {
         if (response.status === 200) {
            this.friendList.push(response.body);
         }
      });

      this.$socket.on('removeFriend', (response) => {
         if (response.status === 200) {
            console.log(response);
            this.friendList = this.friendList.filter(friend => friend.userid !== response.body);
         }
      });

      this.$socket.on('acceptFriend', (response) => {
         if (response.status === 200) {
            console.log(response);
            alert('friend Accepted');
         }
      });

   },
   methods: {
      sendMessage(message) {
         this.messages.push(message);
         this.$socket.emit('message', message);
      },
      addFriend() {
         if (this.username) {
            this.$socket.emit('askFriend', this.username);
         }
      },
      removeFriend(username) {
         this.$socket.emit('removeFriend', username);
      },
      acceptFriend(username) {
         this.$socket.emit('acceptFriend', username);
      }
   },
   components: {
      keyboard,
      screen
   }
}
</script>
