import angular from 'angular';
import uiRouter from 'angular-ui-router'
import {ContactMeComponent} from "./contact-me.component";

export const ContactMeModule = angular
    .module('contactMe', [uiRouter])
    .component('contactMe', ContactMeComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state({
                name: 'contact',
                url: '/contact',
                component: 'contactMe'
            });
    })
    .name;