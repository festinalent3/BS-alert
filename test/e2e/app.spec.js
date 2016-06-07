describe("app", function() {
  it("should say 'Hello world' on the page", function() {
    browser.get('/');
    expect($$("#mainPopup h1").first().getText()).toMatch("Hello team BS");
  });
});
