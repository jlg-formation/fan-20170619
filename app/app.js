import 'angular';

import './ors-star/ors-star.js';
import 'angular/angular-csp.css';
import './style.css';

var app = angular.module('main', ['ors-star']);

app.directive('orsHeader', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpl/ors-header.html'
    };
});

app.directive('orsBody', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpl/ors-body.html'
    };
});

app.directive('orsFooter', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpl/ors-footer.html'
    };
});
