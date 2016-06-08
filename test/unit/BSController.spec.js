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
		var alerts = [
			{ url: 'www.trump.com', user_id: '123456789' },
			{ url: 'www.trump.com', user_id: '098765431'}
		];

		expect(controller.alerts.length).toEqual(2);
	});

	it('add a new alert', function() {

		var tab = { url: 'www.google.com'}

		spyOn(controller, 'getTab').and.callFake(function(){
			controller.saveAlert(tab)
		});

		var alert = { url: 'www.google.com', user_id: '098765431' };
		controller.addAlert();
		expect(controller.alerts.length).toEqual(3);
		expect(controller.alerts.pop()).toEqual(alert);

	});

		it('checks if user has reported current url', function() {
			var alerts = [
			{ url: 'www.trump.com', user_id: '123456789' },
			{ url: 'www.trump.com', user_id: '098765431'}
		];

		var currentUserId = '098765431'
		function findAlert(alert){
			return alert.user_id === currentUserId;
		};

			// spyOn(controller, 'checkIfBS').and.callFake(function(){
			// alerts.find(findAlert)
			// // controller.isBS=true

		// });
			// controller.checkIfBS()
			expect(controller.checkIfBS(alerts)).toEqual(true);
		})

		it('removes the alert for a url', function() {
			controller.resetAlert();
			expect(controller.alerts.length).toEqual(1);

		});

});
