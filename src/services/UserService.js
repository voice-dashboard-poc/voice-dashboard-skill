'use strict';

const RequestService = require('./RequestService');

module.exports = {
  login(user) {
    return new Promise((resolve, reject) => {
      RequestService.makeRequest({
        url: 'user/' + user + '/login',
        method: 'PUT',
        json: {},
      }).then((response) => {
        console.log('User service | login | OK', response);
        return resolve(response.statusCode === 200);
      }).catch((err) => {
        console.error('User service | login | KO', err);
        return reject(err);
      })
    });
  },
  logout() {
    return new Promise((resolve, reject) => {
      RequestService.makeRequest({
        url: 'user/developer/logout',
        method: 'PUT',
        json: {},
      }).then((response) => {
        console.log('User service | logout | OK', response);
        return resolve(response.statusCode === 200);
      }).catch((err) => {
        console.error('User service | logout | KO', err);
        return reject(err);
      })
    });
  }
};