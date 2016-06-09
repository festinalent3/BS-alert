bsApp.service('BSdata', ['$http', function($http) {

  var self = this;

  self.fetchAll = function() {
    return $http.get('http://jsonplaceholder.typicode.com/posts')
    .then(_handleResponseFromApi);
  };

  function _handleResponseFromApi (response) {
    data = response.data.map(function(AlertData){
      return {count: 2, alerted: false, user_id: '098765431'};
      // return [{AlertData.text, AlertData.completed}];
      // return [{AlertData.count, AlertData.alerted}];
    });
    return data;
  };

  self.postToServer = function(data) {
    console.error('postToServer');
    return $http.post("http://jsonplaceholder.typicode.com/posts", data);
  };

}]);
