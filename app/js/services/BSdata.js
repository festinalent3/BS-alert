bsApp.service('BSdata', ['$http', function($http) {

  var self = this;

  self.fetchAll = function() {
    return $http.get('https://quiet-beach-24792.herokuapp.com/todos.json')
    .then(_handleResponseFromApi);
  };

  function _handleResponseFromApi (response) {
    data = response.data.map(function(AlertData){
      return [];
      // return [{AlertData.text, AlertData.completed}];
      // return [{AlertData.count, AlertData.alerted}];
    });
    return data;
  };

  self.postToServer = function(data) {
    return $http.post("http://jsonplaceholder.typicode.com/posts", data);
  };

}]);
