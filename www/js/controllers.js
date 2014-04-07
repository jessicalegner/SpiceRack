angular.module('starter.controllers', [])

.controller('DashCtrl', function($location, $scope, SpiceService) {
	// somehow the user id?
	SpiceService.getSpicesByUser(10).then(function (data) {
		$scope.spices = data;
	});
})

.controller('SpiceDetailCtrl', function($location, $scope, $stateParams, SpiceService) {
	SpiceService.getSpiceById($stateParams.spiceId).then(function (data) {
		$scope.spice = data;
	});

	$scope.delete = function(id) {
		SpiceService.deleteSpice(id);
		$location.path('#/tab/dash');
		// TODO: need to refresh the dash after delete
	};
})

.controller('NewSpiceCtrl', function($scope) {
  
})

.controller('AccountCtrl', function($scope) {
});
