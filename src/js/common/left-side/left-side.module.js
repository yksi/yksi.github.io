import angular from 'angular'
import {LeftSideComponent} from "./left-side.component";
import {SkillModule} from "./skill/skill.module";

export const LeftSideModule = angular
    .module('leftSide', [
        SkillModule
    ])
    .component('leftSide', LeftSideComponent)
    .name;