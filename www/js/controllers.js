angular.module('starter.controllers', [])

.controller('DashCtrl', function($location, $scope, SpiceService) {
	// somehow the user id?
	SpiceService.getSpicesByUser(10).then(function (data) {
		$scope.spices = data;
	});

	$scope.go = function (path) {
		$location.path(path);
	};
})

.controller('SpiceDetailCtrl', function($scope, $stateParams, Spices) {
  $scope.spice = Spices.get($stateParams.spiceId);
})

.controller('NewSpiceCtrl', function($scope) {
})

.controller('AccountCtrl', function($scope) {
});
