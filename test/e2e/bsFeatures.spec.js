describe("app", function() {
    it("should say 'Hello world' on the page", function() {
        browser.get('/');
        expect($$("#mainPopup h1").first().getText()).toMatch("Hello team BS");
    });

    it("shows a button for alert BS", function() {
        browser.get('/');
        expect($('#bs-button').isPresent()).toBe(true);
    });

    it("shows BS alert points", function() {
        browser.get('/');
        $('#bs-button').click();
        expect($('#this-page').getText()).toMatch("This page: 2");
    });
});
