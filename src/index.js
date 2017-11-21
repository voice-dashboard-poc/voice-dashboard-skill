'use strict';

const AlexaSkill = require('./services/AlexaSkill');
const RequestService = require('./services/RequestService');
const UserService = require('./services/UserService');
const IntentFactory = require('./IntentFactory');
const config = require('./config');

const APP_ID = config.appId;

let DashboardSkill = function () {
  AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
DashboardSkill.prototype = Object.create(AlexaSkill.prototype);
DashboardSkill.prototype.constructor = DashboardSkill;

// ----------------------- Override AlexaSkill request and intent handlers -----------------------

DashboardSkill.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
  console.log('onSessionStarted requestId: ' + sessionStartedRequest.requestId + ', sessionId: ' + session.sessionId);
};

DashboardSkill.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
  console.log('onLaunch requestId: ' + launchRequest.requestId + ', sessionId: ' + session.sessionId);
  const speechOutput = 'Hello, welcome. Who are you?';
  response.ask(speechOutput, speechOutput);
};

DashboardSkill.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
  return new Promise(function(resolve, reject) {
    console.log('onSessionEnded requestId: ' + sessionEndedRequest.requestId + ', sessionId: ' + session.sessionId);
    UserService.logout().then(() => {return resolve()}).catch(() => {return reject()});
  });

};

/**
 * override intentHandlers to map intent handling functions.
 */
DashboardSkill.prototype.intentHandlers = IntentFactory;

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
  const dashboardSkill = new DashboardSkill();
  dashboardSkill.execute(event, context);
};

