'use strict';

/* Controller Definition */

var cxfTutorialControllers = angular.module('cxfTutorialControllers',[]);

cxfTutorialControllers.controller('CustomersListController', 

  function($scope, $state, popupService, $window, CustomerService){

    $scope.customers=CustomerService.query();

    $scope.deleteCustomer=function(customer){
        if(popupService.showPopup('Really do you want to delete this customer ?')){
            CustomerService.$remove(function(){
                $window.location.href='';
            });
        }
    }

});

cxfTutorialControllers.controller('CustomerRetrieveController', 
  function($scope, $stateParams, CustomerService) {
    $scope.customer = CustomerService.get({ id: $stateParams.customerId }); //Get a single customer. Issues a GET to .../customers/:id
});

/* CustomerUpdateController */

cxfTutorialControllers.controller('CustomerUpdateController', 
    function($scope, $stateParams, CustomerService) {
      $scope.updateCustomer =function () { //Update the edited customer. Issues a PUT to .../customers/:id
    		$scope.customer.$update(function () {
    			$state.go('customers');		
    		});	
    	};
    	
    	$scope.loadCustomer = function() { //Issues a GET request to .../customers/:id to get a customer to update
        	$scope.customer = CustomerService.get({ id: $stateParams.customerId });
      };

      $scope.loadCustomer(); // Load a Customer which can be edited on UI
});

/* CustomerCreateController */

cxfTutorialControllers.controller('CustomerCreateController', 
  function($scope, $state, $stateParams, CustomerService) {
    $scope.customer = new Customer();  //create new Customer instance. Properties will be set via ng-model on UI

    $scope.addCustomer = function() { //create a new Customer. Issues a POST to .../customers
      $scope.customer.$save(function() {
        $state.go('customers'); // on success go back to home i.e. customers state.
      });
    };
});