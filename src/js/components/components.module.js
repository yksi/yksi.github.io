import angular from 'angular';

import {AboutModule} from "./about/about.module";
import {ContactMeModule} from "./contact-me/contact-me.module";
import {ExperimentsModule} from "./experiments/experiments.module";

export const ComponentsModule = angular.module(
    'components', [
        AboutModule,
        ContactMeModule,
        ExperimentsModule
    ]
).name;