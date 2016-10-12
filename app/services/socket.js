'use strict';

import io from 'socket.io-client';
import {server} from '../config/config';

let socket;

module.exports = {socket, authenticate, install};

function authenticate(jwt, success, error) {

   // connect to server
   const tick = io(server, {
      forceNew: true,
      transports: ['websocket']
   });

   // send the jwt
   tick.emit('authenticate', {token: jwt}) ;

   // if user is authenticated
   tick.on('authenticated', (token) => {
      socket = tick;
      success(token)
   });

   // if user is unauthorized
   tick.on('unauthorized', error);

}

function install (Vue, option) {

   // add socket io to all vue instance
   Object.defineProperty(Vue.prototype, '$socket', {
      get: function get () { return socket }
   })

}
