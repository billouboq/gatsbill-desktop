import Vue from 'vue/dist/vue.js';
import io from 'socket.io-client';
import textToSound from './services/speech';

const socket = io('http://164.132.40.127:1234');

socket.on('connect', function() {

   new Vue({
      el: '#chat',
      data: {
         messages: [],
         name: Math.random().toString(36).substr(2, 5),
         text: '',
      },
      ready: function () {
         socket.on('message', (data) => {
            this.messages.push(data);
            textToSound(data.text);
         });
      },
      methods: {
         submit: function() {

            const message = {
               name: this.name,
               text: this.text
            };

            socket.emit('message', message);

            this.messages.push(message);
            this.text = '';

         }
      }
   });

});