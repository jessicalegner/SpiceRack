angular.module('starter.controllers', [])

.controller('DashCtrl', function($location, $scope, Spices) {
	$scope.spices = Spices.all();

	$scope.go = function (path) {
  $location.path(path);
};
})

.controller('SpiceDetailCtrl', function($scope, $stateParams, Spices) {
  $scope.spice = Spices.get($stateParams.spiceId);
})

.controller('SpiceNewCtrl', function($scope, Spices) {
  // Spices.add();
})

.controller('AccountCtrl', function($scope) {
});
