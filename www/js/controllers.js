angular.module('starter.controllers', [])

.controller('UserCtrl', function($scope, $http, User) {
	$scope.test = function(){
		console.log(User);
		$http({method: 'GET', url: 'https://api.github.com/users/octocat/starred'}).
			success(function(data, status, headers, config){
				console.log(data);
				User.data = data;
			}).
			error(function(data, status, headers, config){
				console.log('not cool');
				data = null;
			});
	}
})

.controller('StarsCtrl', function($scope, User) {
	$scope.data = User.data;
});