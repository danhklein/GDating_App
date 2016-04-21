(function() {

    'use strict';

    angular
        .module('myApp')
        .controller('MyCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope', '$window'];

    function MyCtrl($scope, $window) {
        $scope.greeting = "Hello World!";

    }

})();