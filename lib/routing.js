/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const config = require('./config').root();
const version = config.api.version;

function v(url) {
  return '/v' + version + url;
}
module.exports = [
  {
    method: 'GET',
    path: '/',
    config: require('./routes/root')
  },
  {
    method: 'GET',
    path: '/__heartbeat__',
    config: require('./routes/heartbeat')
  },
  {
    method: 'GET',
    path: v('/profile'),
    config: require('./routes/profile')
  },
  {
    method: 'GET',
    path: v('/email'),
    config: require('./routes/email')
  },
  {
    method: 'GET',
    path: v('/uid'),
    config: require('./routes/uid')
  },
  {
    method: 'GET',
    path: v('/avatar'),
    config: require('./routes/avatar/get')
  },
  {
    method: 'GET',
    path: v('/avatars'),
    config: require('./routes/avatar/list')
  },
  {
    method: 'POST',
    path: v('/avatar'),
    config: require('./routes/avatar/post')
  },
  {
    method: 'POST',
    path: v('/avatar/upload'),
    config: require('./routes/avatar/upload')
  },
  {
    method: 'DELETE',
    path: v('/avatar/{id}'),
    config: require('./routes/avatar/delete')
  }
];
