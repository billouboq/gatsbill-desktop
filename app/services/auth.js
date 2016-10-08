'use strict';

import {authenticate} from './socket';
import {tokenKey} from '../config/config';

//todo update this shit
let isAuth = false;
let t;

module.exports = {auth, setToken, removeToken, getToken}

function auth(to, from, next) {

   if (isAuth) {
      next();
   } else {

      const jwt = getToken();

      console.log(jwt);

      if (jwt) {

         console.log('in auth fn')

         authenticate(jwt, (token) => {
            console.log('in authenticated');
            isAuth = true;
            next();
         }, () => {
            console.log('in unauthorized');
            isAuth = false;
            removeToken(tokenKey);
            next('/signin');
         })

      } else {
         next('/signin');
      }
   }
}

function setToken(token) {
   if (token) {
      // window.localStorage.setItem(tokenKey, token);
      t = token;
   }
}

function removeToken() {
   // window.localStorage.removeItem(tokenKey);
   t = null;
}

function getToken() {
   // return window.localStorage.getItem(tokenKey);
   return t;
}
