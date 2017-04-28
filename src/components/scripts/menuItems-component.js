(function (){
'use strict';

angular.module('MenuApp')
.component('menuItems',{
	templateUrl: 'src/components/templates/menuItems-component.html',
	bindings: {
		items: '<'
	}
});

})();