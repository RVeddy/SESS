'use strict';

angular.module('sessApp')
    .controller('LoginCtrl', function($scope, $http, UserFactory, $location) {
        $scope.signIn = function(e) {
            e.preventDefault();
            var data = {
                username: $scope.username,
                password: $scope.password
            };
            $http.post("/api/login", data).success(function(response, status) {
                $http.get("/api/users").success(function(result, status){
                    UserFactory.setUsers(result);
                    $location.url('/users')

                });
            })

        };

    });
