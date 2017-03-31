(function(){
  'use strict';
  var app = angular.module('app');
  app.factory('userService', UserService)
  UserService.$inject = ['$http'];
  function UserService($http){
    return {
      getUsers: getUsers
    }
    function getUsers(){
     return new Promise((resolve, reject)=>{
        $http.get('https://api.github.com/users')
        .then((response) => resolve(response.data), (error) => reject(error));
      })
    }
  }
})();