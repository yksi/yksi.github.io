import angular from 'angular'
import {SkillComponent} from "./skill.component";

export const SkillModule = angular
    .module('skill', [])
    .component('skill', SkillComponent)
    .name;