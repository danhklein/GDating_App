
(function () {

    'use strict';

angular
    .module('myApp')
    .controller('allMembersCtrl', allMembersCtrl);
    allMembersCtrl.$inject = [ 'memberDataService'];


     function allMembersCtrl (memberDataService) {
         var vm = this;
        memberDataService.getAllMembers()
            .then(function(members) {
                /* jshint validthis: true */
                console.log('members', members.data.data)
                vm.allMembers = members.data.data;
                console.log('vm.allMembers');

            });
    }


})();