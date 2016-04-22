

(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('LoginCtrl', LoginCtrl);
    LoginCtrl.$inject = ['$rootScope',  '$location', 'authService'];


    function LoginCtrl ($rootScope,  $location, authService) {
        var vm = this;

        vm.user = {};
        
        vm.login = function() {

            authService.login(vm.user)
                .then(function (user) {
                    console.log('vm.user', vm.user);
                    authService.setUserInfo(user);
                    $location.path('/members');
                    $rootScope.currentUser = authService.getUserInfo();

                })
                .catch(function(err){
                    console.log(err); return err;
                });
        };

    };

})();g
