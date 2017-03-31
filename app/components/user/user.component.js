(function(){
  'use strict';
  var app = angular.module('app');
  app.component('userComponent', {
    templateUrl: './components/user/user.html',
    controller: 'userController'
  });
})();