(function (){
'use strict'

angular.module('MenuApp')
.component('loading', {
	templateUrl: 'src/components/templates/loading-component.html',
	controller: loadingController,
});

loadingController.$inject = ['$rootScope'];
function loadingController($rootScope){
	var $ctrl = this;
	var cancellers = [];
	

	$ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      $ctrl.showLoading = true;
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      $ctrl.showLoading = false;
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      $ctrl.showLoading = false;
    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item();
    });
  };

}

})();