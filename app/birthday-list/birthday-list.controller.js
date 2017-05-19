//@ts-check
(function () {
    'use strict';

    angular
        .module('myApp.birthdayList')
        .controller('BirthdayListController', BirthdayListController);

    BirthdayListController.inject = ['$scope', '$location', 'BirthdayFactory'];
    function BirthdayListController($scope, $location, BirthdayFactory) {
        $scope.sortBy = "month";
        $scope.birthdays = BirthdayFactory.get();
        $scope.birthdayMonths = [];

        function activate() {
            for (var i = 0; i < 12; i++) {
                $scope.birthdayMonths.push({ month: i + 1, name: $scope.getMonth(i + 1), birthdays: [] });
            }
            $scope.birthdays.forEach(function (item) {
                var itemMonth = parseInt(item.date.slice(0, 2));
                $scope._.find($scope.birthdayMonths, 
                    function (item) {
                        return item.month == itemMonth
                    }).birthdays.push(item);
            });
        }
        $scope.editBirthday = function (birthday) {
            $location.path('/birthday/' + birthday.id);
        }
        $scope.getMonth = function (monthIndex) {
            var date = new Date((monthIndex < 10 ? '0' + monthIndex : monthIndex) + '-01-2000')
            return date.toLocaleString('en-us', { month: 'long' });
        }
        $scope.getBirthdaysByMonth = function (monthIndex) {
            return $scope.birthdays.filter(function (item) {
                return item.date.slice(0, 2) == monthIndex;
            });
        }
        $scope.sort = function (sortBy) {
            $scope.birthdayMonths.sort(function (a, b) {
                return sortBy == 'birthday' ? b.birthdays.length - a.birthdays.length : a.month - b.month;
            });
        }
        activate();
    }
}());