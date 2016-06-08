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

    // browser.executeScript(function() {
    //   window.chrome.tabs = { query: function() {} };
    //   return document;
    // }).then(function(window) {
    //   console.log('---------------------------')
    //   console.log(window.chrome.tabs)
    //   console.log('---------------------------')
    // });

    var points = $('#this-page h2');
    var text = points.getText();
    expect(text).toMatch('2!');

    // expect($('#this-page h2').getText()).toMatch("2!");
  });

  it("shows BS alert points", function() {
    browser.get('/');
    // use callback since this action is
    // asynchronous, and we need to wait for it to finish
    $('#bs-button').click().then(function() {
      expect($('#this-page').getText()).toMatch("3!");
    });
  });
  it("shows BS reported after clicking the button", function(){
    browser.get('/');
    $('#bs-button').click().then(function() {
      expect($('#bs-reported').getText()).toMatch("BULL REPORTED");
    });
  });

  it("shows a link to regret alert after clicking button", function(){
    browser.get('/');
    $('#bs-button').click(function() {
      expect($$('#bs-reported p').getText()).toMatch("I changed my mind");
    });
  });


  xit("shows the button again when a user regrets their alert", function() {
    browser.get('/');
    $('#bs-button').click();
    browser.wait(function(){
      return element(by.id('#regret-link')).isPresent();
    });

    $('#regret-link').click();

    expect($('#this-page').getText()).toMatch("2!");
    expect($('#bs-button').isPresent()).toBe(true);

  });




});
