import PropTypes from 'prop-types';

export const raz = {
    basics: {
        name: 'Mehraz Ali',
        label: 'Developer, Technologist, and Maker',
        picture: './profile.png',
        email: 'mehraz.ali@live.com',
        phone: '1 (404) 889-6729',
        website: 'http://mehrazali.com',
        summary: `
        You can just call me Raz. My mission is ambitious, but simple -- I aim to rid the world of 💩 software. 
        I am guided by 3 principles -- great products must be both delightful to use and delightful to build, complexity must be killed with fire, and pragmatism trumps idealism,
        As a software developer, I seek out interesting technological problems to solve, and work to implement the most simple, yet elegant solutions for them.
        As a consultant, I work to enable teams to achieve success through presentation, coaching, and demonstration, while balancing the needs of the delivery team with the needs of business.
        `,
        location: {
            address: '4591 Sims Ct',
            postalCode: '30084',
            city: 'Tucker',
            countryCode: 'USA',
            region: 'Georgia',
        },
        profiles: [
            {
                network: 'GitHub',
                username: 'fakeplasticdroid',
                url: 'https://www.github.com.com/fakeplasticdroid',
            },
            {
                network: 'Twitter',
                username: 'fakeplasticdroid',
                url: 'https://twitter.com/fakeplasticdroid',
            },
        ],
    },
    work: [
        {
            company: 'Kinexys',
            position: 'CXO',
            website: 'http://kinexys.com',
            startDate: '2017-01-01',
            summary: 'This is my company. I built this.',
            highlights: [
                'Started the company',
                'Took Shotcaller from inception to production',
                'Published Shotcaller to Apple App Store and Google Play Store',
                'Social Media App',
                'iOS',
                'Android',
                'Mobile Web',
                'OAuth 2.0',
                'PostGIS',
                'ReactNative',
                'Heroku',
                'Ruby on Rails',
                'AWS',
                'Phonegap (Legacy)',
                'KnockoutJs (Legacy)',
            ],
        },
        {
            company: 'Business Development/Analytics Company in Cincinnati, OH',
            position: 'Sr. Software Engineer',
            startDate: '2017-10-01',
            summary: 'Building a platform for data-driven business insights/analytics',
            highlights: [
                'Greenfield',
                'Stream lead',
                'Code-zero to prod',
                'Production Support',
                'Microservices',
                'Pivotal Cloud Foundry',
                'Distributed Team',
                'Feature Toggles',
                'CLI development (Commander)',
                'Angular2/4/6/7',
                'Rxjs / NgRx',
                'Java',
                'Spring Boot',
                'Spring CloudStream',
                'Spring Batch',
                'RabbitMQ',
                'HATEOAS',
            ],
        },
        {
            company: 'Consumer Credit Reporting Agency in Atlanta, GA',
            position: 'Sr. Software Engineer',
            startDate: '2017-06-01',
            endDate: '2017-10-01',
            summary: 'Building a security / authentication challenge application',
            highlights: [
                'Greenfield',
                'Cassandra',
                'Security',
                'Distributed Team',
                'Java',
                'Spring Config Server',
            ],
        },
        {
            company: 'Credit Card and Payment Services Provider in Wilmington, DE',
            position: 'Sr. Software Engineer',
            startDate: '2017-01-01',
            endDate: '2017-06-01',
            summary: 'Building, maintaining, and supporting a core business platform for credit and payment services',
            highlights: [
                'Legacy',
                'Microservices',
                'CQRS/Event Sourcing',
                'Production Support',
                'CLI development (Thor, bash)',
                'Java',
                'Ruby',
                'Golang',
                'Spring Boot',
                'Spring Cloud Dataflow',
                'Kafka',
                'Axon',
                'Distributed Team',
            ],
        },
        {
            company: 'Mortgage Loan and Financial Services Company in Reston, VA',
            position: 'Sr. Developer',
            startDate: '2016-09-01',
            endDate: '2016-12-01',
            summary: 'Coaching five scrum teams on Agile engineering practices',
            highlights: [
                'Greenfield',
                'Legacy',
                'Coaching and Enablement',
                'AWS',
                'Angular',
                'Full-stack',
                'Spring Boot',
                'Trunk-based Development',
                'Test-Driven Development',
                'Testing Practices',
                'Refactoring',
            ],
        },
        {
            company: 'Mortgage Loan and Financial Services Company in Reston, VA',
            position: 'Technical Lead',
            startDate: '2016-06-01',
            endDate: '2016-09-01',
            summary: 'Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.',
            highlights: [
                'Legacy',
                'Data Testing Framework',
                'Legacy System',
                'ETL',
                'Behaviour Driven Development',
            ],
        },
        {
            company: 'Automobile Auction Company in Atlanta, GA',
            position: 'Sr. Software Engineer',
            startDate: '2015-03-01',
            endDate: '2016-06-01',
            summary: 'Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.',
            highlights: [
                'Legacy',
                'Java',
                'ETL',
                'ActiveMQ',
                'Production Support',
                'Tibco ActiveMatrix/EMS',
                'Informatica',
                'Oracle SQL',
                'AS/400',
            ],
        },
        {
            company: 'Cooking Appliances Manufacturer in Columbus, GA',
            position: 'Software Developer',
            startDate: '2014-09-01',
            endDate: '2015-02-01',
            summary: 'Building a mobile app and product recommendation engine',
            highlights: [
                'Greenfield',
                'Mobile',
                'Recommendation Engine',
                'Full-stack',
            ],
        },
        {
            company: 'Human Capital Software Company in Weston, FL',
            position: 'Software Developer',
            startDate: '2014-03-01',
            endDate: '2015-08-01',
            summary: 'Building a Organization Management application',
            highlights: [
                'C#',
                '.NET MVC',
                'KnockoutJs',
                'D3.js',
                'Bootstrap',
                'NUnit',
                'Greenfield',
                'Full-stack',
                'Cucumber',
            ],
        },
        {
            company: 'CineMassive Displays',
            position: 'Software Engineer',
            startDate: '2011-12',
            endDate: '2014-02',
            summary: '',
            highlights: [],
        },
    ],
    volunteer: [
        {
            organization: 'ZipCode Wilmington',
            position: 'Volunteer',
            website: 'https://www.zipcodewilmington.com/',
            startDate: '2017-03',
        },
        {
            organization: 'Digital Youth Founders',
            position: 'Volunteer',
            website: 'http://organization.com/',
        },
        {
            organization: 'Trees Atlanta',
            position: 'Volunteer',
            website: 'http://organization.com/',
            summary: 'Planting new trees to replace ones lost to urban development',
        },
        {
            organization: 'Open Hand',
            position: 'Volunteer',
            website: 'http://organization.com/',
            summary: 'Delivering food and groceries to people with disabilities and chronic ilnesses.',
            highlights: ['1,000 pounds of food donations', 'Event of the Century'],
        },
    ],
    education: [
        {
            institution: 'Georgia State University',
            area: 'Computer Science',
            studyType: 'M.Sc. in Computer Science (incomplete)',
            startDate: '2005-08',
            endDate: '2006-01',
            gpa: '4.30',
        },
        {
            institution: 'University of Georgia',
            area: 'Marketing',
            studyType: 'Bachelor of Business Administration',
            startDate: '2003-08',
            endDate: '2004-05',
            gpa: '3.2 in Major (Dean\'s List)',
        }
    ],
    skills: [
        {
            "name": "AWS",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Android",
            "level": 70,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Angular (version 2+) ",
            "level": 80,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Ansible",
            "level": 40,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "AppDynamics",
            "level": 40,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Bootstrap ",
            "level": 80,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Build Pipelines",
            "level": 80,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "C#",
            "level": 80,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "C++",
            "level": 40,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "CI",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "CSS",
            "level": 80,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Cassandra",
            "level": 70,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Chef",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Cloud Foundry (PCF)",
            "level": 80,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Docker",
            "level": 80,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Google Compute Engine/Cloud",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Groovy",
            "level": 50,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Grunt",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Gulp",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "HTML",
            "level": 90,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Hadoop",
            "level": 20,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Java",
            "level": 90,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Javascript",
            "level": 80,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Javascript visualization libraries (D3.js)",
            "level": 50,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Kotlin",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Less",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Machine Learning",
            "level": 20,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Microsoft SQL ",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Mobile Web",
            "level": 80,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Mongo",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "MySQL",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "New Relic",
            "level": 30,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Node JS",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Open Stack",
            "level": 40,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Oracle",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "PHP",
            "level": 40,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Postgres",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Processing",
            "level": 50,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Puppet",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Python",
            "level": 70,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Rabbit MQ",
            "level": 70,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "React",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "React Native",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Ruby",
            "level": 80,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "SQL",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Scala",
            "level": 40,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Splunk",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Unix/Linux",
            "level": 90,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "Webpack",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "iOS",
            "level": 60,
            "keywords": [
                "Technical"
            ]
        },
        {
            "name": "C# application development",
            "level": 80,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Capybara",
            "level": 60,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Cucumber",
            "level": 80,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Go",
            "level": 40,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Java application development",
            "level": 90,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Java test automation",
            "level": 90,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "JavaScript application development",
            "level": 90,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Jbehave",
            "level": 60,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Jenkins",
            "level": 80,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Load testing",
            "level": 60,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Manual/Exploratory Testing",
            "level": 70,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Mobile Development (Android / iOS / PhoneGap)",
            "level": 80,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Mobile test automation - Android",
            "level": 60,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Performance testing",
            "level": 60,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Requirements Analysis",
            "level": 80,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Ruby application development",
            "level": 80,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Ruby on Rails",
            "level": 80,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Ruby test automation",
            "level": 70,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Security testing",
            "level": 40,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Selenium-webdriver",
            "level": 70,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "TeamCity",
            "level": 80,
            "keywords": [
                "Testing"
            ]
        },
        {
            "name": "Communication",
            "level": 80,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Executive Advisory",
            "level": 70,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Facilitation",
            "level": 80,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Influence",
            "level": 80,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Innovating",
            "level": 80,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Negotiation",
            "level": 80,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Organisational Transformation",
            "level": 70,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Planning",
            "level": 70,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Presenting",
            "level": 90,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Problem solving",
            "level": 90,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Questioning",
            "level": 90,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Relationship building",
            "level": 80,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Strategy",
            "level": 70,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Synthesis",
            "level": 80,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "System thinking",
            "level": 70,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Teaching",
            "level": 90,
            "keywords": [
                "Consulting"
            ]
        },
        {
            "name": "Computers & Electronics",
            "level": 80,
            "keywords": [
                "Domain"
            ]
        },
        {
            "name": "Engineering, Research & Development",
            "level": 60,
            "keywords": [
                "Domain"
            ]
        },
        {
            "name": "Financial Services & Insurance",
            "level": 80,
            "keywords": [
                "Domain"
            ]
        },
        {
            "name": "Government",
            "level": 60,
            "keywords": [
                "Domain"
            ]
        },
        {
            "name": "Software & Internet",
            "level": 80,
            "keywords": [
                "Domain"
            ]
        },
        {
            "name": "Analytics",
            "level": 40,
            "keywords": [
                "BA & XD"
            ]
        },
        {
            "name": "Business Vision & Context Analysis ",
            "level": 40,
            "keywords": [
                "BA & XD"
            ]
        },
        {
            "name": "Concept Generation",
            "level": 40,
            "keywords": [
                "BA & XD"
            ]
        },
        {
            "name": "Storytelling & Storyboarding",
            "level": 60,
            "keywords": [
                "BA & XD"
            ]
        },
        {
            "name": "UI Development",
            "level": 60,
            "keywords": [
                "BA & XD"
            ]
        },
        {
            "name": "Usability Research",
            "level": 40,
            "keywords": [
                "BA & XD"
            ]
        },
        {
            "name": "Usability Testing",
            "level": 40,
            "keywords": [
                "BA & XD"
            ]
        },
        {
            "name": "User Research & Customer Analysis", "level": 40,
            "keywords": [
                "BA & XD"
            ]
        },
        {
            "name": "Visual Design",
            "level": 60,
            "keywords": [
                "BA & XD"
            ]
        },
        {
            "name": "Arabic",
            "level": 40,
            "keywords": [
                "Language"
            ]
        },
        {
            "name": "French",
            "level": 40,
            "keywords": [
                "Language"
            ]
        },
        {
            "name": "Hindi",
            "level": 80,
            "keywords": [
                "Language"
            ]
        },
        {
            "name": "Spanish",
            "level": 40,
            "keywords": [
                "Language"
            ]
        }

    ],
    languages: [
        {
            name: 'English',
            level: 'Native speaker',
        },
        {
            name: 'Hexadecimal',
            level: 'Veteran',
        },
        {
            name: 'Spanish',
            level: 'Intermediate',
        },
    ],
    interests: [
        {
            name: 'Music',
            keywords: [
                'Playing: I play various stringed instruments, from acoustic/electric guitar, to bass, to mandolin',
            ],
        },
        {
            name: 'Virtual Reality',
            keywords: [
                'Vive/Gear VR exploration',
            ],
        },
        {
            name: 'Soccer',
            keywords: [
                'PL: Manchester City',
                'MLS: Atlanta United',
                'La Liga: Real Madrid',
            ],
        },
        {
            name: 'Video Games',
            keywords: [
                'PC/PS4',
            ],
        },
        {
            name: 'Off-Roading',
            keywords: [
                'I love my Jeep',
            ],
        },
    ],
    references: [
        {
            name: 'Jian Yang',
            reference: "I do not respect you. You're not any kind of investor, you own nothing",
        },
        {
            name: 'Jian Yang',
            reference: "Erlich Bachman...This is you as and old man. I'm ugly and I'm dead. Alone",
        },
        {
            name: 'CJ Cantwell',
            reference: 'Bachman recently founded venture capital firm Bachmanity Capital with tech icon (soon to be legend, I’m sure) Nelson “Big Head” Bighetti, and the pair hosted a lavish launch event, aptly titled “Bachmanity Insanity.” The party, like Bachman, was loud, extravagant and a bit of a farce. It was a luau. At Alcatraz. One for which Bachman chose to pay for all liquor at retail cost, and one where he lost a giant fiberglass Tiki head at the bottom of the bay. The expenses for fire dancers, flair bartenders and exotic caterers totaled over $1 million. Bachman maintains these were “practical costs for any groundbreaking business.”',
        },
        {
            name: 'CJ Cantwell',
            reference: 'Bachmanity burned too bright, like the custom lighting at its luau and, like that lighting, the bulb burned out.',
        },
    ],
};

