(function() {
	'use strict';
	angular.module('app').controller('HomeController', HomeController); 

	HomeController.$inject = ['GetTrailerFactory'];


	function HomeController(GetTrailerFactory) {
		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.trailers = GetTrailerFactory.trailers;
	};




})();