var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'HomeController'
    })

    .when('/moda', {
      templateUrl: 'pages/moda.html',
      controller: 'ModaController'
    })

    .when('/tech', {
      templateUrl: 'pages/tech.html',
      controller: 'TecnnologiaController'
    })

    .when('/art', {
      templateUrl: 'pages/art.html',
      controller: 'ArteController'
    })

    .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = '¡Hola! tenemos todo lo que necesitas... HomeController';
});

app.controller('ModaController', function($scope) {
  $scope.message = '¡Hola! tenemos todo lo que necesitas... ModaController';
});

app.controller('TecnnologiaController', function($scope) {
  $scope.message = '¡Hola! tenemos todo lo que necesitas... TecnnologiaController';
});

app.controller('ArteController', function($scope) {
  $scope.message = '¡Hola! tenemos todo lo que necesitas... ArteController';
});
