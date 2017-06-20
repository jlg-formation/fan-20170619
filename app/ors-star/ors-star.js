(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			template: `<img ng-repeat="i in [1, 2, 3, 4, 5]" 
							src="./ors-star/img/white_star.png"
							alt="Etoile blanche">`
		};
	});

    
})();
