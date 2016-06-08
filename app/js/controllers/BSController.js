bsApp.controller('BSController', ['$scope','$http', 'BSdata', function($scope, $http, BSdata) {
	var self = this
	// self.bsData = BSdata.fetchAll();
	self.bsData = {count: 2, alerted: false, user_id: '098765431'}
	var currentUserId = self.bsData.user_id; //Get from db
	var Tab;

	chrome.tabs.query({active:true, currentWindow:true}, function(tab) {
		Tab = tab[0];
	});

	self.saveAlert = function(tab) {
		self.bsData.alerted = true; //To make window image load faster
		var data = {
			url: Tab.url,
			alerted: true,
			user_id: currentUserId,
			count: self.bsData.count += 1
		}
		BSdata.postToServer(data).success(function(data, status) {
			self.bsData = data;
		});
	};

	self.destroyAlert = function(tab) {
		var data = {
			url: Tab.url,
			alerted: false,
			user_id: currentUserId,
			count: self.bsData.count -= 1
		}
		BSdata.postToServer(data).success(function(data, status) {
			self.bsData = data;
		});
	};

	self.checkIfBS = function(){
		return self.bsData.alerted;
	};


}]);
