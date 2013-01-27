'use strict';

// You may need to change the API key in case this demo app does not work
// in future.
// You can get it here.  http://developer.rottentomatoes.com/
var API_KEY = "7ect2zrb24k3fpa2bttzswqn";

/* Controllers */
function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function movieFinderCtrl($scope, $http) {
	console.log('movieFinderCtrl is working.');

	$scope.onSearchClicked = function(moviename) {
		searchMovie(moviename, $scope, $http);
	};
}

function searchMovie(moviename, $scope, $http) {
	console.log(moviename);

	var url1 = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=" + API_KEY + "&q=" + moviename + "&page_limit=1&callback=JSON_CALLBACK";

	$http({method: 'JSONP', url: url1})
	.success(function(data, status, headers, config) {
	  	var movieResult = data;
	    // this callback will be called asynchronously
	    // when the response is available
	    console.log('Success ');
	    console.log(movieResult);
	    var title = movieResult.movies[0].title;
	    console.log(title);
	    $scope.result_movie_name = title;
	  })
	.error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    console.log('Error ' + status);
	  });
}