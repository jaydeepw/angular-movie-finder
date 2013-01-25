'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function movieFinderCtrl($scope) {
	console.log('movieFinderCtrl is working.');

	$scope.onSearchClicked = function(moviename) {
		searchMovie(moviename);
	};
}


function searchMovie(moviename) {
	console.log(moviename);
}