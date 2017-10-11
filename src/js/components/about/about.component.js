import template from './about.component.pug'

export const AboutComponent = {
    controller: class {
        constructor() {

            this.experience = [
                {
                    title: 'Self Employer',
                    startDate: new Date(2017, 7, 5),
                    endDate: false,
                    description: 'Ruby on Rails development'
                },
                {
                    title: 'Lead Developer, Academy Speaker',
                    startDate: new Date(2017,11, 5),
                    endDate: new Date(2017, 7, 5),
                    description: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
                },
                {
                    title: 'Lead Developer',
                    startDate: new Date(2016, 3, 10),
                    endDate: new Date(2017,10, 11),
                    description: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
                },
                {
                    title: 'PHP Developer',
                    startDate: new Date(2014, 8, 20),
                    endDate: new Date(2016, 3, 10),
                    description: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
                },
            ];
        }
    },
    template
};