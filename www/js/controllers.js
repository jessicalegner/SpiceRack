angular.module('starter.controllers', [])

.controller('DashCtrl', function($location, $scope, SpiceService) {
	// somehow the user id?
	SpiceService.getSpicesByUser(10).then(function (data) {
		$scope.spices = data;
	});
})

.controller('SpiceDetailCtrl', function($location, $scope, $stateParams, SpiceService) {
	SpiceService.getSpiceById($stateParams.spiceId, 10).then(function(data) {
		$scope.spice = data[0];
		$scope.spiceUpdate = {amount: $scope.spice.pivot.amount};
	});

	$scope.delete = function(id) {
		SpiceService.deleteSpice(id);
		$location.path('#/tab/dash');
		// TODO: need to refresh the dash after delete
	};

	$scope.update = function(id) {
		SpiceService.updateSpice($scope.spiceUpdate, id);
		$location.path('#/tab/dash');
	};
})

.controller('NewSpiceCtrl', function($scope) {
  
})

.controller('AccountCtrl', function($scope) {
});
