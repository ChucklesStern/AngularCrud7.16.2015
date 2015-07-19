(function() {
	'use strict';
	angular.module('app').factory('AddTrailerFactory' , AddTrailerFactory);

	AddTrailerFactory.$inject = ['$http', '$q', '$state'];

	function AddTrailerFactory($http, $q) {
		var firebase = 'https://e3trailers.firebaseio.com/';
		var o = {};
		o.trailers = [];

		o.AddTrailer = function(newTrailer) {
			var def = $q.defer();
			$http.post(firebase + '.json', newTrailer).success(function(data) {
				newTrailer.id = data.name;
				o.trailers.push(newTrailer);
				console.log(newTrailer);
				def.resolve();
			});
			return def.promise;
		};
		return o;
	};
})();