'use strict';
describe('Component: repoComponent', function () {
  // beforeEach(module('app'));

  // beforeEach(module('repoComponent'));
  beforeEach(function(){
    module('app');
  })
  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile, $componentController){
    scope = $rootScope.$new();
    controller = $componentController('repoComponent', {$scope: scope});
  }));
  it('should render the text', function() {
    // var h1 = element.find('h1');
    // console.log(element);
    // expect(true).toBe(true);
  });
 
});