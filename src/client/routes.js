
angular
    .module('myApp')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/members', {
            templateUrl: './client/partials/members.html',
            controller: 'allMembersCtrl',
            controllerAs: 'vm'
        });
}




// https://unsplash.com/photos/Sd8O2SgKDJA