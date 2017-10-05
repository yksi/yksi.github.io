import angular from "angular"
import "angular-route"

import IndexController from './controllers/index'

const app = angular.module('application', ['ngRoute']);

/**
 * Router rules
 */
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: `${window.location.pathname}pages/index.html`,
        controller: 'IndexController'
    }).otherwise({
        templateUrl: `${window.location.pathname}pages/not_found.html`
    });
});

app.controller('IndexController', IndexController);



