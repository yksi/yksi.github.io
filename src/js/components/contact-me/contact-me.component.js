import template from './contact-me.component.pug'

export const ContactMeComponent = {
    template,
    controller ($rootScope, $http) {
        this.$onInit = function () {
            this.email = {
                email: '',
                title: '',
                message: ''
            };

            this.sent = false;
            this.loading = false;
            this.sentSuccess = false;

            $rootScope.background = 'pastel-green';
        };

        this.send = function () {
            if (this.loading) return;

            this.sent = true;
            this.sentSuccess = false;
            if (!this.email.title || !this.email.message) return;

            this.loading = true;
            $http({
                method: 'POST',
                url: 'https://ccd-terminal.herokuapp.com/contact',
                data: this.email
            }).then(
                () => {
                    this.$onInit();
                    this.loading = false;
                    this.sentSuccess = true;
                },
            )
        }
    }
};