var app = angular.module('myApp', [ 'ngRoute', 'DataServiceModule', 'SharedServiceModule' ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'html/booking-list.html',
			controller : bookingListCtrl})
		.when('/booking-list', {
				templateUrl : 'html/booking-list.html',
				controller : bookingListCtrl})
		.otherwise({
			redirectTo : '/'
		});
} ]);