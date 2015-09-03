"use strict";

describe("cxfatwork api service", function(){

    var cxfatworkService;
    var $rootScope;
    var $scope;
    var $httpBackend;

    beforeEach(function(){
        module('cxfTutorialApp');
        inject(function($injector){
            // Set up the mock http service responses
            $httpBackend = $injector.get('$httpBackend');

            // Get hold of a scope (i.e. the root scope)
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();

            cxfatworkService = $injector.get('CustomerService');

        });
    });

    afterEach(function() {
        // Verifies that all of the requests defined via the expect api were made.
        // If any of the requests were not made, verifyNoOutstandingExpectation
        // throws an exception.
        $httpBackend.verifyNoOutstandingExpectation();

        // Verifies that there are no outstanding requests that need to be flushed.
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("when call customers should return a list of customers", function () {

        $httpBackend.flush();

        $httpBackend.whenGET('http://localhost:9191/cxf/crm/provisioning/v1/customerprovisioning/customers/').respond({
            data : {
                 "total_records": 7,
                 "customers": [
                   {
                     "id": 1,
                     "firstname": "Marco",
                     "lastname": "Maccio",
                     "customerId": "001"
                   },
                   {
                     "id": 2,
                     "firstname": "Julie",
                     "lastname": "Maccio",
                     "customerId": "002"
                   },
                   {
                     "id": 3,
                     "firstname": "Cathy",
                     "lastname": "Maccio",
                     "customerId": "003"
                   },
                   {
                     "id": 4,
                     "firstname": "Marco",
                     "lastname": "Maccio",
                     "customerId": "00001"
                   },
                   {
                     "id": 5,
                     "firstname": "Marco",
                     "lastname": "Maccio",
                     "customerId": "00001"
                   },
                   {
                     "id": 6,
                     "firstname": "Marco",
                     "lastname": "Maccio",
                     "customerId": "1970"
                   },
                   {
                     "id": 7,
                     "firstname": "New User",
                     "lastname": "MacAPP",
                     "customerId": "1197"
                   }
                 ]
               }
        });

        expect(cxfatworkService.query()).toBe(7);
        $httpBackend.flush();


    });


});