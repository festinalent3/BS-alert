bsApp.controller('BSController', function() {
	var self = this;

	self.alerts = [
		{ url: 'www.trump.com', user_id: '123456789' },
		{ url: 'www.trump.com', user_id: '098765431'}
	];

	self.addAlert = function(alert) {
		self.alerts.push( { url: 'www.trump.com', user_id: 'hahahjdhjflk'} );
	};
});