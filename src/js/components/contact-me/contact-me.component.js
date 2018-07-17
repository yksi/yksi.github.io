import template from './contact-me.component.pug'

export const ContactMeComponent = {
    template,
    controller ($http) {
        this.$onInit = function () {
            this.email = {
                email: '',
                title: '',
                message: ''
            };

            this.sent = false;
            this.sentSuccess = false;
        };

        this.send = function () {
            this.sent = true;
            if (!this.email.title || !this.email.message) return;

            $http({
                method: 'POST',
                url: 'https://ccd-terminal.herokuapp.com/contact',
                data: this.email
            }).then(
                () => {
                    this.$onInit();
                    this.sentSuccess = true;
                },
            )
        }
    }
};