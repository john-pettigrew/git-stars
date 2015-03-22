angular.module('app.services', [])

.factory('User', function($q, $http) {
  var username = '';
  var savedData;

  $http.defaults.cache = false;

  return {
    savedData: function(){
      return savedData;
    },
    username: function(){
      return username;
    },
    setUser: function(user){
      username = user;
    },
    getPage: function(page){
      var deferred = $q.defer();

      $http({method: 'GET', url: 'https://api.github.com/users/'+username+'/starred?page='+page}).
  				success(function(data, status, headers, config){
  					savedData = data;
            deferred.resolve(savedData);
  				}).
  				error(function(data, status, headers, config){
            savedData = null;
            deferred.resolve(savedData);
  				}
      );

      return deferred.promise;
  	}
  };
});
