(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.run(function ($rootScope) {
		'ngInject';
		$rootScope.coucou = function () {
			console.log('coucou !');
		};
	});

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			scope: {
				n: '<?note',
				verb: '&action'
			},

			controller: function OrsStarCtrl($scope, $element, $attrs, $compile) {
				'ngInject';

				$scope.update = (n) => {
					// console.log('update : ', n);
					$scope.n = n;
					$scope.verb();
				}

				$scope.$watch('n', function () {
					// console.log('watch', arguments);
					let note = $scope.n;
					note = (note === undefined) ? 3 : note;
					note = Number(note);
					note = (isNaN(note)) ? 3 : note;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					let html = '';
					for (var i = 0; i < note; i++) {
						html += '<img ng-click="update(' + (i + 1) + ')" src="./ors-star/img/yellow_star.png">';
					}
					for (var i = note; i < 5; i++) {
						html += `<img ng-click="update(${i + 1})" src="./ors-star/img/white_star.png">`;
					}

					$element.html(html);
					// console.log('$element', $element);
					// console.log('$element.attr(note)', $element.attr('note'));
					// console.log('$attrs', $attrs);
					// console.log('$scope', $scope);
					$compile($element.contents())($scope);
				});
			},
			controllerAs: '$ctrl'
		};
	});



})();

