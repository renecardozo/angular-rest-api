'use strict';
describe('Component: repoComponent', function () {
  beforeEach(module('repoComponent'));
 
  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<repo-component></repo-component>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
 
  it('should render the text', function() {
    var h1 = element.find('h1');
    expect(h1.text()).toBe('Unit Testing AngularJS 1.5');
  });
 
});