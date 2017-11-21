'use strict';

const RequestService = require('./../services/RequestService');

module.exports = function (intent, session, response) {
  const levelSlot = intent.slots.LogLevel;

  if (!levelSlot || !levelSlot.value) {
    return errorResponse(response);
  }
  RequestService.makeRequest({
    url: 'logs/filter?level=' + levelSlot.value,
    method: 'GET'
  }).then((res) => {
    console.log('FilterLogs', res.statusCode);
    if (res.statusCode !== 200) {
      return errorResponse(response);
    } else {
      const speechOutput = 'Good. What do you want to do now?';
      response.ask(speechOutput, speechOutput);
    }
  }).catch(() => {
    return errorResponse(response);
  });
};

function errorResponse(response) {
  const speechOutput = 'Sorry. I didn\'t get that';
  response.ask(speechOutput, speechOutput);
}