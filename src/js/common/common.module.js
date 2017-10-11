import angular from 'angular'

import {MenuModule} from "./menu/menu.module";
import {LeftSideModule} from "./left-side/left-side.module";
import {ProgressBarComponent} from "./helper/progress-bar/progress-bar.component";

export const CommonModule = angular
    .module('common', [
        LeftSideModule,
        MenuModule
    ])
    .component('progressBar', ProgressBarComponent)
    .name;