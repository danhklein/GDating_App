/**
 * Created by danielklein on 4/21/16.
 */
angular
    .module('myApp')
    .service('authService', authService);


    authService.$inject = ['$http', '$window'];

function authService ($http, $window) {
    var url = "https://galvanize-student-apis.herokuapp.com/gdating/auth/";
    var user = {};
    return {
        login: function(user) {
            return $http.post(url + 'login', user);
        },
        logout: function(user) {
            user = null;
            $window.localStorage.clear();
        },
        register: function(user) {
            return $http.post(url + 'register', user);
        },
        setUserInfo: function(userData) {
            console.log(userData.data.data.user)
            $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
            $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
        },
        getUserInfo: function(userData) {
            return $window.localStorage.getItem('user');
        }

    };
};