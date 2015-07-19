(function() {
	'use strict';
	angular.module('app').factory('GetTrailerFactory' , GetTrailerFactory);

	GetTrailerFactory.$inject = ['$http'];
	

	

	function GetTrailerFactory($http) {
		var firebase = 'https://e3trailers.firebaseio.com/';
		var o = {};
		o.trailers = [];

		var getTrailers = function() {

			$http.get(firebase + '.json').success(function(res) {
				for(var prop in res) {
					res[prop].id = prop;
					o.trailers.push(res[prop]);
				}
				console.log("Im getting the latest and greatest trailers from E3!")
			});

		};
		getTrailers();
		return o;
	}
})();
