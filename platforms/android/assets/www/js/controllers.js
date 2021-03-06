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
	$scope.page = 1;
	$scope.loading = true;
	$scope.refresh = function(){
		if(User.name !== undefined){
			$http({method: 'GET', url: 'https://api.github.com/users/'+User.name+'/starred?page=1'}).
				success(function(data, status, headers, config){
					$scope.data = data;
					$scope.loading = false;
				}).
				error(function(data, status, headers, config){
					data = null;
					$scope.loading = false;
				});
		}
	};
	$scope.visit = function(url){
		window.open(url, '_system', 'location=no');
	};
	$scope.checkNumber = function(){
		if($scope.data !== undefined){
			if($scope.data.length >= 30){
				return true;
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
	};
	$scope.next = function(){
		$scope.loading = true;
		$scope.page++;
		$http({method: 'GET', url: 'https://api.github.com/users/'+User.name+'/starred?page='+$scope.page}).
				success(function(data, status, headers, config){
					$scope.data = data;
					$scope.loading = false;
				}).
				error(function(data, status, headers, config){
					data = null;
					$scope.loading = false;
				});
	};
	$scope.prev = function(){
		$scope.loading = true;
		$scope.page--;
		if($scope.page <= 0){
			$scope.page = 1;
		}
		$http({method: 'GET', url: 'https://api.github.com/users/'+User.name+'/starred?page='+$scope.page}).
				success(function(data, status, headers, config){
					$scope.data = data;
					$scope.loading = false;
				}).
				error(function(data, status, headers, config){
					data = null;
					$scope.loading = false;
				});
	};

});