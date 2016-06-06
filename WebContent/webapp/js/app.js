var app = angular.module('myApp', [ 'ngRoute', 'ui.bootstrap','DataServiceModule', 'SharedServiceModule' ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'html/booking-list.html',
			controller : bookingListCtrl})
		.when('/booking-list', {
				templateUrl : 'html/booking-list.html',
				controller : bookingListCtrl})
		.when('/tables', {
			templateUrl : 'html/tables.html',
			controller : tablesCtrl})
		.when('/charts', {
			templateUrl : 'html/charts.html',
			controller : chartsCtrl})
		.otherwise({
			redirectTo : '/'
		});
} ]);