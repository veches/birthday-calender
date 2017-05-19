//@ts-check
(function () {
    'use strict';

    angular
        .module('myApp.birthday', ['ngRoute'])
        .config(['$routeProvider', config]);

    function config($routeProvider) {
        $routeProvider.when('/birthday/:id?', {
            templateUrl: 'birthday/birthday.html',
            controller: 'BirthdayController'
        });
    }
}());