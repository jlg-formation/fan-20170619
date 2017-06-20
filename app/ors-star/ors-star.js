(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			template: `<img ng-repeat="i in [1, 2, 3, 4, 5]" 
							ng-src="{{$ctrl.getImage(i)}}"
							alt="Etoile blanche">`,
			controller: function OrsStarCtrl() {
				this.getImage = function (i) {
					if (i > 3) {
						return './ors-star/img/white_star.png';
					}
					return './ors-star/img/yellow_star.png';
				}

			}, 
			controllerAs: '$ctrl'
		};
	});

    

})();
