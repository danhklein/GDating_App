
angular
    .module('myApp')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/members', {
            templateUrl: 'partials/members.html',
            // controller: 'MembersCtrl',
        });
}

// angular
//     .module('myApp')
//     .config(config);
//
// function config($routeProvider) {
//     $routeProvider
//         .when('/avengers', {
//             templateUrl: 'avengers.html',
//             controller: 'Avengers',
//             controllerAs: 'vm'
//         });
// }
//
//
// app.controller('myController', ['$scope', function($scope) {
//     $scope.greeting = "Hello World!";
// }]);


// https://unsplash.com/photos/Sd8O2SgKDJA