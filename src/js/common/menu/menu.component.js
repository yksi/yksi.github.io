import template from './menu.component.pug'

export const MenuComponent = {
    template,
    controller: class {
        constructor($state) {
            this.$state = $state;
        }
    }
};