(function(){
'use strict';

angular.module('Data')
.component('menuCategories', {
	templateUrl: 'src/components/templates/categories-component.html',
	bindings: {
		items: '<'
	}
});



})();