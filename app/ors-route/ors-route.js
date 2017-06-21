import 'angular-ui-router';
const app = angular.module('ors-route', ['ui.router']);

// html-loader charge le fichier html dans une variable js (un symbole)
import accueilUrl from './tmpl/accueil.html';
import produitsUrl from './tmpl/produits.html';
import servicesUrl from './tmpl/services.html';
import contactUrl from './tmpl/contact.html';

import {ProductCtrl} from './ProductCtrl.js';

app.config(function ($locationProvider, $urlRouterProvider, $stateProvider) {

	$locationProvider
		.html5Mode(true);


	const accueilState = {
		name: 'accueil',
		url: '/',
		template: accueilUrl
	}

	const produitsState = {
		name: 'produits',
		url: '/produits',
		template: produitsUrl,
		controller: ProductCtrl,
		controllerAs: '$ctrl'
	}

	const servicesState = {
		name: 'services',
		url: '/services',
		template: servicesUrl
	}

	const contactState = {
		name: 'contact',
		url: '/contact',
		template: contactUrl
	}



	$stateProvider.state(accueilState);
	$stateProvider.state(produitsState);
	$stateProvider.state(servicesState);
	$stateProvider.state(contactState);

	$urlRouterProvider.otherwise('/');
});
