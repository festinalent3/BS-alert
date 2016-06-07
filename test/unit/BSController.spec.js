describe('BSController', function() {
	beforeEach(module('bsApp'));

	var controller;

	beforeEach(inject(function($controller) {
		controller = $controller('BSController');
	}));

	it('initialises with alerts', function() {
		var alerts = [
			{ url: 'www.trump.com', user_id: '123456789' },
			{ url: 'www.trump.com', user_id: '098765431'}
		];

		expect(controller.alerts.length).toEqual(2);
	});

	it('add a new alert', function() {
		var alert = { url: 'www.google.com', user_id: 'ahhshjfghgj' };
		controller.addAlert(alert)
		expect(controller.alerts.length).toEqual(3);
    });
});
