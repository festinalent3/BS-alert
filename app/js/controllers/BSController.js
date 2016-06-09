bsApp.controller('BSController', ['$scope','$http', 'BSdata', function($scope, $http, BSdata) {
	var self = this;
	var currentUserIP;
	var Tab;

	(function () {
		if (typeof chrome.tabs !== 'undefined') {
			chrome.tabs.query({active:true, currentWindow:true}, function(tab) {
				Tab = tab[0];
				$http.get('https://api.ipify.org').then(function(ip) {
					currentUserIP = ip.data;
					BSdata.fetchAll({ ipaddress: currentUserIP, weburl: Tab.url }).then(_handleResponseFromApi);
				});
			});
		}
		else {
			Tab = [{ url: 'www.google.com'}];
		}
	})();

	function _handleResponseFromApi(response) {
		self.bsData = response.data;
		console.log(self.bsData);
	};

	self.saveAlert = function(tab) {
		self.bsData.alerted = true;
		self.bsData.count += 1;
		var data = {
			weburl: Tab.url,
			ipaddress: currentUserIP
		}
		BSdata.postToServer(data).success(function(data, status) {
			self.bsData = BSdata.fetchAll({ weburl: Tab.url, ipaddress: currentUserIP }).then(_handleResponseFromApi);
		});
	};

	self.destroyAlert = function(tab) {
		self.bsData.alerted = false;
		self.bsData.count -= 1;
		var data = {
			weburl: Tab.url,
			ipaddress: currentUserIP
		}
		BSdata.deleteToServer(data).success(function(data, status) {
			self.bsData = BSdata.fetchAll({ weburl: Tab.url, ipaddress: currentUserIP }).then(_handleResponseFromApi);
			conosle.log()
		});
	};
}]);
