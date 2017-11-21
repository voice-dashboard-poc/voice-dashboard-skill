'use strict';

module.exports = {
  "version": "1.0",
  "session": {
    "new": true,
    "sessionId": "amzn1.echo-api.session.abeee1a7-aee0-41e6-8192-e6faaed9f5ef",
    "application": {
      "applicationId": "amzn1.echo-sdk-ams.app.000000-d0ed-0000-ad00-000000d00ebe"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.account.AM3B227HF3FAM1B261HK7FFM3A2"
    }
  },
  "context": {
    "System": {
      "application": {
        "applicationId": "amzn1.echo-sdk-ams.app.000000-d0ed-0000-ad00-000000d00ebe"
      },
      "user": {
        "userId": "amzn1.account.AM3B227HF3FAM1B261HK7FFM3A2"
      },
      "device": {
        "supportedInterfaces": {
          "AudioPlayer": {}
        }
      }
    }
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.c5888e55-4ad1-4255-b1b2-4f638c472579",
    "locale": "en-US",
    "timestamp": "2016-12-13T19:50:47Z",
    "intent": {
      "name": "LoginIntent",
      "slots": {
        "User": {
          "name": "User",
          "value": "developer"
        }
      }
    }
  }
};
