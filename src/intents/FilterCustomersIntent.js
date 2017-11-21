'use strict';

const RequestService = require('./../services/RequestService');

const countryFactory = {
  american: 'USA',
  spanish: 'ESP',
  german: 'DEU',
};

module.exports = function (intent, session, response) {
  const countrySlot = intent.slots.Country;

  if (!countrySlot || !countrySlot.value) {
    return errorResponse(response);
  }
  RequestService.makeRequest({
    url: 'customers/filter?country=' + (countryFactory[countrySlot.value.toLowerCase()] || 'all'),
    method: 'GET'
  }).then((res) => {
    console.log('FilterCountry', res.statusCode);
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