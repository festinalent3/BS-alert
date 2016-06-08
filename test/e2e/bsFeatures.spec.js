describe("app", function() {
    it("should say ALERTS", function() {
        browser.get('/');
        expect($$("#mainPopup h1").first().getText()).toMatch("ALERTS");
    });

    it("shows a button for alert BS", function() {
        browser.get('/');
        expect($('#bs-button').isPresent()).toBe(true);
    });

    it("shows BS alert points", function() {
        browser.get('/');
        expect($('#this-page').getText()).toMatch("2!");
    });

    it("shows BS alert points", function() {
        browser.get('/');
        // use callback since this action is
        // asynchronous, and we need to wait for it to finish
        $('#bs-button').click(function() {
          expect($('#this-page').getText()).toMatch("This page: 3");
        });
    });
});
