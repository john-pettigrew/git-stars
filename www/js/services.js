angular.module('app.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('User', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var data;

  return {
    get: function() {
      return data;
    }
  }
});
