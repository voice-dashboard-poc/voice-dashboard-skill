'use strict';

const ModuleIntent = require('./intents/ModuleIntent');
const FilterLogsIntent = require('./intents/FilterLogsIntent');
const FilterCustomersIntent = require('./intents/FilterCustomersIntent');
const ShowCustomerIntent = require('./intents/ShowCustomerIntent');
const LoginIntent = require('./intents/LoginIntent');

const UserService = require('./services/UserService');

module.exports = {
  LoginIntent: LoginIntent,

  OpenModuleIntent: ModuleIntent.open,
  CloseModuleIntent: ModuleIntent.close,

  ShowCustomerIntent: ShowCustomerIntent,
  FilterCustomersIntent: FilterCustomersIntent,
  FilterLogsIntent: FilterLogsIntent,

  'AMAZON.StopIntent': exitApp,
  'AMAZON.CancelIntent': exitApp
};

function exitApp(intent, session, response) {
  return new Promise(function(resolve) {
    const speechOutput = 'Goodbye';
    UserService.logout().then(() => {
      return resolve(response.tell(speechOutput));
    }).catch(() => {
      return resolve(response.tell(speechOutput));
    });
  });
}
