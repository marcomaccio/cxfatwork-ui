"use strict";

ddescribe("cxfatwork api service", function(){
    var cxfatworkService, httpBackend;

    beforeEach(module("cxfTutorialApp"));

    beforeEach(module(function($provide) {
      $provide.value("ngResource", cxfatworkService);
    }));

    beforeEach(inject(function (_cxfTutorialServices_, _$httpBackend_) {
        cxfatworkService = _cxfTutorialServices_;
        httpBackend = _$httpBackend_;
    }));

    iit('should show a list of 7 "customers"', function(){
        $httpBackend.expect('GET', '/http://localhost:9191/cxf/crm/provisioning/v1/customerprovisioning/customers/').respond(200, 'success');
        cxfatworkService.query();
        $httpBackend.flush();
        httpBackend.whenGET('http://localhost:9191/cxf/crm/provisioning/v1/customerprovisioning/customers/').respond({
            data : {
                 "total_records": 1,
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
                     "id": 651,
                     "firstname": "Marco",
                     "lastname": "Maccio",
                     "customerId": "00001"
                   },
                   {
                     "id": 652,
                     "firstname": "Marco",
                     "lastname": "Maccio",
                     "customerId": "00001"
                   },
                   {
                     "id": 701,
                     "firstname": "Marco",
                     "lastname": "Maccio",
                     "customerId": "1970"
                   },
                   {
                     "id": 702,
                     "firstname": "New User",
                     "lastname": "MacAPP",
                     "customerId": "1197"
                   }
                 ]
               }
        });

        cxfatworkService.query();


        httpBackend.flush();
        expect(cxfatworkService.customers.lenght).toBe(7);
    });
});