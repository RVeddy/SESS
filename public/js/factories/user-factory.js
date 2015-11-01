'use strict';

angular.module('sessApp')
    .factory('UserFactory', function() {
        var users = [];
        return {
            setUsers: function(data) {
                users = data;
            },
            getUsers: function() {
                return users;
            }
        }

    });
