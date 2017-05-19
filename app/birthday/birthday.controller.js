//@ts-check
(function () {
    'use strict';
    var app = angular.module('myApp.birthday');
    /* 
        This does not follow John Papa's Style Guildline for Angular 1.
        This is to demo the eslinter. Linter should throw an error. (npm run lint)
     */
    app.controller('BirthdayController', BirthdayController);

    BirthdayController.inject = ['$scope', '$location', '$routeParams', 'BirthdayFactory'];
    function BirthdayController($scope, $location, $routeParams, BirthdayFactory) {
        var currentDate = new Date();
        $scope.birthday = $routeParams.id ? BirthdayFactory.get($routeParams.id) : {};
        $scope.copy = angular.copy($scope.birthday);

        $scope.navigateToList = function () {
            $location.path("/");
        }
        $scope.saveBirthday = function (form) {
            if (!form.$valid) return;
            BirthdayFactory.save($scope.copy);
            $scope.navigateToList();
        }

        $scope.validateDate = function (modelValue, viewValue) {
            var dateObj = new Date(viewValue);
            if (!dateObj.getDate() || dateObj > currentDate) {
                return false;
            }
            return true;
        }
    }
}());