export const locationType = PropTypes.shape({
    address: PropTypes.string,
    postalCode: PropTypes.string,
    city: PropTypes.string,
    countryCode: PropTypes.string,
    region: PropTypes.string,
}).isRequired;

export const profileType = PropTypes.shape({
    network: PropTypes.string,
    username: PropTypes.string,
    url: PropTypes.string,
}).isRequired;

export const basicsType = PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    picture: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
    location: PropTypes.shape(locationType),
    profiles: PropTypes.arrayOf(profileType),
}).isRequired;

export const workType = PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const volunteerType = PropTypes.arrayOf(PropTypes.shape({
    organization: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const educationType = PropTypes.arrayOf(PropTypes.shape({
    institution: PropTypes.string,
    area: PropTypes.string,
    studyType: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    gpa: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const awardsType = PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    awarder: PropTypes.string,
    summary: PropTypes.string,
})).isRequired;

export const publicationsType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    publisher: PropTypes.string,
    releaseDate: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
})).isRequired;

export const skillsType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const languagesType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
})).isRequired;

export const interestsType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const referencesType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    reference: PropTypes.string,
})).isRequired;

export const resumeType = PropTypes.shape({
    basics: basicsType,
    work: workType,
    volunteer: volunteerType,
    education: educationType,
    awards: awardsType,
    publications: publicationsType,
    skills: skillsType,
    languages: languagesType,
    interests: interestsType,
    references: referencesType,
});
