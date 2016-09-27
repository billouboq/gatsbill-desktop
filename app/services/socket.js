'use strict';

import io from 'socket.io-client';
import {server} from '../config/config'

module.exports = io(server);
