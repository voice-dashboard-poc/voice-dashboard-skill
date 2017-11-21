'use strict';

const RequestService = require('./../services/RequestService');

const okResponses = {
  open: 'Good. What do you want to do here?',
  close: 'Good. Which module would you like me to open now?'
};

function handleModule(action) {

  return function (intent, session, response) {
    const moduleSlot = intent.slots.Module;

    if (!moduleSlot || !moduleSlot.value) {
      return errorResponse(response);
    }
    RequestService.makeRequest({
      url: 'module/' + moduleSlot.value + '/' + action,
      method: 'POST',
      json: {},
    }).then((res) => {
      console.log('OpenModule', res.statusCode);
      if (res.statusCode !== 200) {
        return errorResponse(response);
      } else {
        const speechOutput = okResponses[action];
        response.ask(speechOutput, speechOutput);
      }
    }).catch(() => {
      return errorResponse(response);
    });
  }
}



module.exports = {
  open: handleModule('open'),
  close: handleModule('close'),
};

function errorResponse(response) {
  const speechOutput = 'Sorry. Which module would you like me to open?';
  response.ask(speechOutput, speechOutput);
}
