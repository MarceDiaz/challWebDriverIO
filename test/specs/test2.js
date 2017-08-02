var assert = require('assert');
//var webdriverio = require('webdriverio');
//var options = { desiredCapabilities: { browserName: 'firefox' } };
//var client = webdriverio.remote(options);

/*var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;*/


var EasyLocator='//h2[@id="Easy-Test-Setup"]';
describe('webdriver.io page', function() {
    it('Test to access elements', function () {
        browser.url('http://webdriver.io');
        var myElem = browser.element('#Easy-Test-Setup');
        myElem.waitForVisible();
          console.log("Checking access to textContent");
        var textContent = myElem.getAttribute("textContent");
          console.log("---->>>'"+textContent+"'");

        assert.equal(textContent, 'Easy Test Setup');

    });
});