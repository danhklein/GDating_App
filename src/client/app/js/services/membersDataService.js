/**
 * Created by danielklein on 4/17/16.
 */

angular
    .module('myApp')
    .service('memberDataService', ['$rootScope', 'crudService', function($rootScope, crudService) {
    var url = 'https://galvanize-student-apis.herokuapp.com/gdating/members?limit=10'
    return {
        getAllMembers: function () {
            return crudService.getAll(url)
                .then(function(members){
                    console.log(members);
                    return members;
                });
        },
        addMember: function(payload) {
            crudService.addOne(url, payload)
                .then(function(member) {
                    return member;
                })
                .catch(function (err) {
                    return err;
                });
        },
        deleteMember: function(payload) {

            crudService.deleteOne(url, payload)
                .then(function(member) {

                    return member;
                });
        },
        editMember: function(id, payload) {
            crudService.editOne(url, payload)
                .then(function(member) {
                    return member;
                })
                .catch(function (err) {
                    return err;
                });
        },
    };
}]);