//@ts-check
(function () {
    'use strict';
    angular
        .module('myApp.birthdayList', ['ngRoute', 'myApp.common'])
        .config(['$routeProvider', config]);

    function config($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'birthday-list/birthday-list.html',
            controller: 'BirthdayListController'
        });
    }
}());