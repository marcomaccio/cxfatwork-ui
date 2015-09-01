'use strict';

/* jasmine specs for controllers go here */
describe('cxfTutorialControllers', function(){

    beforeEach(function(){
       this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
       });
    });

	beforeEach(module('cxfTutorialApp'));
	beforeEach(module('cxfTutorialServices'));

  	it('should create "customers" with 2 customer', inject(function($controller) {
    	var scope = {},
        ctrl = $controller('CustomersListController', {$scope:scope});

    expect(scope.customers.length).toBe(2);
  	});

});