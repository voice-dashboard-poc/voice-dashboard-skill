'use strict';

const request = require('request');
const config = require('./../config');

module.exports = {
  makeRequest: function (params) {
    return new Promise((resolve, reject) => {
      request({
        method: params.method,
        url: config.apiUrl + params.url,
        headers: params.headers,
        json: params.json
      }, (err, response, body) => {
        if (err) { return reject(err) }
        return resolve({
          statusCode: response.statusCode,
          body: body
        });
      })
    });
  }
};
