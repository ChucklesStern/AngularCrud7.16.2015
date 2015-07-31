(function() {
	'use strict';
	angular.module('app').factory('HomeFactory' , HomeFactory);

	HomeFactory.$inject = ['$http', '$q', '$sce'];
	

	

	function HomeFactory($http, $q, $sce) {
		var firebase = 'https://e3trailers.firebaseio.com/';
		var o = {};
		o.trailers = [];

		var getTrailers = function() {
			$http.get(firebase + '.json').success(function(res) {
				for(var prop in res) {
					res[prop].link = $sce.trustAsResourceUrl(res[prop].link);
					res[prop].id = prop;
					o.trailers.push(res[prop]);
				}
				console.log(o.trailers);
				console.log("Im getting the latest and greatest trailers from E3!")
			});

			o.getSingleTrailer = function(id) {
				var def = $q.defer();
				$http.get(firebase + id + '/.json').success(function(res) {
					def.resolve(res);
				});				
				return def.promise;
			};

			o.deleteTrailer = function(trailer) {
				$http.delete(firebase + trailer.id + '/.json').success(function() {
					var index = o.trailers.indexOf(trailer);
					o.trailers.splice(index, 1);
				});

			};

			o.editTrailer = function(newT, orig) {
				var def = $q.defer();
				$http.put(firebase + orig.id + '/.json', newT).success(function() {
					var index = o.trailers.indexOf(orig);
					o.trailers.splice(index, 1);
					def.resolve();
				});
				return def.promise;
			}



		};
		getTrailers();
		return o;
	}
})();
