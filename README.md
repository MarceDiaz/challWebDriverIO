# Test Automation Framework 
==============================
           
Prerequisites
--------------

**Java 7:** http://www.oracle.com/technetwork/es/java/javase/downloads/jdk7-downloads-1880260.html

**Nodejs:** https://nodejs.org/download/release/v6.6.0/

Install components
------------------
On Mac run:
mkdir webdriverio-test && cd webdriverio-test

checkout project from: 
https://github.com/MarceDiaz/challWebDriverIO.git

On folder webdriverio-test:
curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar
curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-macos.tar.gz | tar xz
npm install webdriverio



To Run:
------------------
In console start server running:
java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.0.1.jar

In project path and other window console execute: 
./node_modules/.bin/wdio wdio.conf.js
 
