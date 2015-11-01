'use strict';

angular.module('sessApp')
    .controller('UserCtrl', function($scope,  UserFactory) {
    	$scope.users = UserFactory.getUsers();

    });
