//@ts-check
(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('BirthdayFactory', BirthdayFactory);

	BirthdayFactory.$inject=['_'];
    function BirthdayFactory(_) {
        var birthdays = [
            { id: 1, name: 'test5', date: '12-12-1212' },
            { id: 2, name: 'test3', date: '02-12-1212' },
            { id: 3, name: 'test3', date: '02-12-1212' },
            { id: 4, name: 'test2', date: '11-12-1212' },
            { id: 5, name: 'test6', date: '12-12-1212' },
            { id: 6, name: 'test5', date: '08-12-1212' },
            { id: 7, name: 'test4', date: '04-12-1212' },
            { id: 8, name: 'test3', date: '02-12-1212' },
            { id: 9, name: 'test2', date: '01-12-1212' },
        ];
        var service = {
            get: getBirthdays,
            delete: removeBirthday,
            save: saveBirthday
        };

        return service;

        function getBirthdays(id) {
            return id !== undefined ? _.find(birthdays, function (item) { return item.id == id }) : birthdays;
        }
        function removeBirthday(birthday) {
            var birthdayToDelete = _.find(birthdays, function (item) {
                return item.id == birthday.id;
            });
            if (birthdayToDelete) {
                birthdays.splice(birthdays.indexOf(birthdayToDelete), 1);
            }
        }
        function saveBirthday(birthday) {
            if (birthday.id) {
                var birthdayToUpdate = _.find(birthdays, function (item) {
                    return item.id == birthday.id;
                });
                if (birthdayToUpdate) {
                    _.merge(birthdayToUpdate, birthday);
                }
            } else {
                var lastBirthday = birthdays.slice(-1)[0];
                birthday.id = lastBirthday ? lastBirthday.id + 1 : 1;
                birthdays.push(birthday);
            }
        }
    }
}());