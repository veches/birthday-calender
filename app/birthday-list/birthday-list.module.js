//@ts-check
(function () {
    'use strict';
    angular
        .module('myApp.birthdayList', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'birthday-list/birthday-list.html',
                controller: 'BirthdayListController'
            });
        }]);
}());