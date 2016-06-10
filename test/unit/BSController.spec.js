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
		controller.bsData = { count: 2, alerted: false}
		controller.Tab = { url: 'www.google.com' }
	}));

	it('initialises with alerts', function() {
		expect(controller.bsData.count).toEqual(2);
	});

	it('adds a new alert to the db', function() {
		controller.saveAlert();
		expect(controller.bsData.count).toEqual(3);
	});

	it('removes the alert for a url', function() {
		controller.destroyAlert(alert);
		expect(controller.bsData.count).toEqual(1);
	});

});
