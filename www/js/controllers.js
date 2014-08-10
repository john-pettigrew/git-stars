angular.module('starter.controllers', [])

.controller('UserCtrl', function($scope, User) {
	$scope.set = function(username){
		User.name = username;
		console.log(User.name);		
	}
})

.controller('StarsCtrl', function($scope, $http, User) {
	$scope.refresh = function(){
		console.log(User.name);
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
	}

});