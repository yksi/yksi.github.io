import angular from 'angular';
import uiRouter from 'angular-ui-router'

import {AboutComponent} from "./about.component";

export const AboutModule = angular
    .module('about', [uiRouter])
    .component('about', AboutComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state({
                name: 'about',
                url: '/about',
                component: 'about'
            });

        $urlRouterProvider.when('', '/about');
    })
    .name;