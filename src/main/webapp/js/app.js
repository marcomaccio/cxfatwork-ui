'use strict';

/* App Module */

var cxfTutorialApp = angular.module('cxfTutorialApp', [
    'ui.router', 
    'ngResource',
    'cxfTutorialControllers',
    'cxfTutorialServices', 
    'popupService']);

//State Management
cxfTutorialApp.config(function($stateProvider){
        $stateProvider.state('customers', {         // state for showing all customers
            url: '/customers',
            templateUrl: 'partials/customers.html',
            controller: 'CustomersListController'
        }).state('viewCustomer', {                  // state for showing single customer
            url: '/customers/:id',
            templateUrl: 'partials/customer-view.html',
            controller: 'CustomerRetrieveController'
        }).state('newCustomer', {                  // state for creating a new customer
            url: '/customers/',
            templateUrl: 'partials/customer-add.html',
            controller: 'CustomerCreateController'
        }).state('editCustomer', {                  // state for updatinging a customer
            url: '/customers/:id',
            templateUrl: 'partials/customer-edit.html',
            controller: 'CustomerUpdateController'
        });

}).run(function($state){
   $state.go('customers');  //make a transition to customers state when app starts
});