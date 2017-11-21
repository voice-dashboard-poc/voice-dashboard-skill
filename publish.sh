#!/usr/bin/env bash
rm app.zip
zip -r app.zip src
aws lambda update-function-code --function-name VoiceDashboard-skill --zip-file fileb://app.zip
