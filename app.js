var workshopApp = angular.module('workshopApp', []);

workshopApp.controller('workshopController', function workshopController($scope) {
    $scope.step = 1;
    $scope.progress = 6.67;

	$scope.incrementStep = function () {
		if ($scope.step < 15) {
			$scope.step++;
			$scope.progress = $scope.step * 6.67;
		}
	 }

	$scope.decrementStep = function () {
		if ($scope.step > 1) {
			$scope.step--;
			$scope.progress = $scope.step * 6.67;
		}
	}


});

