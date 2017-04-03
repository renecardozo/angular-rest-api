(function(){
  'use strict';
  var app = angular.module('app');
  app.controller('repoController', RepoController);
  RepoController.$inject = ['$stateParams', 'repoService', 'Notification'];
  function RepoController($stateParams, repoService, Notification){
    var vm = this;
    vm.pagination = {page: 0, perPage:0};
    vm.repos = [];
    vm.$onInit = function(){
      vm.pagination.page = 1;
      vm.pagination.perPage = 8;
      vm.loadRepositories($stateParams.owner, vm.pagination.page, vm.pagination.perPage);
    }
    vm.loadRepositories = function(owner, page, perPage){
      repoService.getRepositories(owner, vm.pagination.page, vm.pagination.perPage)
      .then(
        (response) => {
          vm.repos = response;
          Notification.success('Repos Loaded.');
        },
        (error) => Notification.error({message: 'Repos not loaded.', delay: 1000})
      );
    }
    vm.previousPage = function(){
      vm.pagination.page -= 1; 
      if (vm.pagination.page < 1) {
        vm.pagination.page = 1;
      }
      repoService.getRepositories($stateParams.owner, vm.pagination.page, vm.pagination.perPage)
        .then(
          (response) => {
            vm.repos = response;
            Notification.success('Repos Loaded.');
          },
          (error) => Notification.error({message: 'Repos not loaded.', delay: 1000})
        );
    }
    vm.nextPage = function(){
      vm.pagination.page +=1;
      repoService.getRepositories($stateParams.owner, vm.pagination.page, vm.pagination.perPage)
        .then(
          (response) => {
            vm.repos = response;
            Notification.success('Repos Loaded.');
          },
          (error) => Notification.error({message: 'Repos not loaded.', delay: 1000})
        );
    }
  }
})();