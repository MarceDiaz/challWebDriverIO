var assert = require('assert');

var EasyLocator='//h2[@id="Easy-Test-Setup"]';


describe('webdriver.io page', function() {

    it('Test to navigate and check elements', function () {

        browser.url('http://webdriver.io');
        var myElem = browser.element('#Easy-Test-Setup');
        myElem.waitForVisible();
          console.log("Checking access to textContent");

        var textContent = myElem.getAttribute("textContent");
          console.log("---->>>'"+textContent+"'");
          //Validate text of element
        assert.equal(textContent, 'Easy Test Setup');

        //Click on "Developer Guide", top link
        var linkDeveloper=browser.element("//li/a[@href='/guide.html']");
        linkDeveloper.waitForVisible();
        linkDeveloper.click();
        //browser.timeouts('implicit', 5000);

         //Validate text of element
         var titleFirstStep = browser.element('#Taking-the-first-step');
         titleFirstStep.waitForVisible();
         assert.equal(titleFirstStep.getAttribute("textContent"),"Taking the first step");
    });
});