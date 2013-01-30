'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: movieFinderCtrl});
    $routeProvider.when('/view2:movieId', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
