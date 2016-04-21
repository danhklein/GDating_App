
(function () {

    'use strict';

angular
    .module('myApp')
    .controller('allMembersCtrl', MembersCtrl);
    MembersCtrl.$inject = ['$scope', '$window', MemberService];


    $scope.getAllMembers= function () {
        memberDataService.getAllMembers()
            .then(function(members) {
                $scope.allMembers = members.data.data;
            });
    }


})();