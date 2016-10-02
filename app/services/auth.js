'use strict';

import {tokenKey} from '../config/config';
import socket from './socket'

module.exports = {auth, setToken, removeToken, getToken}

function auth(to, from, next) {

   // if no internet connection
   if (!navigator.onLine) {
      next('/nointernet');
   }

   const jwt = getToken();

   if (jwt) {

      // send the jwt
      socket.emit('authenticate', {token: jwt}) ;

      // if user is authenticated
      socket.on('authenticated', (token) => {
         next();
      });

      // if user is unauthorized
      socket.on('unauthorized', () => {
         removeToken(tokenKey);
         next('/signin');
      });

   } else {
      next('/signin');
   }

}

function setToken(token) {
   if (token) {
      window.localStorage.setItem(tokenKey, token);
   }
}

function removeToken() {
   window.localStorage.removeItem(tokenKey);
}

function getToken() {
   return window.localStorage.getItem(tokenKey);
}
