import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngHighlight from 'angular-highlightjs'
import {ComponentsModule} from "./components/components.module";
import {AppComponent} from "./app.component";
import {CommonModule} from "./common/common.module";

export const AppModule = angular
    .module('app', [
        ComponentsModule,
        CommonModule,
        uiRouter,
        'hljs'
    ])
    .value('locals', undefined)
    .component('app', AppComponent)
    .name;