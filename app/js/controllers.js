'use strict';

// You may need to change the API key in case this demo app does not work
// in future.
// You can get it here.  http://developer.rottentomatoes.com/
var API_KEY = "594g2eb4b83qt359uru4b53j";

/* Controllers */

function MovieDetails ($scope, $routeParams, $location) {

	$scope.movieId = $routeParams.movieId;

	for( var i = $scope.moviesList.length - 1; i >= 0; i-- ) {
		var movie = $scope.moviesList[i];

		if( movie.id == $routeParams.movieId ) {
			$scope.movie = movie;
			console.log(movie);
		}
	};
}


function movieFinderCtrl($scope, $routeParams, $http, $location) {

	redirectToBaseUI($location);

	$scope.onSearchClicked = function(moviename) {
		redirectToBaseUI($location);
		searchMovie(moviename, $scope, $http);
	};
}

function redirectToBaseUI($location) {
	// set the correct path if it is not.
	if( $location.path() != "/" ) {
		console.log('setting the root path first');
		$location.path("/");
	}
}

function searchMovie(moviename, $scope, $http) {
	var APIUrl = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=" + API_KEY + "&q=" + moviename + "&callback=JSON_CALLBACK";

	$http({method: 'JSONP', url: APIUrl})
	.success(function(data, status, headers, config) {

	  	var movieResult = data;
	    // this callback will be called asynchronously
	    // when the response is available
	    // console.log('Success ');
	    // console.log(movieResult);
	    var totalResults = movieResult.movies.length;
	    // console.log("total: " + totalResults);

	    // if movies are found.
	    // Update the UI.
	    if( totalResults > 0 ) {
	    	$scope.movie_results = "Found " + totalResults + " movies";
	    	$scope.moviesList = movieResult.movies;
	    } else {
			$scope.movie_results = "No results found!";
	    	$scope.moviesList = [];
	    }
	  })
	.error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    console.log('Error ' + status);
	  });
}