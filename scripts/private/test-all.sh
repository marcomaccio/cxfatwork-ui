#!/bin/sh

set -ex

cleanUp () {
  kill $WEBSERVER_PID
  git checkout -f $BRANCH
}

trap cleanUp EXIT

ROOT_DIR=`dirname $0`/../..

cd $ROOT_DIR
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Ensure that all the dependencies are there
npm install

# Ensure that the chromeDriver is installed
npm run update-webdriver

# Start up the web server
node_modules/.bin/http-server -p 8000 &
WEBSERVER_PID=$!

# Run the unit and e2e tests
node_modules/karma/bin/karma start src/test/js/karma.conf.ci.js --single-run
node_modules/.bin/protractor src/test/js/protractor-conf.js
