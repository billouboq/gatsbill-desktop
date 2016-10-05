'use strict';

import {socket} from './socket';
import {tokenKey} from '../config/config';

module.exports = {auth, setToken, removeToken, getToken}

function auth(to, from, next) {

   console.log('in auth');

   // if no internet connection
   if (!navigator.onLine) {
      console.log('no internet');
      next('/nointernet');
   }

   const jwt = getToken();

   if (jwt) {

      console.log('in jwt');
      // send the jwt
      socket.emit('authenticate', {token: jwt}) ;

      // if user is authenticated
      socket.once('authenticated', (token) => {
         console.log('in authenticated');
         next();
      });

      // if user is unauthorized
      socket.once('unauthorized', () => {
         console.log('in unauthorized');
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
