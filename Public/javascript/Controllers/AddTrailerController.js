(function() {
	'use strict';
	angular.module('app').controller('AddTrailerController', AddTrailerController); 

	AddTrailerController.$inject = ['AddTrailerFactory', '$state'];

	function AddTrailerController(AddTrailerFactory, $state) {
		var vm = this;
		vm.newTrailer = {};
		vm.addNewTrailer = addNewTrailer;

		function addNewTrailer() {
			AddTrailerFactory.AddTrailer(vm.newTrailer).then(function() {
				$state.go('Home');

			});
		}
	}
})();
