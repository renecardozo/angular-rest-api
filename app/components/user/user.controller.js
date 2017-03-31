(function(){
  'use strict';
  var app = angular.module('app');
  app.controller('userController', UserController);
  UserController.$inject = ['userService', 'Notification'];
  function UserController(userService, Notification){
    var vm = this;
    var users = [];
    vm.$onInit = function(){
      vm.getUsers();
    }
    vm.getUsers = function(){
      userService.getUsers()
      .then(
        (response) => {
          vm.users = response;
          Notification.success('Users Loaded.');
        },
        (error)=> Notification.error({message: 'Users not loaded.', delay: 1000})
      );
    }
  }
})();