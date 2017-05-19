//@ts-check

(function () {
    'use strict';

    /**
     *      custom form field validator
     *      <form name="form">
     *              <input ng-model="ctrl.model" name="forminput" custom-validation="validationFunction">
     *              <span ng-show="form.forminput.$error.customValidation"> custom validation error</span>
     *          </form>
     */
    angular
        .module('myApp.common')
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