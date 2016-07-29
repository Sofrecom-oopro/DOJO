(function(){

	'use strict'; 

	angular.module('login', [])
	.config(configLogin)
	.run(runLogin)
	.directive('loginDirective', [function () {
		return {
			restrict: 'E',
			templateUrl: 'login/login.html'
		};
	}])

	function configLogin () {
		 // body...  

		 console.log('config login');
	}

	function runLogin () {
		 // body...  

		 console.log('run login');
	}


})();