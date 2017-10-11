import angular from 'angular'
import {MenuComponent} from "./menu.component";

export const MenuModule = angular
    .module('menu', [])
    .component('menu', MenuComponent)
    .name;