describe("app", function() {

  var mock = require('protractor-http-mock');

  beforeEach(function(){
    mock([{
      request: {
        path: 'https://glacial-mesa-70382.herokuapp.com/domains',
        method: 'GET',
        params: { ipaddress: 127.8, weburl: "www.buzzfeed.com" }
      },
      response: {
        data: { data: { count: 2, alerted: false } }
      }
    }]);
    });
  //
//   mock([{
//     request: {
//       path: 'https://glacial-mesa-70382.herokuapp.com/api/domains',
//       method: 'GET',
//       params: { ipaddress: 127.8, weburl: "www.buzzfeed.com" }
//     },
//     response: {
//       data: {count: 2, alerted: false}
//     }
//   },{
//     request: {
//       path: 'https://glacial-mesa-70382.herokuapp.com/api/domains',
//       method: 'POST',
//       data: { ipaddress: 127.8, weburl: "www.buzzfeed.com" }
//     },
//     response: {
//       data: {count: 3, alerted: true}
//     }
//   }]);
// });


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
    var points = $('#this-page h2');
    var text = points.getText();
    expect(text).toMatch('2!');
  });

  it("shows BS alert points", function() {
    browser.get('/');
    // use promise since this action is
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
    $('#bs-button').click();
    expect($('#regret-link').getText()).toMatch("I changed my mind");
  });

  it("shows the button again when a user regrets their alert", function() {
    browser.get('/');

    $('#bs-button').click();
    $('#regret-link').click();
    browser.sleep(2000)
    expect($('#bs-button').isPresent()).toBe(true);
    expect($('#this-page').getText()).toMatch("2!");
  });

  afterEach(function(){
    mock.teardown();

    // prints the console logs from the app in the protractor output
    // for debugging purposes
    // browser.manage().logs().get('browser').then(function(browserLog) {
    //   console.log(require('util').inspect(browserLog, false, null));
    // });
  });
});
