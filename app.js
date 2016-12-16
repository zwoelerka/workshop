var workshopApp = angular.module('workshopApp', []);

workshopApp.controller('workshopController', function workshopController($scope) {
    $scope.step = 1;
    $scope.progress = 6.67;
    $scope.techniques = [
    	{
    		index: 1,
    		name: 'Specialized controls'
    	},
    	{
    		index: 2,
    		name: 'Disable pressed buttons'
    	},
    	{
    		index: 3,
    		name: 'Shadows around modal windows'
    	},
    	{
    		index: 4,
    		name: 'Instructions on empty states'
    	},
    	{
    		index: 5,
    		name: 'Pressed button states'
    	},
    	{
    		index: 6,
    		name: 'Sign up link in the log in page'
    	},
    	{
    		index: 7,
    		name: 'Context sensitive navigation'
    	},
    	{
    		index: 8,
    		name: 'More emphasis on key functions'
    	},
    	{
    		index: 9,
    		name: 'Embed video'
    	}
    	
    ]
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

