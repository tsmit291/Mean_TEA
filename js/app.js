// this is where your routes go //
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/teas', {
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
