(function() {
	'use strict';
	//'app' brings in the desired global src from the index and ['ui.router'] brings in the associated extension library
	angular.module('app', ['ui.router'])
	//the .config call with a parameter of Config allows us to pass in the result of the Config function to the config parameters
	.config(Config);

	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('AddTrailer', {
			url: '/trailers/add' ,
			templateUrl: 'views/AddTrailer.html'
		}).state('Edit', {
			url: '/trailers/Edit/:id' ,
			templateUrl: 'views/Edit.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
