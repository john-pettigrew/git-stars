angular.module('app.services', [])

.factory('User', function() {
  var data;

  return {
    get: function() {
      return data;
    }
  }
});
