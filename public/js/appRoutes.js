 angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        
        .when('/messages', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

       
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        });
        .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileController'
        })

    $locationProvider.html5Mode(true);

}])