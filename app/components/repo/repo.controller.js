(function(){
  'use strict';
  var app = angular.module('app');
  app.controller('repoController', RepoController);
  RepoController.$inject = ['$stateParams', 'repoService', 'Notification'];
  function RepoController($stateParams, repoService, Notification){
    var vm = this;
    vm.repos = [];
    vm.$onInit = function(){
      vm.loadRepositories($stateParams.owner);
    }
    vm.loadRepositories = function(owner){
      repoService.getRepositories(owner)
      .then(
        (response) => {
          vm.repos = response;
          Notification.success('Repos Loaded.');
        },
        (error) => Notification.error({message: 'Users not loaded.', delay: 1000})
      );
    }
  }
})();