(function(){
  'use strict';
  var app = angular.module('app');
  app.component('appComponent', {
    template: `
      <div ng-cloak>
        <md-toolbar class="md-warn">
           <div class="md-toolbar-tools">
              <h2 class="md-flex">GitHub Users</h2>
              <md-button ui-sref="users" class="md-raised" aria-label="Go Users">
                Go Users
              </md-button>
           </div>
        </md-toolbar>
        <md-content flex layout-padding>
          <!--<a ui-sref="users">users</a>
          <a ui-sref="repo">repo</a> -->
          <div ui-view></div>
        </md-content>
      </div>
    `,
    controller: 'appController'
  })
})();