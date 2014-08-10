angular.module('starter.controllers', [])

.controller('UserCtrl', function($scope, $location, User) {
	$scope.refresh = function(){
		$scope.username = User.name;
	};
	$scope.set = function(username){
		User.name = username;
		$location.path('/tab/stars');
	};
})

.controller('StarsCtrl', function($scope, $http, User) {
	$scope.refresh = function(){
		if(User.name !== undefined){
			$http({method: 'GET', url: 'https://api.github.com/users/'+User.name+'/starred'}).
				success(function(data, status, headers, config){
					$scope.data = data;
				}).
				error(function(data, status, headers, config){
					console.log('not cool');
					data = null;
				});
		}
	};

});