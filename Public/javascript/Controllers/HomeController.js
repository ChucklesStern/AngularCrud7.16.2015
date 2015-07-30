(function() {
	'use strict';
	angular.module('app').controller('HomeController', HomeController); 

	HomeController.$inject = ['HomeFactory', '$state'];


	function HomeController(HomeFactory, $state) {
		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.trailers = HomeFactory.trailers;

		vm.removeTrailer = function(trailer) {
			HomeFactory.deleteTrailer(trailer);
			$state.go('Home');
		};
		vm.editPage = function(id) {
			$state.go('Edit', { id : id});
			console.log("editPage function" + id);
		};


	}




})();