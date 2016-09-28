'use strict';

import socket from './socket'

module.exports = (route, redirect, next) => {

   const jwt = window.localStorage.getItem('gatsToken');

   if (jwt) {

      // send the jwt
      socket.emit('authenticate', {token: jwt}) ;

      // if user is authenticated
      socket.on('authenticated', (token) => {
         window.localStorage.setItem('gatsToken', token);
         next();
      });

      // if user is unauthorized
      socket.on('unauthorized', () => {
         window.localStorage.removeItem('gatsToken');
         redirect('/signin');
      });

   } else {
      redirect('/signin');
   }

}
