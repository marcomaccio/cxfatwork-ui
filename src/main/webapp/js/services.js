'use strict'

/* Services */

var cxfTutorialServices = angular.module('cxfTutorialServices',['ngResource']);

cxfTutorialServices.factory('CustomerService', ['$resource',
		function($resource) {

			return $resource ('http://localhost:9191/cxf/crm/provisioning/v1/customerprovisioning/customers/:id', {}, {
				query: 	{method:'GET' , params:{id:'@customerId'} , isArray: false},
				update: {method:'PUT' , params:{id:'@customerId'}},
				save:   {method:'POST', params:{id:'@customerId'}},
				remove: {method:'DEL' , params:{id:'@customerId'}}
			});
		}]);


var popupService = angular.module('popupService',[]);

popupService.service('popupService', function($window){
    			this.showPopup=function(message){
        		return $window.confirm(message);
			}
		});
	