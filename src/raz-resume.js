import PropTypes from "prop-types";

export const raz = {
  basics: {
    name: "Mehraz Ali",
    label: "Consultant, Builder, Leader",
    picture: "./profile.png",
    email: "mehraz.ali@live.com",
    phone: "1 (404) 889-6729",
    website: "https://www.mehrazali.com",
    summary: `Call me Raz. I'm an engineer, builder and leader with over 10 years of experience in consulting. I've worked in various roles, excelling in defining project needs, building applications, designing systems, leading teams, and providing strategic guidance. As a Principal at Slalom _build, I address complex tech issues with effective solutions. My consulting approach encourages team success and aligns with business goals. I believe in understanding each team member's potential and guiding them towards improvement and success. My principles include creating enjoyable products, handling complexity wisely, and valuing practical solutions. In my role, I aim to develop a team of skilled engineers, collaborate with clients to craft solutions that fit their business, and work with the Slalom_build team to create top-notch applications using a wide range of technologies, ensuring our projects set a standard for software excellence.`,
    location: {
      postalCode: "30319",
      city: "Brookhaven",
      countryCode: "USA",
      region: "Georgia",
    },
    profiles: [
      {
        network: "GitHub",
        username: "FooBarRaz",
        url: "https://www.github.com/FooBarRaz",
      },
      {
        network: "Twitter",
        username: "fakeplasticdroid",
        url: "https://twitter.com/fakeplasticdroid",
      },
      {
        network: "LinkedIn",
        username: "mehraz-ali",
        url: "https://www.linkedin.com/in/mehraz-ali-b42b8412/",
      },
    ],
  },
  work: [
    {
      company: "Slalom Build",
      position:
        "Principal, Software Engineering (prev: Solution Architect in SE)",
      website: "https://slalombuild.com",
      startDate: "2019-09-16",
      endDate: "Present",
      summary: `Responsible for leading client engagements, project teams/pods, and individual contributors.  
                Growing a group of Engineers: connecting regularly to provide professional development, career guidance, and development opportunities.  
                Assessing client business challenges and providing guidance and insight to ensure best-fit technology solutions.  
                Collaborating with delivery managers to right-size the work effort required for a solution.  
                Working with our highly skilled Slalom team to design and develop state-of-the-art outcomes.  
                Designing, documenting, and developing outstanding, modern applications using the full spectrum of technologies and design patterns.  
                Assisting with estimating work efforts required for each phase of a project.  
                Working on POC projects with cutting-edge technologies.  
                `,
      highlights: [
        "Consulting",
        "Discovery",
        "Delivery",
        "Agile",
        "Engagement Management",
        "Lean and Continuous Delivery",
        "People Management",
        "Professional Development and Mentorship",
        "Architecture and Design",
        "Process Improvement",
        "Conflict Management",
        "Relationship Building",
        "Community Engagement",
        "Thought Leadership",
        "Public Speaking",
        "Technical Leadership",
        "Technical Coaching",
        "Technical Enablement",
        "Technical Strategy",
        "Technical Vision",
        "Technical Roadmapping",
        "Technical Solutioning",
        "Technical Design",
        "Technical Delivery",
        "Technical Implementation",
        "Technical Execution",
        "Technical Oversight",
        "Technical Direction",
        "Technical Guidance",
      ],
    },
    {
      company: "ThoughtWorks",
      position: "Lead Developer, Consultant (prev: Senior Developer)",
      website: "http://thoughtworks.com",
      startDate: "2014-02-01",
      endDate: "2019-09-13",
      summary:
        "Working as consultant for a multinational IT Services company on a wide variety of client projects across a range of industries. Projects involved everything from coaching and enablement, to delivery, and everything in between.",
      highlights: [
        "Consulting",
        "Agile",
        "Lean and Continuous Delivery",
        "Test-Driven Development",
        "Pair Programming",
        "Education and Mentorship",
        "Public Speaking",
        "Clean Coding Practices",
        "Architecture and Design",
        "Workshops",
        "Process Improvement",
        "Organizational Transformation",
        "Conflict Management",
        "Relationship Building",
      ],
    },
    {
      company: "Kinexys",
      position: "Founder/CXO",
      website: "http://kinexys.com",
      startDate: "2017-01-01",
      endDate: "Present",
      summary:
        "I founded this company as a legal entity around my passion projects. Watch this space for updates.",
      highlights: [
        "Started the company",
        "Took Shotcaller from inception to production",
        "Published Shotcaller to Apple App Store and Google Play Store",
        "Social Media App",
        "iOS",
        "Android",
        "Mobile Web",
        "OAuth 2.0",
        "PostGIS",
        "ReactNative",
        "Heroku",
        "Ruby on Rails",
        "AWS",
        "Phonegap (Legacy)",
        "KnockoutJs (Legacy)",
      ],
    },
    {
      company: "Business Development/Analytics Company in Cincinnati, OH",
      position: "Technical Lead/Sr. Software Engineer",
      startDate: "2017-10-01",
      endDate: "2019-04-30",
      summary: `Worked with a Business Analytics company to help them build their flagship analytics platform from a greenfield.
             The goal of this project was to develop and deliver an application that would provide vendors for a major retailer with actionable insights based on their retail sales data.
             I helped lead a team of 12 developers to build a full-stack application, with an Angular(6/7) frontend and a cluster of SpringBoot-powered Java microservices on the backend.
             Through the course of the project, I worked on training and coaching the team on development and testing best practices, as well as enabling them to work location-independently with a remote team in Deerfield, IL and other remote members across the country.`,
      highlights: [
        "Greenfield",
        "Stream lead",
        "Code-zero to prod",
        "Production Support",
        "Microservices",
        "Pivotal Cloud Foundry",
        "Distributed Team",
        "Feature Toggles",
        "CLI development (Commander)",
        "Angular2/4/6/7",
        "Rxjs / NgRx",
        "Java",
        "Spring Boot",
        "Spring CloudStream",
        "Spring Batch",
        "RabbitMQ",
        "HATEOAS",
      ],
    },
    {
      company: "Consumer Credit Reporting Agency in Atlanta, GA",
      position: "Sr. Software Engineer",
      startDate: "2017-06-01",
      endDate: "2017-10-01",
      summary: `I worked with a Consumer Credit Reporting Agency to build a system to analyze their authentication systems for risk indicators.
             The goal of this project was to be able to track access patterns across a number of factual, situational, and behavioral metrics in order to build a risk profile of a user attempting to log in to the system to predict and raise alerts around fraudulent activity.
             I was part of a team of 8 developers who worked to stand up the backend infrastructure for that system using a variety of tools including Java, CassandraDB, Apache Avro, Apache Kafka, and various clickstream aggregators.`,
      highlights: [
        "Greenfield",
        "Cassandra",
        "Security",
        "Distributed Team",
        "Java",
        "Spring Config Server",
      ],
    },
    {
      company: "Credit Card and Payment Services Provider in Wilmington, DE",
      position: "Sr. Software Engineer",
      startDate: "2017-01-01",
      endDate: "2017-06-01",
      summary: `I worked for a credit card and payment services provider on a number of engagements, that involved building, maintaining, and supporting their core business services platform in production.
            This was a massive, event-sourced system comprised of dozens of microservices, serving tens of thousands of users on a daily basis. 
            I was involved in a variety of initiatives there, ranging from production support, to inceptions for new product offerings, all the way to experimental research efforts.
            In these efforts, I worked with a variety of technologies including Spring Cloud Stream, Kafka, and the Axon event sourcing framework. 
            I was also instrumental in helping develop a command line tool for developers to automate mundane development tasks.`,
      highlights: [
        "Legacy",
        "Microservices",
        "CQRS/Event Sourcing",
        "Production Support",
        "CLI development (Thor, bash)",
        "Java",
        "Ruby",
        "Golang",
        "Spring Boot",
        "Spring Cloud Dataflow",
        "Kafka",
        "Axon",
        "Distributed Team",
      ],
    },
    {
      company: "Mortgage Loan and Financial Services Company in Reston, VA",
      position: "Technical Lead/Sr. Developer",
      startDate: "2016-06-01",
      endDate: "2016-12-01",
      summary: `I worked on two different projects for a Mortgage Loan and Financial Services company in Reston, VA.
             The first one involved building a testing framework for their data engineers to validate their ETL jobs.
             This was an ambitious undertaking led by myself, and the end result was a series of custom-built tools and processes that resulted in an over 50% reduction in time spent testing new ETL processes/jobs. 
             Following that delivery effort, I transitioned over to another project where I helped coach 5 different scrum teams on Agile development practices through pairing, structured learning and presentations, as they worked to build out a next-generation offering to replace a legacy loan delivery system.
`,
      highlights: [
        "Greenfield",
        "Coaching and Enablement",
        "AWS",
        "Angular",
        "Full-stack",
        "Spring Boot",
        "Trunk-based Development",
        "Test-Driven Development",
        "Testing Practices",
        "Refactoring",
        "Data Testing Framework",
        "Legacy System",
        "ETL",
        "Behaviour Driven Development",
      ],
    },
    {
      company: "Automobile Auction Company in Atlanta, GA",
      position: "Sr. Software Engineer",
      startDate: "2015-03-01",
      endDate: "2016-06-01",
      summary: `I worked for an Automobile Auction Company where I and a team of 5-10 other developers worked on enhancing the capabilities of a legacy messaging platform.
             This involved delivery work with regards to creating and deploying some new services concerned with financial settlements for auctioned vehicles.
             During my time there, I also worked on coaching client developers on best practices related to working with legacy systems, including testing, automation, and refactoring.`,
      highlights: [
        "Legacy",
        "Java",
        "ETL",
        "ActiveMQ",
        "Production Support",
        "Tibco ActiveMatrix/EMS",
        "Informatica",
        "Oracle SQL",
        "AS/400",
      ],
    },
    {
      company: "Cooking Appliances Manufacturer in Columbus, GA",
      position: "Software Developer",
      startDate: "2014-09-01",
      endDate: "2015-02-01",
      summary:
        "I worked on building a mobile app with product recommendation engine for a company that manufactures cooking appliances.",
      highlights: [
        "Greenfield",
        "Mobile",
        "Recommendation Engine",
        "Full-stack",
        "Ruby on Rails",
      ],
    },
    {
      company: "Human Capital Software Company in Weston, FL",
      position: "Software Developer",
      startDate: "2014-03-01",
      endDate: "2015-08-01",
      summary:
        "I worked on developing an organizational management and charting application for a company that makes HR Software",
      highlights: [
        "C#",
        ".NET MVC",
        "KnockoutJs",
        "D3.js",
        "Bootstrap",
        "NUnit",
        "Greenfield",
        "Full-stack",
        "Cucumber",
      ],
    },
    {
      company: "CineMassive Displays",
      position: "Software Engineer",
      startDate: "2011-12",
      endDate: "2014-02",
      summary:
        "Worked on building a desktop application for managing video sources and interfacing with proprietary hardware, amongst several other things.",
      highlights: ["C#", "WPF", "Video Signal Processing", "Full-stack"],
    },
  ],
  volunteer: [
    {
      organization: "ZipCode Wilmington",
      position: "Volunteer",
      website: "https://www.zipcodewilmington.com/",
      startDate: "2017-03",
      summary: null,
      highlights: [
        "Helping aspring software developers work on group projects, and prepare for interviews with potential employers",
      ],
    },
    {
      organization: "Digital Youth Founders",
      position: "Volunteer",
      website: "http://organization.com/",
      summary: null,
      highlights: [
        "Helping middle and high-school kids learn to build software.",
      ],
    },
    {
      organization: "Trees Atlanta",
      position: "Volunteer",
      website: "http://organization.com/",
      summary: "Planting new trees to replace ones lost to urban development",
      highlights: [],
    },
    {
      organization: "Open Hand",
      position: "Volunteer",
      website: "http://organization.com/",
      summary:
        "Delivering food and groceries to people with disabilities and chronic ilnesses.",
      highlights: ["1,000 pounds of food donations"],
    },
    {
      organization: "Atlanta Community Food Bank",
      position: "Volunteer",
      website: "https://www.acfb.org/",
      summary:
        "Sorting and packing food donations for distribution to local food pantries.",
    },
  ],
  education: [
    {
      institution: "Georgia State University",
      area: "Computer Science",
      studyType: "M.Sc. in Computer Science (incomplete)",
      startDate: "2005-08",
      endDate: "2006-01",
      gpa: "4.30",
      courses: [],
    },
    {
      institution: "University of Georgia",
      area: "Marketing",
      studyType: "Bachelor of Business Administration",
      startDate: "2003-08",
      endDate: "2004-05",
      gpa: "3.2 in Major (Dean's List)",
      courses: [],
    },
  ],
  skills: [
    {
      name: "AWS",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Android",
      level: 70,
      keywords: ["Technical"],
    },
    {
      name: "Angular (version 2+) ",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Ansible",
      level: 40,
      keywords: ["Technical"],
    },
    {
      name: "AppDynamics",
      level: 40,
      keywords: ["Technical"],
    },
    {
      name: "Bootstrap ",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Build Pipelines",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "C#",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "C++",
      level: 40,
      keywords: ["Technical"],
    },
    {
      name: "CI",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "CSS",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Cassandra",
      level: 70,
      keywords: ["Technical"],
    },
    {
      name: "Chef",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Cloud Foundry (PCF)",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Docker",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Google Compute Engine/Cloud",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Groovy",
      level: 50,
      keywords: ["Technical"],
    },
    {
      name: "Grunt",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Gulp",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "HTML",
      level: 90,
      keywords: ["Technical"],
    },
    {
      name: "Hadoop",
      level: 20,
      keywords: ["Technical"],
    },
    {
      name: "Java",
      level: 90,
      keywords: ["Technical"],
    },
    {
      name: "Javascript",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Javascript visualization libraries (D3.js)",
      level: 50,
      keywords: ["Technical"],
    },
    {
      name: "Kotlin",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Less",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Machine Learning",
      level: 20,
      keywords: ["Technical"],
    },
    {
      name: "Microsoft SQL ",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Mobile Web",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "Mongo",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "MySQL",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "New Relic",
      level: 30,
      keywords: ["Technical"],
    },
    {
      name: "Node JS",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Open Stack",
      level: 40,
      keywords: ["Technical"],
    },
    {
      name: "Oracle",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "PHP",
      level: 40,
      keywords: ["Technical"],
    },
    {
      name: "Postgres",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Processing",
      level: 50,
      keywords: ["Technical"],
    },
    {
      name: "Puppet",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Python",
      level: 70,
      keywords: ["Technical"],
    },
    {
      name: "Rabbit MQ",
      level: 70,
      keywords: ["Technical"],
    },
    {
      name: "React",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "React Native",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Ruby",
      level: 80,
      keywords: ["Technical"],
    },
    {
      name: "SQL",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Scala",
      level: 40,
      keywords: ["Technical"],
    },
    {
      name: "Splunk",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "Unix/Linux",
      level: 90,
      keywords: ["Technical"],
    },
    {
      name: "Webpack",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "iOS",
      level: 60,
      keywords: ["Technical"],
    },
    {
      name: "C# application development",
      level: 80,
      keywords: ["Testing"],
    },
    {
      name: "Capybara",
      level: 60,
      keywords: ["Testing"],
    },
    {
      name: "Cucumber",
      level: 80,
      keywords: ["Testing"],
    },
    {
      name: "Go",
      level: 40,
      keywords: ["Testing"],
    },
    {
      name: "Java application development",
      level: 90,
      keywords: ["Testing"],
    },
    {
      name: "Java test automation",
      level: 90,
      keywords: ["Testing"],
    },
    {
      name: "JavaScript application development",
      level: 90,
      keywords: ["Testing"],
    },
    {
      name: "Jbehave",
      level: 60,
      keywords: ["Testing"],
    },
    {
      name: "Jenkins",
      level: 80,
      keywords: ["Testing"],
    },
    {
      name: "Load testing",
      level: 60,
      keywords: ["Testing"],
    },
    {
      name: "Manual/Exploratory Testing",
      level: 70,
      keywords: ["Testing"],
    },
    {
      name: "Mobile Development (Android / iOS / PhoneGap)",
      level: 80,
      keywords: ["Testing"],
    },
    {
      name: "Mobile test automation - Android",
      level: 60,
      keywords: ["Testing"],
    },
    {
      name: "Performance testing",
      level: 60,
      keywords: ["Testing"],
    },
    {
      name: "Requirements Analysis",
      level: 80,
      keywords: ["Testing"],
    },
    {
      name: "Ruby application development",
      level: 80,
      keywords: ["Testing"],
    },
    {
      name: "Ruby on Rails",
      level: 80,
      keywords: ["Testing"],
    },
    {
      name: "Ruby test automation",
      level: 70,
      keywords: ["Testing"],
    },
    {
      name: "Security testing",
      level: 40,
      keywords: ["Testing"],
    },
    {
      name: "Selenium-webdriver",
      level: 70,
      keywords: ["Testing"],
    },
    {
      name: "TeamCity",
      level: 80,
      keywords: ["Testing"],
    },
    {
      name: "Communication",
      level: 80,
      keywords: ["Consulting"],
    },
    {
      name: "Executive Advisory",
      level: 70,
      keywords: ["Consulting"],
    },
    {
      name: "Facilitation",
      level: 80,
      keywords: ["Consulting"],
    },
    {
      name: "Influence",
      level: 80,
      keywords: ["Consulting"],
    },
    {
      name: "Innovating",
      level: 80,
      keywords: ["Consulting"],
    },
    {
      name: "Negotiation",
      level: 80,
      keywords: ["Consulting"],
    },
    {
      name: "Organisational Transformation",
      level: 70,
      keywords: ["Consulting"],
    },
    {
      name: "Planning",
      level: 70,
      keywords: ["Consulting"],
    },
    {
      name: "Presenting",
      level: 90,
      keywords: ["Consulting"],
    },
    {
      name: "Problem solving",
      level: 90,
      keywords: ["Consulting"],
    },
    {
      name: "Questioning",
      level: 90,
      keywords: ["Consulting"],
    },
    {
      name: "Relationship building",
      level: 80,
      keywords: ["Consulting"],
    },
    {
      name: "Strategy",
      level: 70,
      keywords: ["Consulting"],
    },
    {
      name: "Synthesis",
      level: 80,
      keywords: ["Consulting"],
    },
    {
      name: "System thinking",
      level: 70,
      keywords: ["Consulting"],
    },
    {
      name: "Teaching",
      level: 90,
      keywords: ["Consulting"],
    },
    {
      name: "Computers & Electronics",
      level: 80,
      keywords: ["Domain"],
    },
    {
      name: "Engineering, Research & Development",
      level: 60,
      keywords: ["Domain"],
    },
    {
      name: "Financial Services & Insurance",
      level: 80,
      keywords: ["Domain"],
    },
    {
      name: "Government",
      level: 60,
      keywords: ["Domain"],
    },
    {
      name: "Software & Internet",
      level: 80,
      keywords: ["Domain"],
    },
    {
      name: "Analytics",
      level: 40,
      keywords: ["BA & XD"],
    },
    {
      name: "Business Vision & Context Analysis ",
      level: 40,
      keywords: ["BA & XD"],
    },
    {
      name: "Concept Generation",
      level: 40,
      keywords: ["BA & XD"],
    },
    {
      name: "Storytelling & Storyboarding",
      level: 60,
      keywords: ["BA & XD"],
    },
    {
      name: "UI Development",
      level: 60,
      keywords: ["BA & XD"],
    },
    {
      name: "Usability Research",
      level: 40,
      keywords: ["BA & XD"],
    },
    {
      name: "Usability Testing",
      level: 40,
      keywords: ["BA & XD"],
    },
    {
      name: "User Research & Customer Analysis",
      level: 40,
      keywords: ["BA & XD"],
    },
    {
      name: "Visual Design",
      level: 60,
      keywords: ["BA & XD"],
    },
    {
      name: "Arabic",
      level: 40,
      keywords: ["Language"],
    },
    {
      name: "French",
      level: 40,
      keywords: ["Language"],
    },
    {
      name: "Hindi",
      level: 80,
      keywords: ["Language"],
    },
    {
      name: "Spanish",
      level: 40,
      keywords: ["Language"],
    },
  ],
  languages: [
    {
      name: "English",
      level: "Native speaker",
    },
    {
      name: "Hindi",
      level: "Native speaker",
    },
    {
      name: "Urdu",
      level: "Fluent",
    },
    {
      name: "Arabic",
      level: "Basic",
    },
    {
      name: "Spanish",
      level: "Basic",
    },
    {
      name: "French",
      level: "Basic",
    },
  ],
  interests: [
    {
      name: "Music",
      keywords: [
        "Playing: I play various stringed instruments, from acoustic/electric guitar, to bass, to mandolin",
      ],
    },
    {
      name: "Virtual Reality",
      keywords: ["Vive/Gear VR exploration"],
    },
    {
      name: "Soccer",
      keywords: ["PL: Manchester City", "MLS: Atlanta United"],
    },
    {
      name: "Video Games",
      keywords: ["PC/PS4"],
    },
    {
      name: "Outdoors",
      keywords: ["Hiking", "Kayaking", "Biking"],
    },
  ],
  references: [],
  awards: [],
  publications: [],
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

export const workType = PropTypes.arrayOf(
  PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const volunteerType = PropTypes.arrayOf(
  PropTypes.shape({
    organization: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const educationType = PropTypes.arrayOf(
  PropTypes.shape({
    institution: PropTypes.string,
    area: PropTypes.string,
    studyType: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    gpa: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const awardsType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    awarder: PropTypes.string,
    summary: PropTypes.string,
  })
).isRequired;

export const publicationsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    publisher: PropTypes.string,
    releaseDate: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
  })
).isRequired;

export const skillsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number,
    keywords: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const languagesType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
  })
).isRequired;

export const interestsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const referencesType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    reference: PropTypes.string,
  })
).isRequired;

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
