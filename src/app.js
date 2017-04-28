!function(){"use strict";angular.module("Data",[])}(),function(){"use strict";angular.module("MenuApp",["ui.router","Data"])}(),function(){"use strict";function e(e,t){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"src/templates/home-template.html"}).state("categories",{url:"/categories",templateUrl:"src/templates/categories-template.html",controller:"CategoriesController as categories",resolve:{request:["MenuDataService",function(e){return e.GetAllCategories()}]}}).state("menuItems",{url:"/menu-items/{itemId}",templateUrl:"src/templates/menuItems-template.html",controller:"MenuItemsController as menu",resolve:{request:["$stateParams","MenuDataService",function(e,t){return t.GetItemsForCategory(e.itemId)}]}})}angular.module("MenuApp").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function e(e,t){var r=this;r.GetAllCategories=function(){var r=t({method:"GET",url:e+"/categories.json"});return r},r.GetItemsForCategory=function(r){var n=t({method:"GET",url:e+"/menu_items.json?category="+r});return n}}angular.module("Data").service("MenuDataService",e).constant("ApiBasePath","https://davids-restaurant.herokuapp.com"),e.$inject=["ApiBasePath","$http"]}(),function(){"use strict";function e(e,t){var r=this;r.items=t.data,console.log(r.items)}angular.module("Data").controller("CategoriesController",e),e.$inject=["MenuDataService","request"]}(),function(){"use strict";function e(e,t){var r=this;r.items=t.data,console.log(r.items)}angular.module("Data").controller("MenuItemsController",e),e.$inject=["MenuDataService","request"]}(),function(){"use strict";angular.module("Data").component("menuCategories",{templateUrl:"src/components/templates/categories-component.html",bindings:{items:"<"}})}(),function(){"use strict";angular.module("MenuApp").component("menuItems",{templateUrl:"src/components/templates/menuItems-component.html",bindings:{items:"<"}})}();