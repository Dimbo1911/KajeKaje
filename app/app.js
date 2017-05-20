    (function() {
    
    var app = angular.module('jobsApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'NewsController',
                templateUrl: 'app/views/newsView.html'
            })
            .when('/1', {
                controller: 'NewsController',
                templateUrl: 'app/views/newsView1.html'
            })
            .when('/2', {
                controller: 'NewsController',
                templateUrl: 'app/views/newsView2.html'
            })
            .when('/snz', {
                controller: 'SNZController',
                templateUrl: 'app/views/snz.html'
            })
            .when('/profile/:userId', {
                controller: 'ProfilController',
                templateUrl: 'app/views/profil.html'
            })
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'app/views/loginView.html'
            })
            .when('/login/forgotpw', {
                controller: 'ForgotPasswordController',
                templateUrl: 'app/views/forgotPasswordView.html'
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'app/views/registerView.html'
            })
            .when('/recommended',{
                controller: 'RecommendedController',
                templateUrl: 'app/views/recommended.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());