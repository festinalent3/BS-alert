bsApp.service('BSdata', ['$http', function($http) {

  var self = this;

  self.fetchAll = function(data) {
    console.log(data);
    return $http({
      url: 'https://glacial-mesa-70382.herokuapp.com/api/domains',
      method: "GET",
      params: data
    })
  };

  self.postToServer = function(data) {
    return $http({
      url: 'https://glacial-mesa-70382.herokuapp.com/api/domains',
      method: "POST",
      params: data
    })
  };
}]);
