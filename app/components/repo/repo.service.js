(function(){
  'use strict';
  var app = angular.module('app');
  app.factory('repoService', RepoService)
  RepoService.$inject = ['$http'];
  function RepoService($http){
    return {
      getRepositories: getRepositories
    }
    function getRepositories(owner, page, perPage){
     return new Promise((resolve, reject)=>{
        $http.get('https://api.github.com/users/'+owner+'/repos?page='+page.toString()+'&per_page='+perPage.toString())
        .then((response) => resolve(response.data), (error) => reject(error));
      })
    }
  }
})();
