/**
 * Created by danielklein on 4/17/16.
 */

angular
    .module('myApp')
    .service('memberDataService', ['$rootScope', 'crudService', function($rootScope, crudService) {
    
    return {
        getAllMembers: function () {
            return crudService.getAll('https://galvanize-student-apis.herokuapp.com/gdating/members')
                .then(function(members){
                    console.log(members);
                    return members;
                });
        },
        addMember: function(payload) {
            crudService.addOne('https://galvanize-student-apis.herokuapp.com/gdating/members', payload)
                .then(function(member) {
                    return member;
                })
                .catch(function (err) {
                    return err;
                });
        },
        deleteMember: function(payload) {

            crudService.deleteOne('https://galvanize-student-apis.herokuapp.com/gdating/members', payload)
                .then(function(member) {

                    return member;
                });
        },
        editMember: function(id, payload) {
            crudService.editOne('https://galvanize-student-apis.herokuapp.com/gdating/members', payload)
                .then(function(member) {
                    return member;
                })
                .catch(function (err) {
                    return err;
                });
        },
    };
}]);