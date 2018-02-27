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
  $scope.message = 'Busca el artículo que desees';
});

app.controller('ModaController', function($scope) {
  $scope.message = 'Tenemos todo lo que necesitas en moda';
});

app.controller('TecnnologiaController', function($scope) {
  $scope.message = 'Tenemos todo lo que necesitas en tecnología';
});

app.controller('ArteController', function($scope) {
  $scope.message = 'Tenemos todo lo que necesitas en artículos';
});
