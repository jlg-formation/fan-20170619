(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			// template: `<img ng-repeat="i in [1, 2, 3, 4, 5]" 
			// 				ng-src="{{$ctrl.getImage(i)}}"
			// 				alt="Etoile blanche">`,

			controller: function OrsStarCtrl($element) {
				'ngInject';
				// this.getImage = function (i) {
				// 	if (i > 3) {
				// 		return './ors-star/img/white_star.png';
				// 	}
				// 	return './ors-star/img/yellow_star.png';
				// }
				let html = '';
				for (var i = 0; i < 3; i++) {
					html += '<img src="./ors-star/img/yellow_star.png">';
				}
				for (var i = 3; i < 5; i++) {
					html += '<img src="./ors-star/img/white_star.png">';
				}

				$element.html(html);
			}, 
			controllerAs: '$ctrl'
		};
	});

    

})();
