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
    	},
    	{
    		index: 10,
    		name: 'Highlight important changes'
    	},
    	{
    		index: 11,
    		name: 'Enable keyboard functions'
    	},
    	{
    		index: 12,
    		name: 'Display help messages'
    	},
    	{
    		index: 13,
    		name: 'Validation messages'
    	},
    	{
    		index: 14,
    		name: 'Tabbed navigation'
    	}
    	
    ]


    $scope.loginSubmited = false;
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

	$scope.selectTechnique = function (x) {
		$scope.step = x;
		$scope.progress = $scope.step * 6.67;
	}

	// step 1

$scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: true
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }


    // step 2
    $scope.SubmitLogin = function () {
		$scope.loginSubmited = true;
	}


	// step 10
	$scope.addNewTodoItem = {};
	$scope.addNewTodoItem.newItem = '';
	$scope.showAddNewItemValidation = false;
	$scope.todoList = [
	{
		item: 'wake up'
	},
	{
		item: 'shower'
	}
	];
	$scope.addToList = function () {
		if ($scope.addNewTodoItem.newItem == null || $scope.addNewTodoItem.newItem == undefined || $scope.addNewTodoItem.newItem == '') {
			$scope.showAddNewItemValidation = true;
		} else {
			
			$scope.todoList.push({item: $scope.addNewTodoItem.newItem});
			$scope.addNewTodoItem.newItem = '';
			$scope.showAddNewItemValidation = false;
		}
			console.log($scope.addNewTodoItem.newItem);

	}

	//step 14
	$scope.tabbedNavSelected = 1;
	$scope.tabbedNavLink = function (data) {
		$scope.tabbedNavSelected = data;
	}


 $scope.fn = function (event) {
     $scope.keyCode = event.keyCode;
     if (event.keyCode == 39) {
         console.log("spacebar pressed");
     };
 };

 $scope.keyPress = function(eve) {
       if(eve.which === 37) {
           $scope.decrementStep();   
       }
       if(eve.which === 39) {
           $scope.incrementStep();   
       }
    }

});

