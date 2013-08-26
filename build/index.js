/*globals angular*/

var mod = angular.module('users:controllers', []);


// users/controllers.js

mod.controller('users:controllers:get', function ($scope) {
  $scope.foobar = 'foobar';
});


// users/index.js

angular.module('users:index', [
  'users:controllers'
]);


// index.js

angular.module('app', [
  'users:index'
]);
