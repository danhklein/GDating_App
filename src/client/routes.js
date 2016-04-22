
angular
    .module('myApp')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './client/partials/home.html',
            controller: 'allMembersCtrl',
            controllerAs: 'vm'
        })
        .when('/members', {
            templateUrl: './client/partials/members.html',
            controller: 'allMembersCtrl',
            controllerAs: 'vm'
        })
        .when('/register', {
            templateUrl: './client/partials/register.html',
            controller: 'RegisterCtrl',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: './client/partials/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm'
        })


}




// https://unsplash.com/photos/Sd8O2SgKDJA