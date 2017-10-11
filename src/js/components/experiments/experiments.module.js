import angular from 'angular';
import uiRouter from 'angular-ui-router'
import {ExperimentsComponent} from "./experiments.component";
import {MonoupperModule} from "./monoupper/monoupper.module";

export const ExperimentsModule = angular
    .module('experiments', [uiRouter, MonoupperModule])
    .component('experiments', ExperimentsComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state({
                name: 'experiments',
                url: '/experiments',
                component: 'experiments'
            });
    })
    .name;