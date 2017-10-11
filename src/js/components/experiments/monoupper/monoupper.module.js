import angular from 'angular';
import uiRouter from 'angular-ui-router'
import {MonouppperComponent} from "./monoupper.component";

export const MonoupperModule = angular
    .module('monouppper', [uiRouter])
    .component('monoupperExperiment', MonouppperComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state({
                name: 'monoupperExperiment',
                url: '/experiments/monoupper',
                component: 'monoupperExperiment'
            });
    })
    .name;