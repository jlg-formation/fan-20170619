(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			scope: {
				n: '=note'
			},
			// template: `<img ng-repeat="i in [1, 2, 3, 4, 5]" 
			// 				ng-src="{{$ctrl.getImage(i)}}"
			// 				alt="Etoile blanche">`,

			controller: function OrsStarCtrl($scope, $element, $attrs) {
				'ngInject';
				// this.getImage = function (i) {
				// 	if (i > 3) {
				// 		return './ors-star/img/white_star.png';
				// 	}
				// 	return './ors-star/img/yellow_star.png';
				// }
				$scope.$watch('n', function () {
					let note = $scope.n;
					note = (note === undefined) ? 3 : note;
					note = Number(note);
					note = (isNaN(note)) ? 3 : note;

					let html = '';
					for (var i = 0; i < note; i++) {
						html += '<img src="./ors-star/img/yellow_star.png">';
					}
					for (var i = note; i < 5; i++) {
						html += '<img src="./ors-star/img/white_star.png">';
					}

					$element.html(html);
					console.log('$element', $element);
					console.log('$element.attr(note)', $element.attr('note'));
					console.log('$attrs', $attrs);
					console.log('$scope', $scope);
				});
			},
			controllerAs: '$ctrl'
		};
	});



})();

