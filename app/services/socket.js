'use strict';

import io from 'socket.io-client';
import {server} from '../config/config';

const socket = io(server);

function install (Vue, option) {

   // add socket io to all vue instance
   Object.defineProperty(Vue.prototype, '$socket', {
      get: function get () { return socket }
   })

}

module.exports = { socket, install };
