// this is where your routes go //
var app = angular.module('meanTEA', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/home.html',
    controller: 'mainController'
  })
  .when('/about', {
    templateUrl: './partials/about.html',
    controller: 'aboutController'
  })
  .when('/contact', {
    templateUrl: './partials/contact.html',
    controller: 'contactController'
  })
});
