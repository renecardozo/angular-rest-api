(function(){
  'use strict';
  var app = angular.module('app');
  app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state('users', {
      url: '/users',
      component: 'userComponent'
    });
      
    $stateProvider.state('repo', {
      url: '/repos/:owner',
      component: 'repoComponent'
    });

    $urlRouterProvider.otherwise('/users');

  });
})();