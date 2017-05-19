//@ts-check

'use strict';

describe('myApp.birthday module', function () {

    beforeEach(function () {
        module('myApp');
        module('myApp.birthday');
    });

    describe('birthday controller', function () {

        it('should be defined', inject(function ($controller, $rootScope) {
            //spec body
            var scope = $rootScope.$new();
            var BirthdayController = $controller('BirthdayController', { $scope: scope });
            expect(BirthdayController).toBeDefined();
        }));
        it('should not save if form is invalid', inject(function ($controller, $rootScope) {
            //spec body
            var scope = $rootScope.$new();
            var BirthdayController = $controller('BirthdayController', { $scope: scope });
            scope.saveBirthday({ $valid: false });
            expect(scope.birthday).not.toBe(scope.copy);
        }));

        it('should be create new birthday and nativate to list', inject(function ($controller, $rootScope, $location) {
            //spec body
            var scope = $rootScope.$new();
            var birthday = { id: 1 };
            var BirthdayController = $controller('BirthdayController', {
                $scope: scope,
                $location: $location,
                $routeParams: { id: 1 },
                BirthdayFactory: {
                    get: function () {
                        return birthday;
                    },
                    save: function () {
                        birthday.name = 'test'
                    }
                }
            });
            spyOn($location, 'path');
            scope.saveBirthday({ $valid: true });

            expect(scope.birthday.name).toBeDefined('test');
            expect($location.path).toHaveBeenCalledWith('/');
        }));
        it('should be get specific birthday', inject(function ($controller, $rootScope) {
            //spec body
            var scope = $rootScope.$new();
            var BirthdayController = $controller('BirthdayController',
                {
                    $scope: scope,
                    $routeParams: { id: 1 },
                    BirthdayFactory: {
                        get: function () {
                            return { id: 1 }
                        }
                    }
                });
            expect(scope.birthday.id).toBe(1);
        }));
        it('should validate birthday', inject(function ($controller, $rootScope) {
            //spec body
            var scope = $rootScope.$new();
            var BirthdayController = $controller('BirthdayController', { $scope: scope });
            expect(scope.validateDate('', '12-12-2000')).toBe(true);
            expect(scope.validateDate('', '12-12-2200')).toBe(false);
            expect(scope.validateDate('', '13-12-1988')).toBe(false);
            expect(scope.validateDate('', '01-12-0000')).toBe(true);
            expect(scope.validateDate('', '01-00-1988')).toBe(false);
            expect(scope.validateDate('', '00-10-1988')).toBe(false);
        }));
    });
});