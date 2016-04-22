
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
        .when('/logout', {
            restricted: false,
            preventLoggedIn: false,
            resolve: {
                test: function(authService, $rootScope, $location) {
                    authService.logout();
                    $rootScope.currentUser = authService.getUserInfo();
                    $location.path('/login');
                }
            }
        })
        .when('/login', {
            templateUrl: './client/partials/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm'
        })
}

angular
    .module('myApp')
    .run(runBlock);

runBlock.$inject=['$rootScope', '$location', '$window']

function runBlock($rootScope, $location, $window) {
    $rootScope
        .$on('$routeChangeStart',
        function(event, next, current) {
            // if route us restricted and no token is present
            if(next.restricted && !$window.localStorage.getItem('token')) {
                $location.path('/login');
            }
            // if token and prevent logging in is true
            if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
                $location.path('/');
            }

    })
}


// https://unsplash.com/photos/Sd8O2SgKDJA