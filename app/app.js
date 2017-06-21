import 'angular';

import './ors-star/ors-star.js';
import './ors-route/ors-route.js';
import 'angular/angular-csp.css';
import './style.scss';

const app = angular.module('main', ['ors-star', 'ors-route']);

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
