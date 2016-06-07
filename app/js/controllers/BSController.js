bsApp.controller('BSController', function($scope) {
	var self = this;
	var lastTab;

	self.alerts = [
		{ url: 'www.trump.com', user_id: '123456789' },
		{ url: 'www.trump.com', user_id: '098765431'}
	];

	self.getTab = function() {
		chrome.tabs.query({active:true}, function(tab) {
			self.saveAlert(tab);
		});
	};

	self.saveAlert = function(tab) {
		// angular is not aware of what happens in a callback
		// (in the future)
		// so we need to manually tell angular to "apply" the
		// the changes
		$scope.$apply(function(){
			self.alerts.push( { url: tab.url, user_id: 'user_id'} );
			console.log(self.alerts);
   });
	}

	self.addAlert = function(url) {
		self.getTab();
		// window.alert('tada');

	};
});
