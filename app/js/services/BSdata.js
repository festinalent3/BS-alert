bsApp.service('BSdata', ['$http', function($http) {

  var self = this;

  self.fetchAll = function(data) {
    console.log(data);
    return $http({
      url: 'https://glacial-mesa-70382.herokuapp.com/domains',
      method: "GET",
      params: data
    })
  };

  self.postToServer = function(data) {
    return $http({
      url: 'https://glacial-mesa-70382.herokuapp.com/domains',
      method: "POST",
      params: data
    })
  };

  self.deleteToServer = function(data) {
    return $http({
      url: 'https://glacial-mesa-70382.herokuapp.com/domains/',
      method: "DELETE",
      params: data
    })
  };

}]);
