

(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('RegisterCtrl', RegisterCtrl);
    RegisterCtrl.$inject = ['$rootScope',  '$location', 'authService'];


    function RegisterCtrl ($rootScope,  $location, authService) {
        var vm = this;

        vm.user = {};
        vm.register = function() {
            console.log(vm.user);
            vm.user.address.geo = {
                lat : (Math.random() * 90),
                lng : (Math.random() * 180)
            };

            vm.user.slug = vm.user.username;
          
            authService.register(vm.user)
                .then(function (user) {
                    authService.setUserInfo(user);
                    $location.path('/members');
                    $rootScope.currentUser = authService.getUserInfo();

                })
                .catch(function(err){

                    console.log(err); return err;
                });
        };

    };


})();
