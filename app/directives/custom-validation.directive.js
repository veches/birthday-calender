//@ts-check

(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('customValidation', CustomValidation);

    function CustomValidation() {
        var directive = {
            require: 'ngModel',
            restrict: 'A',
            link: link,
            scope: {
                customValidation: '&'
            }
        }

        return directive;

        function link(scope, elem, attr, ngModel) {
            ngModel.$validators.customValidation = scope.customValidation();
        }
    }
}());

