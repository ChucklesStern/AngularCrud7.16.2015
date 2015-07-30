(function() {
	'use strict';
	angular.module('app').controller('EditTrailerController', EditTrailerController); 

	EditTrailerController.$inject = ['HomeFactory', '$state', '$stateParams'];


	function EditTrailerController(HomeFactory, $state, $stateParams) {
		var vm = this;
		vm.title = 'Welcome to our App!';
		var id = $stateParams.id;


		if(id) {
			HomeFactory.getSingleTrailer(id).then(function(data) {
				vm.orig = data;
				vm.orig.id = id;
				vm.newT = angular.copy(data);
			});
		}
		else $state.go('Home');

		vm.changeTrailer = function() {
			HomeFactory.editTrailer(vm.newT, vm.orig).then(function() {
				console.log("changeTrailer works")
				$state.go('Home');
			});
		};



	}
})();