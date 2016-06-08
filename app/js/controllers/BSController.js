bsApp.controller('BSController', function($scope) {
	var self = this
	var currentUserId = '098765431';


	self.alerts = [
		{ url: 'www.trump.com', user_id: '123456789' },
		{ url: 'www.trump.com', user_id: '098765431'}
	];

	self.getTab = function() {
		  chrome.tabs.query({active:true}, function(tab) {
			self.saveAlert(tab[0]);
		});
	};

	self.saveAlert = function(tab) {
		// angular is not aware of what happens in a callback
		// (in the future)
		// so we need to manually tell angular to "apply" the
		// the changes
		$scope.$apply(function(){
			self.alerts.push( { url: tab.url, user_id: currentUserId} );
			self.checkIfBS();
   });
	}

	self.addAlert = function(url) {
		self.getTab();
	};

	self.checkIfBS = function(){
		var thisAlert = self.alerts.find(function(alert) {
				return alert.user_id === currentUserId;
		});
			if(thisAlert.user_id === currentUserId) {
				return true;
			}
			else {
				return false; 
			}
	};


});
