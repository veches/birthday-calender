//@ts-check
(function () {
  'use strict';

  angular.module('myApp', [
    'ngRoute',
    'myApp.common',
    'myApp.birthdayList',
    'myApp.birthday'
  ])
    .config(['$locationProvider', '$routeProvider', config])
    .constant('_', window._)
    .run(run);

  function run($rootScope) {
    $rootScope._ = window._;
  }

  function config($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  }
}());
