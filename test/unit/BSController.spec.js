describe('BSController', function() {
	beforeEach(module('bsApp'));

	var controller, scope;

	beforeEach(inject(function($controller, $rootScope) {
		// the controller depends on the built in service
		// $scope, so we need to create one and inject it
		scope = $rootScope.$new();
		controller = $controller('BSController', {
			$scope: scope
		});
	}));

	it('initialises with alerts', function() {
		//This needs to be mocked as soon as we can implement an actual call to an external API
		expect(controller.bsData.count).toEqual(2);
	});

	it('adds a new alert to the db', function() {
		var alert = { url: 'www.google.com', user_id: '098765431' };
		controller.saveAlert(alert);
		expect(controller.bsData.count).toEqual(3);
		// expect(controller.bsData.user_id).toEqual(alert.user_id);
	});

	it('removes the alert for a url', function() {
		var alert = { url: 'www.google.com', user_id: '098765431' };
		controller.destroyAlert(alert);
		expect(controller.bsData.count).toEqual(1);
	});

});
