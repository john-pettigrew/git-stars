angular.module('app.controllers', [])

.controller('UserCtrl', function($scope, $location, User) {
	$scope.username = User.username();

	$scope.set = function(username){
		User.setUser(username);
		$location.path('/tab/stars');
	};
})

.controller('StarsCtrl', function($scope, $http, User) {
	$scope.page = 1;
	$scope.loading = true;

	$scope.getCurrentPage = function(){
		if(User.username() !== undefined){
			User.getPage($scope.page).then(function(data){
				$scope.loading = false;
				$scope.data = data;
			});
		}
	};

	$scope.visit = function(url){
		// Open link in browser.

		window.open(url, '_system', 'location=no');
	};

	$scope.displayNextButton = function(){
		// See if a next button is needed.

		if($scope.data !== undefined && $scope.data !== null && $scope.data.length >= 30){
			return true;
		}
		else{
			return false;
		}
	};

	$scope.displayPreviousButton = function(){
		// See if a previous button is needed.

		if($scope.data !== undefined && $scope.data !== null && $scope.data.length >= 1 && $scope.page > 1){
			return true;
		}
		else{
			return false;
		}
	};


	$scope.next = function(){
		// Get next page of repositories

		$scope.page++;
		$scope.getCurrentPage();
	};

	$scope.prev = function(){
		// Get previous page of repositories

		$scope.page--;
		if($scope.page <= 0){
			$scope.page = 1;
		}

		$scope.getCurrentPage();
	};

});
