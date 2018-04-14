import template from './about.component.pug'

export const AboutComponent = {
    controller: class {
        constructor() {
            this.experience = [
                {
                    title: 'Lead Frontend Developer',
                    startDate: new Date(2017, 11, 5),
                    endDate: false,
                    tags: ['AngularJs', 'Webpack', 'Docker', 'SCRUM'],
                },
                {
                    title: 'Self Employer',
                    startDate: new Date(2017, 7, 5),
                    endDate: new Date(2017, 11, 5),
                    tags: ['Ruby on Rails', 'ES6', 'PostgreSQL', 'MySQL', 'UML'],
                },
                {
                    title: 'Lead Developer, Academy Speaker',
                    startDate: new Date(2017,11, 5),
                    endDate: new Date(2017, 7, 5),
                    tags: ['Zend Framework', 'Laravel', 'NodeJS', 'Golang', 'Docker', 'AngularJS'],
                },
                {
                    title: 'Lead Developer',
                    startDate: new Date(2016, 3, 10),
                    endDate: new Date(2017,10, 11),
                    tags: ['Zend Framework', 'SCRUM', 'CI', 'Deployment'],
                },
                {
                    title: 'PHP Developer',
                    startDate: new Date(2014, 8, 20),
                    endDate: new Date(2016, 3, 10),
                    tags: ['Zend Framework', 'PhantomJS'],
                },
                {
                    title: 'Ruby on Rails Developer',
                    startDate: new Date(2013, 2, 1),
                    endDate: new Date(2013, 12, 10),
                    tags: ['Ruby on Rails', 'Bootstrap', 'jQuery', 'Deployment'],
                },
            ];

            this.educations = [
                {
                    establishment: 'Ternopil Technical University',
                    degree: 'Master',
                    qualification: 'Operational and Application Software Analyst',
                    startDate: new Date(2012, 9, 1),
                    endDate: new Date(2016, 6, 30),
                },
                {
                    establishment: 'Ternopil Technical University',
                    degree: 'Bachelor',
                    qualification: 'Expert in software development and testing',
                    startDate: new Date(2016, 9, 1),
                    endDate: new Date(2018, 2, 28),
                },
            ];

            this.fetchTags();
        }

        fetchTags () {
            const tagRelations = {};

            for (const job of this.experience) {
                if (Array.isArray(job.tags)) {
                    for (const tag of job.tags) {
                        if (tagRelations.hasOwnProperty(tag)) {
                            tagRelations[tag]++;
                        } else {
                            tagRelations[tag] = 1;
                        }
                    }
                }
            }

            this.tags = Object.keys(tagRelations).sort().reduce((key, value) => {key[value] = tagRelations[value]; return key;}, {});
        }
    },
    template
};