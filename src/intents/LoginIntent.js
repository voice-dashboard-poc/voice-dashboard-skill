'use strict';

const UserService = require('./../services/UserService');

function LoginIntent(intent, session, response) {
  const userSlot = intent.slots.User;

  if (!userSlot || !userSlot.value) {
    return errorResponse(response);
  }
  UserService.login(userSlot.value).then((res) => {
    if (!res) {
      return errorResponse(response);
    }
    const speechOutput = 'Welcome. What do you want to do?';
    response.ask(speechOutput, speechOutput);
  }).catch(() => {
    return errorResponse(response);
  });
}

module.exports = LoginIntent;

function errorResponse(response) {
  const speechOutput = 'Sorry, I didn\'t get that. Who are you again?';
  response.ask(speechOutput, speechOutput);
}
