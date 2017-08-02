var assert = require('assert');
browser.timeouts('script', 60000);
browser.timeouts('pageLoad', 20000);


describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        console.log(title);
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');

        //Click on "Contribute", top link
        var linkContribute=browser.element("//li/a[@href='/contribute.html']");
        linkContribute.waitForVisible();
        linkContribute.click();
        console.log("getTitle==>"+browser.getTitle());
        assert.equal(browser.getTitle(),"WebdriverIO - Contributing");
        browser.timeouts('implicit', 3000);

        //Gitter Chat
        console.log(browser.getText('*=Gitter Chat'));
        var gitterChat = browser.element('*=Gitter Chat');
        gitterChat.waitForVisible();
        gitterChat.click();
        browser.timeouts('implicit', 3000);

        //Go to 'Sign in'
        console.log(browser.getText('*=Sign in to start talking'));
        var SignInButton = browser.element('*=Sign in to start talking');
        SignInButton.waitForVisible();
        SignInButton.click();
        browser.timeouts('implicit', 7000);
    });

});