'use strict';

let token = window.localStorage.getItem('token');

module.exports = {};

function checkIfAuth() {
   return token;
}
